import img1_1 from '../assets/images/images_projets/id1-img1.jpg';
import img1_2 from '../assets/images/images_projets/id1-img2.jpg';
import img2_1 from '../assets/images/images_projets/id2-img1.jpg';
import img2_2 from '../assets/images/images_projets/id2-img2.jpg';
import img3_1 from '../assets/images/images_projets/id3-img1.jpg';
import img3_2 from '../assets/images/images_projets/id3-img2.jpg';
import img4_1 from '../assets/images/images_projets/id4-img1.jpg';
import img4_2 from '../assets/images/images_projets/id4-img2.jpg';
import img4_3 from '../assets/images/images_projets/id4-img3.jpg';
import img4_4 from '../assets/images/images_projets/id4-img4.jpg';
import img4_5 from '../assets/images/images_projets/id4-img5.jpg';
import img5_1 from '../assets/images/images_projets/id5-img1.jpg';
import img5_2 from '../assets/images/images_projets/id5-img2.jpg';
import img5_3 from '../assets/images/images_projets/id5-img3.jpg';
import img6_1 from '../assets/images/images_projets/id6-img1.jpg';
import img6_2 from '../assets/images/images_projets/id6-img2.jpg';
import img7_1 from '../assets/images/images_projets/id7-img1.jpg';
import img7_2 from '../assets/images/images_projets/id7-img2.jpg';
import img7_3 from '../assets/images/images_projets/id7-img3.jpg';
import img8_1 from '../assets/images/images_projets/id8-img1.jpg';
import img8_2 from '../assets/images/images_projets/id8-img2.jpg';
import img9_1 from '../assets/images/images_projets/id9-img1.jpg';
import img9_2 from '../assets/images/images_projets/id9-img2.jpg';
import img9_3 from '../assets/images/images_projets/id9-img3.jpg';
import img10_1 from '../assets/images/images_projets/id10-img1.jpg';
import img10_2 from '../assets/images/images_projets/id10-img2.jpg';
import img10_3 from '../assets/images/images_projets/id10-img3.jpg';
import img11_1 from '../assets/images/images_projets/id11-img1.jpg';
import img11_2 from '../assets/images/images_projets/id11-img2.jpg';
import img12_1 from '../assets/images/images_projets/id12-img1.jpg';
import img12_2 from '../assets/images/images_projets/id12-img2.jpg';
import img12_3 from '../assets/images/images_projets/id12-img3.jpg';
import img13_1 from '../assets/images/images_projets/id13-img1.jpg';
import img13_2 from '../assets/images/images_projets/id13-img2.jpg';
import img13_3 from '../assets/images/images_projets/id13-img3.jpg';
import img14_1 from '../assets/images/images_projets/id14-img1.jpg';
import img14_2 from '../assets/images/images_projets/id14-img2.jpg';
import img14_3 from '../assets/images/images_projets/id14-img3.jpg';
import img15_1 from '../assets/images/images_projets/id15-img1.jpg';
import img15_2 from '../assets/images/images_projets/id15-img2.jpg';
import img15_3 from '../assets/images/images_projets/id15-img3.jpg';


