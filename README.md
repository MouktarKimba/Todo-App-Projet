<div align="center">
  <h1 align="center">Projet : Gestionnaire de Tâches Avancé</h1>
  <p align="center">
    Une application web full-stack conteneurisée pour la gestion de tâches, avec un workflow de développement professionnel.
    <br />
    <a href="https://github.com/MouktarKimba/Todo-App-Projet/issues">Signaler un Bug</a>
    ·
    <a href="https://github.com/MouktarKimba/Todo-App-Projet/issues">Demander une Fonctionnalité</a>
  </p>
</div>

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

---

## 📋 À propos du projet

[cite_start]Ce projet est une application web de type "ToDo List" développée pour répondre aux exigences du [cahier des charges du mini-projet collaboratif ]. L'objectif était de mettre en œuvre une solution technique complète, de l'infrastructure au développement applicatif, en utilisant des pratiques professionnelles de gestion de version avec Git.

[cite_start]L'application permet aux utilisateurs de gérer leurs tâches quotidiennes de manière efficace, avec des fonctionnalités d'ajout, de modification, de suppression et de suivi par date d'échéance.

<br/>

<div align="center">
  <img src="https://i.imgur.com/your-screenshot.png" alt="Aperçu de l'application" width="80%">
</div>
*NOTE: Fais une capture d'écran de ton application finale, télécharge-la sur un site comme [Imgur](https://imgur.com/upload) et remplace le lien ci-dessus.*

---

### ✨ Fonctionnalités Clés

* [cite_start]**Gestion Complète du Cycle de Vie des Tâches :** Création, consultation, modification et suppression des tâches.
* **Suivi par Date d'Échéance :** Chaque tâche est associée à une date limite pour une meilleure organisation.
* **Statut de Complétion :** Les utilisateurs peuvent marquer les tâches comme terminées et consulter un historique séparé.
* **Filtres Intelligents :** Triez et affichez les tâches pertinentes avec les filtres "Aujourd'hui", "À venir" et "En retard".
* [cite_start]**Persistance des Données :** Toutes les informations sont stockées de manière fiable dans une base de données MySQL.

---

### 🛠️ Construit avec (Stack Technique)

La stack technique a été choisie pour sa robustesse, sa modernité et son adéquation avec un environnement conteneurisé.

* **Frontend :**
    * [React](https://reactjs.org/)
    * [Vite](https://vitejs.dev/)
    * [Sass](https://sass-lang.com/)
    * [React-Bootstrap](https://react-bootstrap.github.io/)
* **Backend :**
    * [Node.js](https://nodejs.org/)
    * [Express.js](https://expressjs.com/)
* **Base de Données :**
    * [MySQL](https://www.mysql.com/)
* **Infrastructure & Déploiement :**
    * [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
    * [Traefik](https://traefik.io/traefik/) en tant que Reverse Proxy

---

## 🚀 Démarrage du Projet

Pour lancer ce projet en local, assurez-vous d'avoir **Docker Desktop** installé et en cours d'exécution.

### Prérequis

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Installation & Lancement

1.  **Clonez le dépôt :**
    ```bash
    git clone [https://github.com/MouktarKimba/Todo-App-Projet.git](https://github.com/MouktarKimba/Todo-App-Projet.git)
    ```

2.  **Naviguez dans le dossier du projet :**
    ```bash
    cd Todo-App-Projet
    ```

3.  **Construisez et lancez l'environnement avec Docker Compose :**
    Cette commande unique va construire les images, installer les dépendances et démarrer tous les services.
    ```bash
    docker-compose up --build
    ```

---

## 🌐 Utilisation

Une fois les conteneurs démarrés, les services suivants sont disponibles :

* **Application Principale :** ➡️ **[http://localhost:8000](http://localhost:8000)**
* **Admin Base de Données (phpMyAdmin) :** ➡️ **[http://db.localhost:8000](http://db.localhost:8000)**
* **Tableau de Bord du Proxy (Traefik) :** ➡️ **[http://localhost:8080](http://localhost:8080)**

---

## 📂 Structure du Projet et Workflow

[cite_start]Ce projet adhère à un modèle Git structuré pour simuler un environnement de travail collaboratif, comme défini dans le cahier des charges.

### Modèle de Branches Git

* [cite_start]`main` : Branche de production contenant la version finale et validée du code.
* [cite_start]`develop` : Branche d'intégration où toutes les fonctionnalités sont fusionnées et testées.
* [cite_start]`infrastructure` : Branche dédiée à la configuration des conteneurs (Dockerfile, compose.yml) et de l'infrastructure de déploiement.

[cite_start]Toutes les contributions sont gérées via des **Pull Requests**, garantissant ainsi une révision du code et un historique des modifications clair et traçable.

---

## 📄 Licence

Distribué sous la licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

---

## 👤 Contact

Mouktar Kimba - [Profil GitHub](https://github.com/MouktarKimba)

Lien du Projet : [https://github.com/MouktarKimba/Todo-App-Projet](https://github.com/MouktarKimba/Todo-App-Projet)