const waitPort = require('wait-port');
const fs = require('fs');
const mysql = require('mysql2');

const {
    MYSQL_HOST: HOST,
    MYSQL_HOST_FILE: HOST_FILE,
    MYSQL_USER: USER,
    MYSQL_USER_FILE: USER_FILE,
    MYSQL_PASSWORD: PASSWORD,
    MYSQL_PASSWORD_FILE: PASSWORD_FILE,
    MYSQL_DB: DB,
    MYSQL_DB_FILE: DB_FILE,
} = process.env;

let pool;

async function init() {
    const host = HOST_FILE ? fs.readFileSync(HOST_FILE) : HOST;
    const user = USER_FILE ? fs.readFileSync(USER_FILE) : USER;
    const password = PASSWORD_FILE ? fs.readFileSync(PASSWORD_FILE) : PASSWORD;
    const database = DB_FILE ? fs.readFileSync(DB_FILE) : DB;

    await waitPort({
        host,
        port: 3306,
        timeout: 10000,
        waitForDns: true,
    });

    pool = mysql.createPool({
        connectionLimit: 5,
        host,
        user,
        password,
        database,
        charset: 'utf8mb4',
    }).promise(); // On utilise les promesses pour un code plus propre

    // MODIFIÉ : Ajout de la colonne "dueDate" de type DATE
    const createTableSql = `
        CREATE TABLE IF NOT EXISTS todo_items (
            id varchar(36), 
            name varchar(255), 
            completed boolean,
            dueDate DATE, 
            PRIMARY KEY (id)
        ) DEFAULT CHARSET utf8mb4
    `;

    try {
        await pool.query(createTableSql);
        console.log(`Connected to mysql db at host ${HOST}`);
    } catch (err) {
        throw new Error(err);
    }
}

async function teardown() {
    await pool.end();
}

async function getItems() {
    const [rows] = await pool.query('SELECT * FROM todo_items');
    return rows.map((item) =>
        Object.assign({}, item, {
            completed: item.completed === 1,
        }),
    );
}

async function getItem(id) {
    const [rows] = await pool.query('SELECT * FROM todo_items WHERE id=?', [id]);
    if (rows.length === 0) return null;
    return Object.assign({}, rows[0], {
        completed: rows[0].completed === 1,
    });
}

async function storeItem(item) {
    // MODIFIÉ : Ajout de la colonne "dueDate" dans l'insertion
    await pool.query(
        'INSERT INTO todo_items (id, name, completed, dueDate) VALUES (?, ?, ?, ?)',
        [item.id, item.name, item.completed ? 1 : 0, item.dueDate],
    );
}

async function updateItem(id, item) {
    // MODIFIÉ : Ajout de "dueDate" dans la mise à jour
    await pool.query(
        'UPDATE todo_items SET name=?, completed=?, dueDate=? WHERE id=?',
        [item.name, item.completed ? 1 : 0, item.dueDate, id],
    );
}

async function removeItem(id) {
    await pool.query('DELETE FROM todo_items WHERE id = ?', [id]);
}

module.exports = {
    init,
    teardown,
    getItems,
    getItem,
    storeItem,
    updateItem,
    removeItem,
};