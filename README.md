# Gestionnaire de Tâches

Une application web full-stack conteneurisée pour la gestion de tâches, développée avec un workflow de développement professionnel et collaboratif.

[![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)

[![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=nodedotjs)](https://nodejs.org/)

[![Docker](https://img.shields.io/badge/Docker-gray?logo=docker)](https://www.docker.com/)

[![MySQL](https://img.shields.io/badge/MySQL-8-blue?logo=mysql)](https://www.mysql.com/)

---

### Table des matières

1.  [À propos du projet](#à-propos-du-projet)

2.  [Stack Technique](#stack-technique)

3.  [Démarrage Rapide](#démarrage-rapide)

4.  [Utilisation](#utilisation)

5.  [Workflow Git](#workflow-git)

6.  [Licence](#licence)

7.  [Contact](#contact)

---

## À propos du projet

Ce projet est une application web de type "ToDo List" robuste et complète. Il permet aux utilisateurs de gérer leurs tâches quotidiennes de manière efficace, avec des fonctionnalités d'ajout, de modification, de suppression et de suivi par date d'échéance.

L'objectif était de mettre en œuvre une solution technique complète, de l'infrastructure au développement applicatif, en utilisant des pratiques professionnelles de gestion de version avec Git et une architecture entièrement conteneurisée.

### Fonctionnalités

* **Gestion complète du cycle de vie des tâches** (CRUD).

* **Suivi par date d'échéance** pour une meilleure organisation.

* **Statut de complétion** avec un historique des tâches terminées.

* **Filtres dynamiques** pour trier les tâches par "Aujourd'hui", "À venir" et "En retard".

* **Persistance des données** dans une base de données MySQL.

---

## Stack Technique

| Catégorie      | Technologies                                                                                  |
| -------------- | --------------------------------------------------------------------------------------------- |
| **Frontend** | React, Vite, Sass, React-Bootstrap, date-fns                                                  |
| **Backend** | Node.js, Express.js                                                                           |
| **Base de Données** | MySQL                                                                                         |
| **Infrastructure** | Docker, Docker Compose, Traefik (Reverse Proxy)                                               |

---

## Démarrage Rapide

Pour lancer ce projet en local, **Docker Desktop** doit être installé et en cours d'exécution.

### Prérequis

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Installation

1.  **Clonez le dépôt :**
    ```bash
    git clone [https://github.com/MouktarKimba/Todo-App-Projet.git](https://github.com/MouktarKimba/Todo-App-Projet.git)
    ```

2.  **Naviguez dans le dossier du projet :**
    ```bash
    cd Todo-App-Projet
    ```

3.  **Construisez et lancez l'environnement :**
    Cette commande unique va construire les images, installer les dépendances et démarrer tous les services.
    ```bash
    docker-compose up --build
    ```

---

## Utilisation

Une fois les conteneurs démarrés, les services suivants sont disponibles :

* **Application Principale :** ➡️ **[http://localhost:8000](http://localhost:8000)**

* **Admin Base de Données (phpMyAdmin) :** ➡️ **[http://db.localhost:8000](http://db.localhost:8000)**

* **Tableau de Bord du Proxy (Traefik) :** ➡️ **[http://localhost:8080](http://localhost:8080)**

Pourarrêter tous les services, retournez dans votre terminal et lancez `docker-compose down`.

---

## Workflow Git

Ce projet adhère à un modèle Git structuré pour garantir un travail d'équipe organisé et un code de qualité.

* `main` : Branche de production. Contient la version finale et validée du code. Elle est protégée.

* `develop` : Branche d'intégration où toutes les fonctionnalités sont fusionnées et testées.

* `infrastructure` : Branche dédiée à la configuration des conteneurs (Dockerfile, compose.yml).

Toutes les contributions sont gérées via des **Pull Requests** et requièrent une révision, assurant ainsi la traçabilité et la qualité des modifications.

---

## Licence

Ce projet est distribué sous la licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

---

## Contact

**Mouktar Kimba** - [GitHub](https://github.com/MouktarKimba)

Lien du Projet : [https://github.com/MouktarKimba/Todo-App-Projet](https://github.com/MouktarKimba/Todo-App-Projet)