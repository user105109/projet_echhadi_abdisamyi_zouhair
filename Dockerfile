FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

#FROM → base Node
#WORKDIR → dossier interne container
#COPY package*.json → optimisation cache
#RUN npm install → install dépendances
#COPY . . → copie code
#EXPOSE 3000 → port doc
#CMD → lancement app