# 🚀 Projet : Déploiement d'une Architecture Multi-Conteneurs avec Docker

## 📌 Introduction

Ce projet a pour objectif de mettre en place une architecture multi-conteneurs en utilisant Docker afin de déployer une application web simple et dynamique.

L’objectif principal est de comprendre la conteneurisation, l’orchestration de services et la communication entre plusieurs conteneurs.

---

## 🧩 Présentation du projet

L’application est composée de deux services principaux :

### 🟦 Service Web (Node.js + Express)
- Fournit une API REST
- Permet de gérer un employé :
  - Ajouter / modifier
  - Récupérer
  - Supprimer
- Communique avec Redis

### 🟥 Service Base de données (Redis)
- Stocke les données en mémoire
- Assure la persistance grâce à un volume Docker

---

## 🏗️ Architecture


Navigateur
↓
Node.js (Express) - Container Web
↓
Redis - Container Base de données


Communication entre services :

```text id="arch2"
redis://redis-server:6379
⚙️ Prérequis

Avant de lancer le projet, installer :

Docker
Docker Compose

Vérification :

docker --version
docker compose version
🧪 PIPELINE COMPLET DES COMMANDES
🧱 1. Initialisation du projet (première fois uniquement)
mkdir project
cd project
npm init -y
npm install express redis
🧪 2. Lancement local (sans Docker)
node server.js

Optionnel (Redis local) :

docker run -p 6379:6379 redis
🐳 3. Construire l’image Docker
docker build -t my-app .
▶️ 4. Lancer un conteneur seul (test)
docker run -p 3000:3000 my-app
🚀 5. Lancer toute l’infrastructure (IMPORTANT)
docker compose up --build

👉 Cette commande :

construit l’image Node.js
démarre Redis
crée le réseau entre services
lance toute l’application
🌐 6. Accéder à l’application
http://localhost:8080
📊 7. Vérifier les conteneurs actifs
docker ps
📜 8. Voir les logs (debug)
docker compose logs

Logs du backend uniquement :

docker compose logs web
🛑 9. Arrêter l’infrastructure
docker compose down

👉 Cette commande :

arrête tous les conteneurs
supprime le réseau Docker Compose
🔄 10. Redémarrage propre (avec rebuild)
docker compose up --build --force-recreate
🧹 11. Nettoyage système (optionnel)
docker system prune -a

⚠️ Supprime les images et conteneurs inutilisés
