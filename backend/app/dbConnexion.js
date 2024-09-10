const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// On vérifie que l'URL de la base de données est bien fournie
const PG_URL = process.env.PG_URL;

if (!PG_URL) {
    throw new Error('Erreur : l\'URL de la base de données (PG_URL) n\'est pas définie dans le fichier .env.');
}

// Options de configuration Sequelize
const defineAttributes = {
    logging: process.env.NODE_ENV === 'development', // Active le logging en développement
    define: {
        // Sequelize en mode snake_case (optionnel)
        // underscored: true, 
        createdAt: "created_at",    // Renomme les timestamps
        updatedAt: "updated_at",
    }
};

// Création d'une instance Sequelize avec l'URL PostgreSQL
const sequelize = new Sequelize(PG_URL, defineAttributes);

// Test de connexion à la base de données
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
    } catch (error) {
        console.error('Erreur lors de la connexion à la base de données :', error);
    }
})();

module.exports = sequelize;