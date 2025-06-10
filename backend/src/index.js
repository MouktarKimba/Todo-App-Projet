// Fichier: backend/src/index.js
// Point d'entrée principal pour le serveur backend.

// --- Importation des dépendances ---
const express = require('express');
const app = express();
const db = require('./persistence'); // Gestion de la base de données
const getGreeting = require('./routes/getGreeting');
const getItems = require('./routes/getItems');
const addItem = require('./routes/addItem');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');

// --- Middleware ---
// Permet au serveur de comprendre les requêtes JSON
app.use(express.json());
// Sert les fichiers statiques (si vous en avez, par exemple une version buildée du client)
app.use(express.static(__dirname + '/static'));

// --- Définition des Routes de l'API ---
// Chaque route est associée à une fonction spécifique.
app.get('/api/greeting', getGreeting);         // Route pour un message d'accueil
app.get('/api/items', getItems);             // Route pour obtenir toutes les tâches
app.post('/api/items', addItem);             // Route pour ajouter une nouvelle tâche
app.put('/api/items/:id', updateItem);       // Route pour mettre à jour une tâche existante
app.delete('/api/items/:id', deleteItem);    // Route pour supprimer une tâche

// --- Démarrage du serveur ---
// Initialise la base de données, puis démarre le serveur Express.
db.init()
    .then(() => {
        app.listen(3000, () => console.log('Serveur démarré et à l\'écoute sur le port 3000'));
    })
    .catch((err) => {
        console.error("Erreur lors de l'initialisation de la base de données:", err);
        process.exit(1); // Quitte l'application en cas d'erreur critique
    });

// --- Gestion de la fermeture propre de l'application ---
// Cette fonction s'assure que la connexion à la base de données est bien fermée
// lorsque le processus Node.js est arrêté.
const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

// Écoute les signaux d'arrêt du système
process.on('SIGINT', gracefulShutdown);  // Ctrl+C
process.on('SIGTERM', gracefulShutdown); // Signal d'arrêt standard
process.on('SIGUSR2', gracefulShutdown); // Signal utilisé par nodemon pour le redémarrage