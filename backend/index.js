const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Utilisation de middlewares intégrés d'Express pour parser les données
app.use(express.json()); // Pour traiter les requêtes avec un corps JSON
app.use(express.urlencoded({ extended: true })); // Pour traiter les données URL-encoded

app.use(cors()); // Gérer les requêtes cross-origin

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});