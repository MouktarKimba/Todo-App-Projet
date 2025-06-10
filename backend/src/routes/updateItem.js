const db = require('../persistence');

module.exports = async (req, res) => {
    // ÉTAPE 1 : Récupérer la tâche actuelle pour avoir ses valeurs par défaut
    const currentItem = await db.getItem(req.params.id);

    if (!currentItem) {
        return res.status(404).send({ error: 'Tâche non trouvée.' });
    }

    // ÉTAPE 2 : Créer l'objet mis à jour.
    // On utilise les nouvelles valeurs si elles existent dans la requête,
    // sinon on garde les anciennes valeurs de 'currentItem'.
    const updatedItem = {
        name: req.body.name !== undefined ? req.body.name : currentItem.name,
        completed: req.body.completed !== undefined ? req.body.completed : currentItem.completed,
        dueDate: req.body.dueDate !== undefined ? req.body.dueDate : currentItem.dueDate,
    };

    // ÉTAPE 3 : Sauvegarder l'objet complet en base de données
    await db.updateItem(req.params.id, updatedItem);
    
    // ÉTAPE 4 : Renvoyer la tâche mise à jour au client
    const item = await db.getItem(req.params.id);
    res.send(item);
};