const projectsData = [
  {
    id: 1,
    name: 'Calculateur IMC',
    description: "Le projet Calculateur d'IMC permet de calculer son IMC en fonction de sa taille et de son poids, et d'avoir des conseils de santé adaptés.",
    fullDescription: `
      <p>Bienvenue dans le projet Calculateur d'IMC !</p>
      <p>Ce projet est une application web interactive et facile à utiliser, conçue pour vous aider à calculer rapidement votre Indice de Masse Corporelle (IMC) et à obtenir des conseils de santé personnalisés.</p>
      <h3>🚀 Fonctionnalités :</h3>
      <p><strong>🔢 Calcul de l'IMC :</strong> Entrez votre taille et votre poids, et l'application calculera instantanément votre IMC.</p>
      <p><strong>📈 Catégories d'IMC :</strong> L'application ne se contente pas de vous fournir un chiffre. Elle affiche également des catégories telles que : Maigreur, Poids santé, Surpoids, et Obésité.</p>
      <p><strong>💡 Interface simple et responsive :</strong> L'application s'adapte à tous les types d'appareils pour une expérience fluide.</p>
      <h3>Pourquoi utiliser l’application Calculateur d'IMC ?</h3>
      <p>L'application vous permet de suivre votre IMC avec une interface simple, des conseils personnalisés et une navigation fluide, idéale pour surveiller votre forme physique.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img1_1, img1_2],
    videos: ['https://www.youtube.com/watch?v=5vqz0Nzt6UY'],
    demoLink: 'https://gabriellepagnard.github.io/calculateur_IMC/',
    repoLink: 'https://github.com/GabriellePagnard/calculateur_IMC',
  },
  {
    id: 2,
    name: 'Wiki Search',
    description: 'Wiki Search est une application web pour rechercher des articles sur Wikipedia.',
    fullDescription: `
      <p>🚀 Bienvenue dans Wiki Search, une application web moderne et intuitive conçue pour faciliter la recherche et l'exploration d'articles sur Wikipedia.</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🔍 Recherche Intuitive :</strong> Trouvez des articles en quelques secondes grâce à une barre de recherche.</p>
      <p><strong>💡 Suggestions Instantanées :</strong> Des suggestions apparaissent en temps réel pour vous aider à affiner vos recherches.</p>
      <p><strong>📄 Affichage des Résultats :</strong> Résultats sous forme de cartes visuelles avec des extraits pertinents et des liens directs vers Wikipedia.</p>
      <p><strong>🌙 Mode Sombre :</strong> Basculez entre le mode clair et sombre pour plus de confort.</p>
      <p><strong>📜 Pagination Dynamique :</strong> Les nouveaux résultats se chargent au fur et à mesure du défilement.</p>
      <h3>Pourquoi utiliser Wiki Search ?</h3>
      <p>Wiki Search est idéal pour explorer les articles de Wikipedia avec une interface conviviale, un mode sombre et des suggestions en temps réel.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img2_1, img2_2],
    videos: ['https://www.youtube.com/watch?v=b6dCankd0wE&themeRefresh=1'],
    demoLink: 'https://gabriellepagnard.github.io/Wiki_Search/',
    repoLink: 'https://github.com/GabriellePagnard/Wiki_Search',
  },
  {
    id: 3,
    name: 'Kanban',
    description: 'Kanban est un outil de gestion de tâches simple et efficace.',
    fullDescription: `
      <p>✨ Bienvenue dans Kanban, un outil de gestion de tâches simple et puissant, conçu pour organiser vos projets en s'inspirant de la méthode Kanban.</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>📋 Création et gestion de tableaux :</strong> Créez des tableaux pour structurer vos projets.</p>
      <p><strong>🗂️ Listes et Cartes :</strong> Organisez vos tableaux en ajoutant des listes et des cartes pour chaque tâche.</p>
      <p><strong>🎨 Personnalisation des cartes :</strong> Modifiez les cartes avec des descriptions détaillées.</p>
      <p><strong>🖱️ Glisser-déposer :</strong> Réorganisez les tâches en les déplaçant entre les listes.</p>
      <p><strong>💾 Sauvegarde locale :</strong> Vos données sont sauvegardées localement dans votre navigateur.</p>
      <h3>Pourquoi choisir Kanban ?</h3>
      <p>Kanban offre une gestion de tâches intuitive avec des fonctionnalités robustes comme la personnalisation des cartes et la sauvegarde locale.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img3_1, img3_2],
    videos: ['https://www.youtube.com/watch?v=jUek3quRb5A'],
    demoLink: 'https://gabriellepagnard.github.io/Kanban/',
    repoLink: 'https://github.com/GabriellePagnard/Kanban',
  },
  {
    id: 4,
    name: 'Morpion',
    description: 'Le projet Jeu du Morpion est un jeu interactif de tic-tac-toe moderne.',
    fullDescription: `
      <p>✨ Bienvenue dans le projet Jeu du Morpion !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🧑‍🤝‍🧑 Mode multijoueur :</strong> Invitez vos amis à jouer en mode multijoueur avec indicateur de tour en temps réel.</p>
      <p><strong>🔄 Réinitialisation rapide :</strong> Relancez rapidement une nouvelle manche grâce à une pop-up de redémarrage.</p>
      <p><strong>🎨 Interface stylisée :</strong> Profitez d'un arrière-plan artistique et d'un design minimaliste.</p>
      <p><strong>📊 Indicateur de tour :</strong> Un affichage clair du joueur actif est visible en tout temps.</p>
      <p><strong>🔍 Effet de flou :</strong> Un effet de flou subtil lors des transitions améliore l'expérience visuelle.</p>
      <p><strong>🏆 Détection des victoires :</strong> Le jeu détecte et met en évidence les combinaisons gagnantes.</p>
      <h3>Pourquoi jouer au Jeu du Morpion ?</h3>
      <p>Ce jeu offre une expérience fluide avec des fonctionnalités modernes et un design épuré pour des parties rapides et plaisantes.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img4_1, img4_2, img4_3, img4_4, img4_5],
    videos: ['https://www.youtube.com/watch?v=YpDL0R0R4lw'],
    demoLink: 'https://gabriellepagnard.github.io/Morpion/',
    repoLink: 'https://github.com/GabriellePagnard/Morpion',
  },
  {
    id: 5,
    name: 'Snake',
    description: 'Le projet Snake Game propose une version modernisée du classique Snake.',
    fullDescription: `
      <p>✨ Bienvenue dans le projet Snake Game !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🎮 Gameplay classique :</strong> Jouez à Snake avec un gameplay modernisé et fluide.</p>
      <p><strong>🏆 Système de score dynamique :</strong> Suivez votre score en temps réel à chaque pomme consommée.</p>
      <p><strong>⏩ Augmentation de la vitesse :</strong> Plus vous mangez de pommes, plus la difficulté augmente.</p>
      <p><strong>⏸️ Mode Pause :</strong> Interrompez et reprenez le jeu à tout moment sans perdre votre progression.</p>
      <p><strong>💻 Interface responsive :</strong> Le jeu est parfaitement adapté à tous les écrans pour une expérience fluide.</p>
      <h3>Pourquoi jouer au Snake Game ?</h3>
      <p>Le projet Snake Game combine la nostalgie du classique avec des améliorations modernes pour une expérience amusante et engageante.</p>
    `,
    date: "2023",
    isEncours: true,
    images: [img5_1, img5_2, img5_3],
    videos: ['https://www.youtube.com/watch?v=dOzv-hM1oEQ'],
    demoLink: 'https://gabriellepagnard.github.io/Snake/',
    repoLink: 'https://github.com/GabriellePagnard/Snake',
  },
  {
    id: 6,
    name: 'Calculatrice',
    description: 'Le projet Calculatrice est une application web offrant des fonctionnalités de calcul de base et avancées.',
    fullDescription: `
      <p>✨ Bienvenue dans le projet Calculatrice !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🔢 Affichage dynamique :</strong> Visualisez vos calculs en temps réel pour une expérience plus intuitive.</p>
      <p><strong>➕➖✖️➗ Opérations de base :</strong> Effectuez des opérations mathématiques simples comme l'addition, la soustraction, etc.</p>
      <p><strong>📊 Fonctions supplémentaires :</strong> Utilisez des fonctionnalités avancées comme le calcul des pourcentages et des décimales.</p>
      <p><strong>🧹 Effacement intelligent :</strong> Réinitialisez ou effacez seulement la dernière entrée pour plus de flexibilité.</p>
      <p><strong>💻 Interface responsive :</strong> Le design épuré s'adapte parfaitement à tous les appareils pour une utilisation confortable.</p>
      <h3>Pourquoi choisir cette calculatrice ?</h3>
      <p>Cette calculatrice web est idéale pour des calculs rapides ou plus complexes avec une interface conviviale et moderne.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img6_1, img6_2],
    videos: ['https://www.youtube.com/watch?v=o9CgNXR_cko', 'https://www.youtube.com/watch?v=hovAAe8tGeU'],
    demoLink: 'https://gabriellepagnard.github.io/Calculatrice/',
    repoLink: 'https://github.com/GabriellePagnard/Calculatrice',
  },
  {
    id: 7,
    name: 'Quizz',
    description: 'Le projet Quiz de Culture Générale propose un quiz interactif avec des questions aléatoires.',
    fullDescription: `
      <p>✨ Bienvenue dans Quiz de Culture Générale !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🎯 Quiz de 20 questions :</strong> Testez vos connaissances sur divers sujets avec des questions aléatoires.</p>
      <p><strong>📊 Barre de progression :</strong> Suivez votre avancement tout au long du quiz.</p>
      <p><strong>⏱️ Réponses instantanées :</strong> Recevez des retours immédiats sur vos réponses avec des indicateurs colorés.</p>
      <p><strong>🏆 Score final :</strong> Un récapitulatif de vos performances est affiché à la fin de chaque session.</p>
      <p><strong>🎨 Design réactif et animé :</strong> Profitez d'une interface moderne et d'animations fluides pour une expérience agréable.</p>
      <h3>Pourquoi jouer à ce Quiz ?</h3>
      <p>Ce quiz est parfait pour tester et enrichir vos connaissances tout en vous divertissant avec une interface moderne et des fonctionnalités interactives.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img7_1, img7_2, img7_3],
    videos: ['https://www.youtube.com/watch?v=R8XSCoCotaI', 'https://www.youtube.com/watch?v=8BMlmjy0L6s'],
    demoLink: 'https://gabriellepagnard.github.io/Quizz/',
    repoLink: 'https://github.com/GabriellePagnard/Quizz',
  },
  {
    id: 8,
    name: 'Animation de particules',
    description: 'Le projet d\'animation de particules interactives offre une expérience visuelle immersive.',
    fullDescription: `
      <p>✨ Bienvenue dans le projet d'animation de particules interactives !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🖱️ Animation Interactive :</strong> Les particules réagissent aux mouvements de la souris pour une expérience unique.</p>
      <p><strong>📱💻 Canvas Responsive :</strong> L'animation s'adapte parfaitement à toutes les tailles d'écran pour un rendu fluide.</p>
      <p><strong>🌌 Effets Visuels Évolués :</strong> Les particules se connectent entre elles pour former un réseau visuel captivant.</p>
      <p><strong>🚀 Optimisé pour la Performance :</strong> L'animation est fluide même sur des appareils plus anciens.</p>
      <h3>Pourquoi choisir ce projet d'animation de particules interactives ?</h3>
      <p>Ce projet offre une expérience visuelle engageante et fluide pour tout type de projet créatif ou de fond d'écran dynamique.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img8_1, img8_2],
    videos: ['https://www.youtube.com/watch?v=QzvBfGK7-gM', 'https://www.youtube.com/watch?v=UsBM3HTk-Ug'],
    demoLink: 'https://gabriellepagnard.github.io/Animation-de-particules/',
    repoLink: 'https://github.com/GabriellePagnard/Animation-de-particules',
  },
  {
    id: 9,
    name: 'Cartes Mémoire',
    description: 'Le projet de jeu de cartes mémoire en ligne vous propose de retrouver des paires de cartes identiques.',
    fullDescription: `
      <p>🃏 Bienvenue dans le projet de jeu de cartes mémoire en ligne !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🎨 Interface fluide et moderne :</strong> Un design soigneusement conçu pour offrir une expérience intuitive.</p>
      <p><strong>📱 Responsive Design :</strong> Le jeu est optimisé pour tous les écrans, garantissant une expérience fluide sur mobile ou desktop.</p>
      <p><strong>🔄 Mélange aléatoire des cartes :</strong> À chaque nouvelle partie, les cartes sont mélangées pour offrir un nouveau challenge.</p>
      <p><strong>🕒 Affichage temporaire des cartes :</strong> Les cartes sont affichées pendant un court instant pour une mémorisation rapide.</p>
      <p><strong>🏆 Suivi des performances :</strong> Suivez le nombre de coups nécessaires pour finir la partie et fixez-vous de nouveaux objectifs.</p>
      <p><strong>🎉 Pop-up de victoire stylisée :</strong> Une fois le jeu terminé, une pop-up stylisée célèbre votre victoire.</p>
      <h3>Pourquoi jouer à ce jeu de cartes mémoire ?</h3>
      <p>Un jeu divertissant et stimulant avec un design moderne et des fonctionnalités interactives qui enrichissent l'expérience utilisateur.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img9_1, img9_2, img9_3],
    videos: ['https://www.youtube.com/watch?v=8qbFRkFqBys', 'https://www.youtube.com/watch?v=NT8LOCx-OSs'],
    demoLink: 'https://gabriellepagnard.github.io/Cartes-memoire/',
    repoLink: 'https://github.com/GabriellePagnard/Cartes-memoire',
  },
  {
    id: 10,
    name: 'Dice Roller',
    description: 'Le Lanceur de Dés permet de lancer de 1 à 10 dés en un clic avec des animations réalistes.',
    fullDescription: `
      <p>🎲 Bienvenue dans le Lanceur de Dés 🎲</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🎛️ Sélection du nombre de dés :</strong> Choisissez entre 1 et 10 dés à lancer grâce à un curseur dynamique.</p>
      <p><strong>🎲 Animation réaliste des dés :</strong> Chaque lancer de dés est accompagné d’une animation fluide et réaliste.</p>
      <p><strong>🌀 Design moderne et responsive :</strong> Un design épuré et optimisé pour tous les appareils.</p>
      <h3>Pourquoi utiliser le Lanceur de Dés ?</h3>
      <p>Le Lanceur de Dés est parfait pour les sessions de jeux rapides, offrant une expérience fluide et agréable avec des animations réalistes.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img10_1, img10_2, img10_3],
    videos: ['https://www.youtube.com/watch?v=lZ337uMTsiQ', 'https://www.youtube.com/watch?v=UxYJJX_ytHQ'],
    demoLink: 'https://gabriellepagnard.github.io/Dice_roller/',
    repoLink: 'https://github.com/GabriellePagnard/Dice_roller',
  },
  {
    id: 11,
    name: 'Agribio',
    description: 'AgriBio 🌾 est une landing page qui promeut des produits bio et locaux avec un design écoresponsable.',
    fullDescription: `
      <p>🌾 Bienvenue sur AgriBio 🌾</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>📬 Formulaire d'inscription à la newsletter :</strong> Permet aux utilisateurs de s'abonner à la newsletter pour recevoir des informations.</p>
      <p><strong>🎉 Pop-up de confirmation stylisé :</strong> Après inscription, un pop-up élégant et responsive apparaît pour confirmer l'inscription.</p>
      <p><strong>📦 Présentation claire :</strong> Les produits bio et locaux sont mis en avant avec une hiérarchie visuelle soignée.</p>
      <p><strong>📱 Design responsive :</strong> Optimisé pour tous les appareils pour une expérience fluide.</p>
      <h3>Pourquoi choisir AgriBio ?</h3>
      <p>AgriBio promeut une alimentation bio et locale avec une landing page engageante, un formulaire d'inscription et un design responsive.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img11_1, img11_2],
    videos: ['https://www.youtube.com/watch?v=4X6-kK_s66I', 'https://www.youtube.com/watch?v=VIeR3J-PoAI'],
    demoLink: 'https://gabriellepagnard.github.io/Landing_Page_Agribio/',
    repoLink: 'https://github.com/GabriellePagnard/Landing_Page_Agribio',
  },
  {
    id: 12,
    name: 'Boule magique',
    description: 'La Boule Magique 🧙‍♂️ répond à toutes vos questions avec des effets visuels dynamiques.',
    fullDescription: `
      <p>🧙‍♂️ Bienvenue dans l'univers mystique de la Boule Magique !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🎱 Simulation de boule magique :</strong> Posez une question, et la boule délivre une des 20 réponses mystiques possibles.</p>
      <p><strong>💫 Effets visuels dynamiques :</strong> Les réponses sont accompagnées d’animations captivantes pour une immersion totale.</p>
      <p><strong>🖼️ Interface responsive :</strong> L'application s’adapte à tous les types d'écrans pour une expérience fluide.</p>
      <h3>Pourquoi utiliser la Boule Magique ?</h3>
      <p>La Boule Magique offre des réponses mystiques avec des effets visuels captivants et une interface responsive pour une expérience immersive.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img12_1, img12_2, img12_3],
    videos: ['https://www.youtube.com/watch?v=MxrADV5a8GA', 'https://www.youtube.com/watch?v=So71LFTBhlQ'],
    demoLink: 'https://gabriellepagnard.github.io/Boule_magique/',
    repoLink: 'https://github.com/GabriellePagnard/Boule_magique',
  },
  {
    id: 13,
    name: 'Meteo',
    description: 'Météo vous permet de consulter instantanément les conditions météorologiques de n\'importe quelle ville.',
    fullDescription: `
      <p>🌍 Météo - Consultez la météo instantanément partout dans le monde !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>🏙️ Recherche de villes :</strong> Recherchez rapidement la météo pour n'importe quelle ville.</p>
      <p><strong>📊 Affichage des données météo :</strong> La température, l'humidité, la vitesse du vent sont affichées clairement pour chaque ville sélectionnée.</p>
      <p><strong>📱 Interface responsive :</strong> L'interface est optimisée pour tous les appareils, garantissant une expérience fluide.</p>
      <p><strong>🌈 Icônes dynamiques :</strong> Les conditions météorologiques sont accompagnées d'icônes animées dynamiques pour plus de clarté.</p>
      <h3>Pourquoi utiliser l'application Météo ?</h3>
      <p>Météo offre une expérience utilisateur fluide avec des animations dynamiques et une interface responsive pour consulter rapidement la météo partout dans le monde.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img13_1, img13_2, img13_3],
    videos: ['https://www.youtube.com/watch?v=zGAOJx9SSo8', 'https://www.youtube.com/watch?v=ClP1MwEVflw'],
    demoLink: 'https://main--astounding-cupcake-5cd5e1.netlify.app/',
    repoLink: 'https://github.com/GabriellePagnard/Meteo',
  },
  {
    id: 14,
    name: 'Pomodoro',
    description: 'Pomodoro optimise votre productivité avec la technique Pomodoro.',
    fullDescription: `
      <p>⏳ Pomodoro - Boostez votre productivité avec la technique Pomodoro !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>✨ Gestion du Temps de Travail et de Pause :</strong> Personnalisez les durées de travail et de pause selon vos préférences.</p>
      <p><strong>🎨 Cercle de Décompte Dynamique :</strong> Un cercle de décompte visuel évolue en temps réel pour indiquer vos phases de travail et de pause.</p>
      <p><strong>🔊 Notification Sonore :</strong> À la fin de chaque session, une alerte sonore vous avertit du changement.</p>
      <p><strong>💾 Sauvegarde des Préférences :</strong> Vos préférences sont sauvegardées localement pour une reprise rapide.</p>
      <h3>Pourquoi choisir Pomodoro ?</h3>
      <p>Pomodoro vous permet de gérer efficacement votre temps de travail et de pause pour améliorer votre productivité de manière fluide et intuitive.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img14_1, img14_2, img14_3],
    videos: ['https://www.youtube.com/watch?v=4AXiL1ukxo8', 'https://www.youtube.com/watch?v=8v9smi-Orgk'],
    demoLink: 'https://scintillating-cranachan-22bbc3.netlify.app/',
    repoLink: 'https://github.com/GabriellePagnard/Pomodoro',
  },
  {
    id: 15,
    name: 'Puissance 4',
    description: 'Puissance 4 est une version en ligne moderne du jeu classique avec une interface responsive.',
    fullDescription: `
      <p>🎮 Puissance 4 - Le jeu classique revisité en ligne !</p>
      <h3>🚀 Fonctionnalités Principales :</h3>
      <p><strong>✨ Interface Responsive :</strong> Le jeu est optimisé pour tous les appareils pour une expérience de jeu fluide.</p>
      <p><strong>🎨 Design Moderne :</strong> Un design épuré avec des animations fluides pour un rendu visuel agréable.</p>
      <p><strong>🎯 Mécanique de Jeu Réaliste :</strong> Les jetons tombent dans la grille avec un réalisme similaire à la version physique.</p>
      <p><strong>🏆 Détection du Gagnant :</strong> Le jeu détecte automatiquement et met en évidence les combinaisons gagnantes.</p>
      <p><strong>🔄 Redémarrage Facile :</strong> Relancez une nouvelle partie en un seul clic avec une fonction de redémarrage rapide.</p>
      <h3>Pourquoi choisir cette version de Puissance 4 ?</h3>
      <p>Cette version moderne de Puissance 4 offre une expérience de jeu immersive, fluide et simple sur tous les appareils.</p>
    `,
    date: "2024",
    isEncours: true,
    images: [img15_1, img15_2, img15_3],
    videos: ['https://www.youtube.com/watch?v=6Q9jnpUi8T0', 'https://www.youtube.com/watch?v=7LzeEruRcX0'],
    demoLink: 'https://66cf99504c8aa03235ed28da--statuesque-longma-e061ea.netlify.app/',
    repoLink: 'https://github.com/GabriellePagnard/Puissance-4',
  },
  {
    id: 16,
    name: 'Projet 16',
    description: 'Description courte du projet 16.',
    fullDescription: `
      <p>Description détaillée du projet 16.</p>
    `,
    date: "2023",
    isEncours: true,
    videos: ['https://www.youtube.com/embed/video1'],
    demoLink: 'https://lien-demo1.com',
    repoLink: 'https://github.com/repo1',
  },
];
  
export default projectsData;