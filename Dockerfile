# Utilise une image officielle Node.js
FROM node:18

# Crée un dossier dans le conteneur
WORKDIR /app

# Copie package.json d’abord
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code
COPY . .

# Expose le port
EXPOSE 3000

# Commande pour démarrer l’app
CMD [ "npm", "start" ]
