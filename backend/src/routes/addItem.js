const db = require('../persistence');
const { v4: uuid } = require('uuid');

module.exports = async (req, res) => {
    // MODIFIÉ : On récupère 'name' et 'dueDate' du corps de la requête
    const { name, dueDate } = req.body;

    // Ajout d'une petite validation
    if (!name || !dueDate) {
        return res.status(400).send({ error: 'Le nom et la date d\'échéance sont requis. ' });
    }

    const item = {
        id: uuid(),
        name: name,
        completed: false,
        dueDate: dueDate, // MODIFIÉ : On ajoute la date d'échéance à l'objet
    };

    await db.storeItem(item);
    res.status(201).send(item); // On utilise 201 Created pour un ajout réussi
};