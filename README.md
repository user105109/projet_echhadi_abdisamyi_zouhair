# Projet : Déploiement d'une Architecture Multi-Conteneurs avec Docker

## Introduction

Ce projet a pour objectif de mettre en place une architecture multi-conteneurs utilisant Docker afin de déployer une application web dynamique.

L’objectif principal est de comprendre la conteneurisation, l’orchestration de services et la communication entre conteneurs.

---

## Architecture

L’application est composée de deux services :

- Service Web (Node.js + Express) : API REST pour gérer un employé
- Service Base de données (Redis) : stockage des données en mémoire avec persistance

---

## Communication entre services

Le backend Node.js communique avec Redis via :


redis://redis-server:6379


---

## Prérequis

Avant de lancer le projet, installer :

- Docker
- Docker Compose

### Vérification :

```bash
docker --version
docker compose version
Pipeline complet des commandes
1. Initialisation du projet (première fois uniquement)
mkdir project
cd project
npm init -y
npm install express redis
2. Lancement local (sans Docker)
node server.js

Optionnel : lancer Redis localement

docker run -p 6379:6379 redis
3. Construire l’image Docker
docker build -t my-app .
4. Lancer un conteneur seul (test)
docker run -p 3000:3000 my-app
5. Lancer toute l’infrastructure (important)
docker compose up --build

Cette commande :

construit l’image Node.js
démarre Redis
crée le réseau entre les services
lance toute l’application
6. Accéder à l’application
http://localhost:8080
7. Vérifier les conteneurs actifs
docker ps
8. Voir les logs (debug)
docker compose logs

Logs du backend uniquement :

docker compose logs web
9. Arrêter l’infrastructure
docker compose down

Cette commande :

arrête tous les conteneurs
supprime le réseau Docker Compose
10. Redémarrage propre (avec rebuild)
docker compose up --build --force-recreate
11. Nettoyage système (optionnel)
docker system prune -a

Attention : cette commande supprime les images et conteneurs inutilisés

Auteur

Projet réalisé dans le cadre d’un cours sur Docker, les microservices et la conteneurisation.


---

Si tu veux, je peux maintenant te faire :
- :contentReference[oaicite:0]{index=0}
- ou :contentReference[oaicite:1]{index=1}
- ou :contentReference[oaicite:2]{index=2}
