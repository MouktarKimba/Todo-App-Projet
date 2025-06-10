# Gestionnaire de Tâches - Projet Académique

Bienvenue sur mon projet de Gestionnaire de Tâches, une application web moderne et complète développée dans le cadre de mon cursus académique. L'application permet de gérer des tâches quotidiennes de manière simple et intuitive.

Ce projet démontre la mise en place d'une architecture web complète avec un frontend en React, un backend en Node.js, et une base de données MySQL, le tout orchestré dans un environnement de développement professionnel avec Docker.

![Aperçu de l'application](https://i.imgur.com/uG9nB7Q.png) 
*NOTE : Je te conseille de faire une vraie capture d'écran de ton application finale et de remplacer le lien ci-dessus.*

---

## ✨ Fonctionnalités

* **Ajout, Modification et Suppression** de tâches.
* **Dates d'échéance** pour chaque tâche.
* Marquer une tâche comme **terminée** et consulter l'historique.
* **Filtres dynamiques** pour afficher les tâches : "Aujourd'hui", "À venir" et "En retard".
* Interface utilisateur **moderne et responsive** avec un fond vidéo animé pour une expérience utilisateur agréable.

---

## 🛠️ Technologies Utilisées

Ce projet a été construit avec les technologies suivantes :

* **Frontend :**
    * [React](https://reactjs.org/)
    * [Vite](https://vitejs.dev/)
    * [Sass](https://sass-lang.com/)
    * [React-Bootstrap](https://react-bootstrap.github.io/)
    * [date-fns](https://date-fns.org/) pour la manipulation des dates.

* **Backend :**
    * [Node.js](https://nodejs.org/)
    * [Express.js](https://expressjs.com/)

* **Base de Données :**
    * [MySQL](https://www.mysql.com/)

* **Environnement & Déploiement :**
    * [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
    * [Traefik](https://traefik.io/traefik/) comme reverse proxy.

---

## 🚀 Installation et Lancement

Pour lancer ce projet en local, vous aurez besoin de **Docker Desktop** installé sur votre machine.

1.  **Clonez ce dépôt GitHub :**
    ```bash
    # Remplace avec l'URL de TON propre dépôt GitHub
    git clone [https://github.com/TonNom/TonRepo.git](https://github.com/TonNom/TonRepo.git)
    ```

2.  **Naviguez dans le dossier du projet :**
    ```bash
    cd TonRepo
    ```

3.  **Construisez et lancez les conteneurs Docker :**
    Cette commande va construire les images du backend et du frontend, télécharger MySQL et le proxy, et démarrer tous les services.
    ```bash
    docker-compose up --build
    ```
    La première fois, cela peut prendre quelques minutes.

---

## 🌐 Comment Utiliser l'Application

Une fois les conteneurs démarrés, vous pouvez accéder aux différents services :

* **Application Principale :**
    * Ouvrez votre navigateur et allez à l'adresse : **[http://localhost:8000](http://localhost:8000)**

* **Gestion de la Base de Données (phpMyAdmin) :**
    * Pour visualiser directement les données dans la base MySQL, allez à : **[http://db.localhost:8000](http://db.localhost:8000)**
    * *(Note: Cette adresse est routée par le proxy, d'où le port 8000)*

* **Tableau de Bord du Proxy (Traefik) :**
    * Pour voir l'état du routage et des services, allez à : **[http://localhost:8080](http://localhost:8080)**

---

## 🛑 Arrêter l'Application

Pour arrêter tous les services et supprimer les conteneurs, retournez dans votre terminal et lancez la commande :

```bash
docker-compose down
```