// src/data/projectsData.ts

const projectsData = [
    {
        id: 1,
        name: 'Calculateur IMC',
        description: 'Le projet Calculateur d\'IMC permet de calculer son IMC en fonction de sa taille et de son poids, et d\'avoir des conseils de santé adaptés.',
        fullDescription: `
          🚀 **Bienvenue dans le projet Calculateur d'IMC !**
          
          Ce projet est une application web interactive et facile à utiliser, conçue pour vous aider à calculer rapidement votre Indice de Masse Corporelle (IMC) et à obtenir des conseils de santé personnalisés. Que vous souhaitiez surveiller votre état de santé ou mieux comprendre les différentes catégories d'IMC, cette application vous offre une solution simple et pratique.
          
          ## 🚀 Fonctionnalités:
          
          🔢 **Calcul de l'IMC** : Entrez votre taille et votre poids, et l'application calculera instantanément votre IMC. Cet indicateur vous permettra de connaître votre rapport poids/taille, un facteur clé pour évaluer votre santé globale.
          
          📈 **Catégories d'IMC** : L'application ne se contente pas de vous fournir un chiffre. En fonction de votre IMC, elle vous affiche un message spécifique, accompagné d'une couleur adaptée à votre situation. Les différentes catégories incluent :
          
          - **Maigreur**
          - **Poids santé**
          - **Surpoids**
          - **Obésité**
          
          Chaque catégorie est expliquée, vous permettant de comprendre où vous vous situez et ce que cela signifie pour votre bien-être.
          
          💡 **Interface simple et responsive** : L'application est conçue pour être extrêmement intuitive et accessible à tous, même aux utilisateurs novices. Elle s'adapte automatiquement à tous les types d'appareils (ordinateurs, tablettes, smartphones), garantissant une expérience fluide quel que soit le support utilisé.
          
          ## Pourquoi utiliser l’application Calculateur d'IMC ?
          
          En quelques clics, vous pouvez obtenir une analyse claire de votre IMC, avec des conseils personnalisés sur votre état de santé. L'application est idéale pour ceux qui veulent surveiller leur forme physique ou mieux comprendre les implications de leur IMC.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id1-img1.jpg',
          'images/images_projets/id1-img2.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=5vqz0Nzt6UY',
        ],
        demoLink: 'https://gabriellepagnard.github.io/calculateur_IMC/',
        repoLink: 'https://github.com/GabriellePagnard/calculateur_IMC',
      }, 
      {
        id: 2,
        name: 'Wiki Search',
        description: 'Wiki Search est une application web pour rechercher des articles sur Wikipedia.',
        fullDescription: `
          🚀 **Bienvenue dans Wiki Search**, une application web moderne et intuitive conçue pour faciliter la recherche et l'exploration d'articles sur Wikipedia. Que vous soyez curieux de découvrir de nouveaux sujets ou que vous souhaitiez approfondir vos connaissances, Wiki Search vous offre une expérience de navigation fluide et agréable.
      
          ## 🚀 Fonctionnalités Principales :
          
          🔍 **Recherche Intuitive** : La fonctionnalité de recherche de Wiki Search vous permet de trouver des articles Wikipedia en quelques secondes. Il suffit de saisir des mots-clés pertinents dans la barre de recherche, et l'application se charge de vous proposer les articles les plus adaptés à votre requête.
      
          💡 **Suggestions Instantanées** : Dès que vous commencez à taper votre recherche, Wiki Search affiche des suggestions en temps réel. Cela vous aide à affiner et à corriger vos requêtes tout en vous proposant des options supplémentaires basées sur votre recherche initiale.
      
          📄 **Affichage des Résultats** : Les résultats de recherche sont présentés sous forme de cartes visuelles qui incluent un extrait pertinent de chaque article et un lien direct vers la page Wikipedia correspondante. Cette mise en page claire permet de consulter rapidement les informations et d'accéder facilement aux détails complets.
      
          🌙 **Mode Sombre** : Pour une expérience de lecture plus confortable et personnalisée, vous pouvez basculer entre le mode clair et sombre. Que vous préfériez une interface lumineuse ou une version plus douce pour les yeux, Wiki Search s'adapte à vos préférences.
      
          📜 **Pagination Dynamique** : Grâce à la pagination dynamique, vous n'avez plus besoin de cliquer sur des boutons pour charger plus de résultats. Il suffit de faire défiler la page, et les nouveaux résultats se chargent automatiquement, rendant la navigation fluide et ininterrompue.
      
          ## Pourquoi utiliser Wiki Search ?
          
          Wiki Search est l'outil idéal pour toute personne souhaitant explorer l'immense base de connaissances de Wikipedia de manière plus intuitive et agréable. Avec ses fonctionnalités avancées, telles que les suggestions instantanées, l'affichage sous forme de cartes, et un mode sombre, l'application rend la recherche non seulement rapide, mais aussi personnalisée et conviviale.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id2-img1.jpg',
          'images/images_projets/id2-img2.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=b6dCankd0wE&themeRefresh=1',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Wiki_Search/',
        repoLink: 'https://github.com/GabriellePagnard/Wiki_Search',
      },
      {
        id: 3,
        name: 'Kanban',
        description: 'Kanban est un outil de gestion de tâches simple et efficace.',
        fullDescription: `
          ✨ **Bienvenue dans Kanban**, un outil de gestion de tâches simple et puissant, conçu pour organiser vos projets de manière fluide et efficace en s'inspirant de la méthode Kanban. Que vous travailliez en équipe ou sur des tâches personnelles, Kanban vous offre une interface intuitive et moderne pour garder le contrôle sur vos activités.
      
          ## Fonctionnalités Principales
      
          📋 **Création et gestion de tableaux** : Kanban vous permet de créer autant de tableaux que nécessaire pour structurer vos projets. Chaque tableau représente un espace distinct où vous pouvez organiser vos tâches, que ce soit pour le suivi d'un projet professionnel ou la gestion de tâches quotidiennes.
      
          🗂️ **Listes et Cartes** : Organisez chaque tableau en ajoutant des listes, qui agissent comme des catégories ou des étapes de workflow (par exemple, "À faire", "En cours", "Terminé"). Ensuite, créez des cartes pour chaque tâche spécifique. Cela vous permet de détailler chaque activité à accomplir.
      
          🎨 **Personnalisation des cartes** : Pour une gestion encore plus efficace, chaque carte est entièrement personnalisable. Modifiez le texte, ajoutez des descriptions détaillées ou des informations pertinentes pour avoir un aperçu clair de chaque tâche.
      
          ➕✏️📄🗑️ **Actions rapides** : Utilisez des boutons intuitifs avec des emojis pour effectuer des actions rapides. Vous pouvez facilement ajouter, éditer, supprimer ou archiver des tableaux, listes ou cartes d'un simple clic, rendant l'outil rapide et réactif.
      
          🖱️ **Glisser-déposer** : La fonction de glisser-déposer rend la réorganisation des cartes extrêmement simple. Déplacez une tâche d'une liste à l'autre en la glissant simplement avec la souris, que ce soit pour changer son statut ou prioriser certaines tâches.
      
          💾 **Sauvegarde locale** : Vos données sont sauvegardées localement dans le stockage de votre navigateur, garantissant que tout votre travail est préservé même en cas de fermeture de la page. Vous pouvez ainsi continuer votre gestion de tâches sans craindre de perdre des informations.
      
          ## Pourquoi choisir Kanban ?
      
          Kanban est conçu pour offrir une expérience de gestion de tâches efficace et flexible, sans complexité inutile. Sa simplicité d'utilisation, associée à des fonctionnalités robustes comme la personnalisation des cartes et la sauvegarde locale, en fait l'outil idéal pour rester organisé, que ce soit pour des projets professionnels ou personnels.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id3-img1.jpg',
          'images/images_projets/id3-img2.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=jUek3quRb5A',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Kanban/',
        repoLink: 'https://github.com/GabriellePagnard/Kanban',
      },      
      {
        id: 4,
        name: 'Morpion',
        description: 'Le projet Jeu du Morpion est un jeu interactif de tic-tac-toe moderne.',
        fullDescription: `
          ✨ **Bienvenue dans le projet Jeu du Morpion !**
      
          Cette version modernisée du jeu classique de morpion (ou tic-tac-toe) vous propose une expérience interactive et visuellement soignée, idéale pour des parties à deux joueurs. Avec un design élégant et des fonctionnalités intuitives, ce jeu garantit un plaisir immédiat pour tous les fans de jeux classiques.
      
          ## Fonctionnalités Principales
      
          🧑‍🤝‍🧑 **Mode multijoueur** : Invitez vos amis à jouer en mode multijoueur en entrant simplement vos noms. Vous jouez chacun à tour de rôle, avec un indicateur en temps réel pour vous rappeler à qui c’est le tour. C'est un excellent moyen de défier vos proches de manière ludique et compétitive.
      
          🔄 **Réinitialisation rapide** : Une fois la partie terminée, vous pouvez rapidement lancer une nouvelle manche grâce à une pop-up de redémarrage. Pas besoin de recharger la page ou de passer par des menus complexes, ce qui rend l'expérience fluide et continue.
      
          🎨 **Interface stylisée** : L'interface bénéficie d'un arrière-plan artistique et d'un design minimaliste qui apportent une touche moderne et visuellement agréable à chaque partie. Le jeu n’est pas seulement amusant, il est aussi esthétiquement plaisant, offrant une expérience enrichie à chaque interaction.
      
          📊 **Indicateur de tour** : Un affichage clair en temps réel du joueur actif est visible à tout moment, ce qui vous aide à suivre facilement le déroulement du jeu et à éviter les erreurs de tour. Cela améliore la fluidité des parties et évite toute confusion.
      
          🔍 **Effet de flou** : Lors des transitions entre les tours, un effet de flou subtil est appliqué à la grille pour ajouter une touche visuelle sophistiquée. Cela donne une sensation plus fluide et professionnelle à chaque interaction avec le jeu.
      
          🏆 **Détection des victoires** : Le jeu est capable de détecter automatiquement les combinaisons gagnantes et de les mettre en évidence à l’écran. Dès qu’un joueur remporte la partie, le vainqueur est annoncé clairement, ce qui rend chaque victoire encore plus gratifiante.
      
          ## Pourquoi jouer au Jeu du Morpion ?
      
          Le projet Jeu du Morpion combine la simplicité d’un jeu classique avec des fonctionnalités modernes et un design épuré. Son mode multijoueur, son interface intuitive et ses effets visuels apportent une expérience utilisateur fluide et agréable, parfaite pour des parties rapides entre amis ou en famille.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id4-img1.jpg',
          'images/images_projets/id4-img2.jpg',
          'images/images_projets/id4-img3.jpg',
          'images/images_projets/id4-img4.jpg',
          'images/images_projets/id4-img5.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=YpDL0R0R4lw',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Morpion/',
        repoLink: 'https://github.com/GabriellePagnard/Morpion',
      },      
      {
        id: 5,
        name: 'Snake',
        description: 'Le projet Snake Game propose une version modernisée du classique Snake.',
        fullDescription: `
          ✨ **Bienvenue dans le projet Snake Game !**
      
          Cette version modernisée du jeu classique Snake est optimisée pour le web, offrant une expérience de jeu fluide, addictive et adaptée aux technologies d'aujourd'hui. Avec un design soigné et des fonctionnalités intuitives, cette version réinvente le plaisir de jouer à Snake tout en conservant son charme rétro.
      
          ## Fonctionnalités Principales
      
          🎮 **Gameplay classique** : Replongez dans l'univers du jeu Snake, avec un gameplay fidèle à l'original, mais mis au goût du jour avec des graphismes modernisés et une jouabilité extrêmement fluide. Déplacez le serpent sur l’écran pour manger des pommes tout en évitant de vous mordre la queue, dans une expérience familière mais rafraîchie.
      
          🏆 **Système de score dynamique** : À chaque pomme consommée, votre score augmente en temps réel et s'affiche clairement à l'écran. Le système de score dynamique vous encourage à battre votre propre record ou à défier vos amis, rendant chaque partie encore plus engageante.
      
          ⏩ **Augmentation de la vitesse** : Plus vous mangez de pommes, plus le jeu devient rapide, augmentant ainsi le niveau de difficulté au fur et à mesure de votre progression. Ce défi croissant maintient l'excitation du jeu et vous pousse à réagir plus rapidement et à anticiper chaque mouvement.
      
          ⏸️ **Mode Pause** : Besoin de faire une pause ? Le mode pause vous permet d’interrompre la partie à tout moment, sans perdre votre progression. Vous pouvez ainsi reprendre exactement là où vous vous êtes arrêté, offrant une flexibilité supplémentaire pour des sessions de jeu à tout moment.
      
          💻 **Interface responsive** : Le jeu est entièrement responsive, ce qui signifie qu'il s'adapte à toutes les tailles d'écran. Que vous soyez sur un ordinateur de bureau, une tablette ou un smartphone, Snake Game garantit une expérience de jeu optimale et fluide, peu importe le dispositif.
      
          🎨 **Design personnalisé** : En plus d'un gameplay soigné, le Snake Game arbore un design visuel moderne et stylisé, avec un arrière-plan agréable et des fenêtres pop-up élégantes. Cette attention aux détails visuels rend chaque partie aussi plaisante à regarder qu'à jouer.
      
          ## Pourquoi jouer au Snake Game ?
      
          Le projet Snake Game associe la nostalgie du classique Snake avec des fonctionnalités modernes pour une expérience de jeu immersive. Avec un système de score dynamique, une augmentation progressive de la difficulté, une compatibilité sur tous les écrans et un design visuel soigné, il vous offre tout le plaisir du Snake d'antan, enrichi par les avantages des technologies actuelles.
        `,
        date: "2023",
        isEncours: true,
        images: [
          'images/images_projets/id5-img1.jpg',
          'images/images_projets/id5-img2.jpg',
          'images/images_projets/id5-img3.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=dOzv-hM1oEQ',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Snake/',
        repoLink: 'https://github.com/GabriellePagnard/Snake',
      },      
      {
        id: 6,
        name: 'Calculatrice',
        description: 'Le projet Calculatrice est une application web offrant des fonctionnalités de calcul de base et avancées, avec un affichage dynamique, un design moderne et une interface responsive adaptée à tous les appareils.',
        fullDescription: `
          ✨ **Bienvenue dans le projet Calculatrice !**
      
          Cette calculatrice web interactive combine élégance et praticité pour offrir une expérience utilisateur fluide, adaptée à tous les types de calculs quotidiens. Que vous réalisiez des opérations simples ou que vous ayez besoin de fonctions supplémentaires, cette calculatrice saura répondre à vos besoins tout en garantissant une interface conviviale et moderne.
      
          ## Fonctionnalités Principales
      
          🔢 **Affichage dynamique** : La calculatrice est équipée d’un affichage dynamique qui montre instantanément les opérations en cours et leurs résultats. Vous pouvez suivre visuellement chaque étape de vos calculs, ce qui rend l'expérience plus transparente et intuitive.
      
          ➕➖✖️➗ **Support des opérations de base** : Effectuez toutes les opérations mathématiques de base telles que l’addition, la soustraction, la multiplication et la division. La disposition des boutons est intuitive et vous permet d’effectuer vos calculs rapidement et efficacement.
      
          📊 **Fonctions supplémentaires** : En plus des fonctions de base, la calculatrice propose des fonctionnalités avancées comme le calcul des pourcentages, le changement de signe (+/-), et l’ajout de décimales. Ces options supplémentaires permettent de répondre à un plus grand nombre de besoins de calcul, rendant l'outil polyvalent.
      
          🧹 **Effacement intelligent** : La fonctionnalité d’effacement intelligent vous permet soit de réinitialiser complètement le calcul, soit d’effacer uniquement la dernière entrée incorrecte. Cette flexibilité garantit une utilisation plus fluide et évite la frustration de devoir tout recommencer après une simple erreur.
      
          💻 **Interface utilisateur moderne** : Dotée d’un design épuré et moderne, cette calculatrice s'adapte parfaitement à tous les types d'appareils, qu’il s’agisse d’un ordinateur de bureau, d’une tablette ou d’un smartphone. Son interface responsive garantit une utilisation agréable, quel que soit l’appareil utilisé.
      
          ## Pourquoi choisir cette calculatrice ?
      
          Cette calculatrice web allie simplicité d’utilisation et fonctionnalités avancées pour offrir une expérience complète. Que vous soyez à la recherche d’une solution pour des calculs rapides ou que vous ayez besoin de fonctionnalités supplémentaires comme les pourcentages et les décimales, elle répond à tous vos besoins avec un design épuré et une interface intuitive.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id6-img1.jpg',
          'images/images_projets/id6-img2.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=o9CgNXR_cko',
          'https://www.youtube.com/watch?v=hovAAe8tGeU',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Calculatrice/',
        repoLink: 'https://github.com/GabriellePagnard/Calculatrice',
      },      
      {
        id: 7,
        name: 'Quizz',
        description: 'Le projet Quiz de Culture Générale est une application web interactive proposant un quiz de 20 questions aléatoires avec des réponses instantanées, un score final et une interface réactive adaptée à tous les appareils.',
        fullDescription: `
          ✨ **Bienvenue dans Quiz de Culture Générale !**
      
          Une application web interactive et moderne qui vous permet de tester vos connaissances sur une grande variété de sujets. Que vous soyez passionné de culture générale ou simplement en quête de divertissement, ce quiz est conçu pour vous offrir une expérience agréable et stimulante. Avec son design intuitif et son adaptation parfaite à tous les appareils, y compris les mobiles, vous pouvez y jouer partout et à tout moment.
      
          ## Fonctionnalités Principales
      
          🎯 **Quiz en 20 questions** : Le quiz comporte 20 questions aléatoires couvrant un large éventail de sujets tels que l'histoire, la science, la géographie, et bien plus encore. Chaque question propose 5 choix de réponses, vous offrant un véritable challenge et une diversité de thèmes à explorer. Ce format convient aussi bien aux débutants qu'aux amateurs éclairés.
      
          📊 **Barre de progression** : Une barre de progression dynamique vous permet de suivre votre avancement tout au long du quiz. À chaque question, la barre se remplit, vous offrant un aperçu visuel de votre progression et vous motivant à continuer jusqu'à la fin.
      
          ⏱️ **Réponses instantanées** : Dès que vous sélectionnez une réponse, vous recevez un retour immédiat sous forme d'indicateurs colorés : vert pour une bonne réponse, rouge pour une erreur. Cela rend le quiz interactif et engageant, vous permettant d'apprendre de vos erreurs ou de valider vos connaissances en temps réel.
      
          🏆 **Score final** : À la fin du quiz, un récapitulatif de votre performance est affiché avec votre score total, vous indiquant le nombre de bonnes réponses obtenues. C'est un excellent moyen de suivre vos progrès et de vous fixer de nouveaux objectifs pour améliorer votre score lors de la prochaine session.
      
          🎨 **Design réactif et animé** : L'interface est non seulement moderne, mais également réactive et adaptée à tous les écrans, des ordinateurs aux smartphones. Grâce à des animations fluides, le quiz est visuellement attractif, offrant une expérience utilisateur agréable et sans accroc, peu importe l'appareil utilisé.
      
          ## Pourquoi jouer à ce Quiz ?
      
          Ce quiz est idéal pour tester et enrichir vos connaissances de manière ludique. Grâce à ses fonctionnalités interactives comme la progression en temps réel, les réponses instantanées et le design animé, il propose une expérience de jeu captivante et enrichissante. Jouez n’importe où, n’importe quand, et mesurez vos connaissances à chaque nouvelle session !
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id7-img1.jpg',
          'images/images_projets/id7-img2.jpg',
          'images/images_projets/id7-img3.jpg', 
          'images/images_projets/id7-img4.jpg', 
          'images/images_projets/id7-img5.jpg', 
          'images/images_projets/id7-img6.jpg', 
          'images/images_projets/id7-img7.jpg', 
          'images/images_projets/id7-img8.jpg', 
        ],
        videos: [
          'https://www.youtube.com/watch?v=R8XSCoCotaI',
          'https://www.youtube.com/watch?v=8BMlmjy0L6s',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Quizz/',
        repoLink: 'https://github.com/GabriellePagnard/Quizz',
      },      
      {
        id: 8,
        name: 'Animation de particules',
        description: 'Le projet d\'animation de particules interactives offre une expérience visuelle immersive où des particules réagissent en temps réel aux mouvements de la souris.',
        fullDescription: `
          ✨ **Bienvenue dans le projet d'animation de particules interactives !** 🌟
      
          Plongez dans un univers visuel captivant où des particules flottantes se déplacent de manière fluide et réagissent en temps réel aux mouvements de votre souris. Que vous souhaitiez intégrer un fond d'écran dynamique à un site web, créer un arrière-plan interactif, ou simplement explorer les possibilités créatives des animations visuelles, ce projet vous offre une expérience unique et immersive.
      
          ## Fonctionnalités Principales
      
          🖱️ **Animation Interactive** : L'interaction en temps réel est au cœur de ce projet. Les particules flottantes réagissent aux mouvements de votre souris : elles se déplacent, se rapprochent et s'éloignent les unes des autres en fonction de la position du curseur. Ce système interactif rend chaque exploration unique et captivante, créant une expérience dynamique où l'utilisateur est partie prenante du mouvement.
      
          📱💻 **Canvas Responsive** : L'animation est entièrement responsive, ce qui signifie qu’elle s'adapte parfaitement à toutes les tailles d'écrans, qu'il s'agisse de grands écrans d’ordinateur ou de petits écrans de mobile. Que vous intégriez ce projet sur un site web, une application, ou que vous l’utilisiez comme fond d'écran, l'animation conservera sa fluidité et son impact visuel, quelle que soit la taille de l'appareil.
      
          🌌 **Effets Visuels Évolués** : Lorsque les particules se rapprochent suffisamment les unes des autres, elles se connectent entre elles par des lignes subtiles, formant un réseau visuel délicat et élégant. Cet effet ajoute de la profondeur et une dimension supplémentaire à l'animation, transformant un simple mouvement de particules en une véritable œuvre d'art numérique.
      
          🚀 **Optimisé pour la Performance** : Malgré le grand nombre de particules pouvant être affichées simultanément, l'animation reste fluide et performante. Le projet est optimisé pour fonctionner sans accrocs, même sur des appareils plus anciens ou avec des ressources limitées, garantissant une expérience utilisateur agréable quelle que soit la configuration.
      
          ## Pourquoi choisir ce projet d'animation de particules interactives ?
      
          Ce projet combine une esthétique visuelle attrayante avec une réactivité interactive, tout en étant adapté à toutes sortes d'appareils. Idéal pour les fonds d’écran dynamiques, les arrière-plans interactifs de sites web ou pour toute autre exploration créative, cette animation de particules offre une expérience engageante et fluide. Elle permet d’ajouter une touche moderne et sophistiquée à vos projets tout en assurant des performances optimales.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id8-img1.jpg',
          'images/images_projets/id8-img2.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=QzvBfGK7-gM',
          'https://www.youtube.com/watch?v=UsBM3HTk-Ug',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Animation-de-particules/',
        repoLink: 'https://github.com/GabriellePagnard/Animation-de-particules',
      },      
      {
        id: 9,
        name: 'Cartes Mémoire',
        description: 'Le projet de jeu de cartes mémoire en ligne propose une interface intuitive où vous devez retrouver des paires de cartes identiques parmi un plateau de 20 cartes.',
        fullDescription: `
          🃏 **Bienvenue dans le projet de jeu de cartes mémoire en ligne !**
      
          Ce jeu est conçu pour offrir un défi ludique et interactif qui mettra à l'épreuve votre mémoire tout en vous divertissant. Le principe est simple : retrouver des paires de cartes identiques parmi un plateau de 20 cartes (10 paires). Que vous souhaitiez passer un bon moment ou explorer un projet front-end pour votre inspiration, cette application illustre parfaitement l'utilisation de technologies modernes comme HTML, CSS (avec Tailwind), et JavaScript.
      
          ## Présentation
          Ce jeu de mémoire propose une interface fluide et moderne, optimisée pour tous les appareils. L'objectif est de trouver toutes les paires avec un minimum de coups, tout en profitant d'un design responsive et d'effets visuels attrayants. Le jeu s'adapte parfaitement à toute taille d'écran, qu'il s'agisse d'un ordinateur, d'une tablette ou d'un smartphone.
      
          ## Fonctionnalités Principales
      
          🎨 **Interface fluide et moderne** : 
          Le design du jeu a été soigneusement conçu pour offrir une expérience utilisateur intuitive et agréable. Les animations et les effets visuels rendent chaque interaction plaisante, avec une ergonomie qui permet une prise en main facile.
      
          📱 **Responsive Design** : 
          Le jeu est entièrement responsive, garantissant une adaptation parfaite à toutes les tailles d'écrans. Que vous jouiez sur un ordinateur de bureau, une tablette ou un smartphone, l'expérience sera optimisée pour chaque appareil.
      
          🔄 **Mélange aléatoire des cartes** : 
          À chaque nouvelle partie, les cartes sont mélangées de manière aléatoire, offrant ainsi une expérience unique à chaque session. Cela garantit que chaque jeu reste imprévisible et stimulant.
      
          🕒 **Affichage temporaire des cartes** : 
          Au début de chaque partie, les cartes sont affichées pendant un court instant pour permettre une mémorisation rapide. Cela donne une touche stratégique au jeu en offrant un bref aperçu avant de commencer.
      
          ✨ **Effets visuels et animations élégantes** : 
          Chaque interaction dans le jeu est agrémentée d'animations fluides, qu'il s'agisse de la révélation des cartes ou de la réussite d'une paire. Cela ajoute une touche visuelle attrayante qui enrichit l'expérience utilisateur.
      
          🏆 **Suivi des performances** : 
          Le jeu suit le nombre de coups nécessaires pour compléter une partie, offrant aux joueurs la possibilité de se fixer des objectifs pour s'améliorer. Cela permet une meilleure rejouabilité et incite à s'améliorer.
      
          🎉 **Pop-up de victoire stylisée** : 
          Une fois le jeu terminé, une pop-up de victoire stylisée s'affiche pour célébrer votre succès, accompagnée d'une option pour relancer une nouvelle partie rapidement.
      
          ## Pourquoi jouer à ce jeu de cartes mémoire ?
          Ce jeu combine divertissement et défi. Grâce à son interface moderne, ses animations fluides, et ses fonctionnalités interactives, il offre une expérience de jeu captivante. Que vous soyez un amateur de jeux de mémoire ou que vous cherchiez simplement à passer un bon moment, ce projet est un excellent exemple d'application web interactive, idéale pour les développeurs souhaitant explorer des technologies modernes comme HTML, CSS (avec Tailwind), et JavaScript.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id9-img1.jpg',
          'images/images_projets/id9-img2.jpg',
          'images/images_projets/id9-img3.jpg',
          'images/images_projets/id9-img4.jpg',
          'images/images_projets/id9-img5.jpg',
          'images/images_projets/id9-img6.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=8qbFRkFqBys',
          'https://www.youtube.com/watch?v=NT8LOCx-OSs',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Cartes-memoire/',
        repoLink: 'https://github.com/GabriellePagnard/Cartes-memoire',
      },      
      {
        id: 10,
        name: 'Dice Roller',
        description: 'Le Lanceur de Dés est une application web simple et moderne qui permet de lancer de 1 à 10 dés en un clic, avec des animations réalistes et une interface responsive.',
        fullDescription: `
          🎲 **Bienvenue dans le Lanceur de Dés** 🎲
      
          Cette application web ludique et intuitive vous permet de lancer de 1 à 10 dés en un seul clic. Que ce soit pour accompagner vos jeux de société, effectuer des calculs aléatoires ou simplement pour vous amuser, le Lanceur de Dés est conçu pour vous offrir une expérience rapide, interactive et agréable.
      
          ## Présentation
          Avec une interface moderne et épurée, cette application est facile à utiliser et visuellement attrayante. Vous pouvez lancer des dés en quelques secondes, quel que soit l’appareil que vous utilisez (ordinateur de bureau, tablette, ou smartphone). Totalement responsive, l'application s'adapte parfaitement à toutes les tailles d'écran, garantissant une expérience fluide.
      
          ## Fonctionnalités Principales
      
          🎛️ **Sélection du nombre de dés** :
          Choisissez le nombre de dés à lancer (entre 1 et 10) grâce à un curseur intuitif et dynamique. Ce curseur permet une sélection fluide et précise, offrant une flexibilité totale dans vos lancers.
      
          🎲 **Animation réaliste des dés** :
          Chaque lancer de dés est accompagné d’une animation fluide et réaliste, simulant parfaitement le mouvement des dés lorsqu'ils roulent et se stabilisent. Cet effet visuel immersif rend l’expérience plus captivante et proche de la réalité.
      
          🌀 **Design moderne et responsive** :
          Avec un design soigné et minimaliste, l’application est optimisée pour une utilisation sur tous les appareils. Que vous soyez sur mobile ou sur un écran plus grand, l'interface reste claire, élégante et facile à naviguer, assurant une expérience utilisateur fluide et plaisante.
      
          🌈 **Curseur dynamique avec jauge colorée** :
          Le curseur dynamique dispose d'une jauge colorée qui change en fonction du nombre de dés sélectionnés. Cet élément interactif offre un retour visuel instantané, rendant l'application encore plus engageante.
      
          🔄 **Relancer facilement** :
          Après chaque lancer, deux options s'offrent à vous : relancer le même nombre de dés ou revenir à l’écran de sélection pour choisir un nouveau nombre. Cette fonctionnalité simple et intuitive rend l’application idéale pour des sessions de jeu rapides ou des tests répétés.
      
          ## Pourquoi utiliser le Lanceur de Dés ?
          Le Lanceur de Dés est parfait pour toutes les situations nécessitant un lancer de dés, que ce soit pour jouer, calculer ou s'amuser. Avec ses animations réalistes, son design responsive et sa simplicité d’utilisation, il vous garantit une expérience fluide et agréable sur tous les appareils. Que vous ayez besoin de dés pour un jeu de société ou pour des activités éducatives, cette application est l’outil idéal pour vous accompagner dans vos lancers.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id10-img1.jpg',
          'images/images_projets/id10-img2.jpg',
          'images/images_projets/id10-img3.jpg',
          'images/images_projets/id10-img4.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=lZ337uMTsiQ',
          'https://www.youtube.com/watch?v=UxYJJX_ytHQ',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Dice_roller/',
        repoLink: 'https://github.com/GabriellePagnard/Dice_roller',
      },      
      {
        id: 11,
        name: 'Agribio',
        description: 'AgriBio 🌾 est une landing page qui promeut des produits bio et locaux, avec un design écoresponsable et une interface responsive optimisée par Tailwind CSS.',
        fullDescription: `
          🌾 **Bienvenue sur AgriBio** 🌾
      
          AgriBio est une landing page conçue pour promouvoir une alimentation saine et durable à travers des produits biologiques et locaux, cultivés avec soin et passion. Ce projet met en avant l'écoresponsabilité de l'entreprise avec un design fluide, engageant et esthétiquement agréable. Il allie performance et valeurs écologiques pour offrir aux utilisateurs une expérience unique.
      
          ## Présentation
          Cette landing page combine un design épuré avec des contenus informatifs, captant l’attention des visiteurs tout en présentant les valeurs et les engagements éthiques de l’entreprise. AgriBio incite les visiteurs à découvrir les produits, à s'engager pour l'environnement, et à s’abonner à la newsletter pour rester connectés aux nouveautés.
      
          ## Fonctionnalités Principales
      
          📬 **Formulaire d'inscription à la newsletter** :
          AgriBio dispose d'un formulaire simple et efficace pour que les utilisateurs s'abonnent à la newsletter. Ce formulaire permet aux visiteurs de recevoir régulièrement des informations sur les nouveaux produits, les offres exclusives et les événements liés à l'agriculture biologique, renforçant ainsi la relation avec les clients.
      
          🎉 **Pop-up de confirmation stylisé** :
          Après l'inscription à la newsletter, un pop-up de confirmation élégant et responsive apparaît, garantissant une transition fluide pour l'utilisateur. Ce message renforce l'image moderne et professionnelle de l'entreprise, tout en fournissant un retour immédiat.
      
          📦 **Présentation claire et structurée** :
          La page est organisée pour mettre en avant les produits bio et locaux ainsi que les valeurs écoresponsables de l'entreprise. Chaque section est pensée pour être facilement accessible, avec une hiérarchie visuelle claire qui améliore la lisibilité et l'engagement des utilisateurs.
      
          📱 **Design responsive** :
          Le site est entièrement responsive, garantissant une expérience utilisateur fluide et cohérente sur tous les appareils (ordinateurs, tablettes, mobiles). Peu importe la taille de l’écran, la navigation reste intuitive et les interactions agréables.
      
          🎨 **Interface moderne et intuitive** :
          AgriBio propose une interface moderne et intuitive, construite avec les dernières technologies. Le design épuré permet aux utilisateurs de se concentrer sur les informations essentielles sans distraction, rendant la navigation agréable et fonctionnelle.
      
          🎨 **Utilisation de Tailwind CSS** :
          Grâce au framework Tailwind CSS, le design est optimisé pour être à la fois moderne, performant et facile à personnaliser. Ce système permet d'assurer des temps de chargement rapides tout en maintenant une esthétique soignée et harmonieuse.
      
          ## Pourquoi choisir AgriBio ?
          AgriBio est une landing page idéale pour promouvoir une alimentation bio et locale. Grâce à son design épuré, son formulaire d'inscription à la newsletter et ses animations visuelles stylisées, elle offre une expérience utilisateur fluide et agréable, adaptée à tous les écrans. Ce projet reflète les valeurs écoresponsables de l’entreprise tout en proposant une interface moderne et intuitive.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id11-img1.jpg',
          'images/images_projets/id11-img2.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=4X6-kK_s66I',
          'https://www.youtube.com/watch?v=VIeR3J-PoAI',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Landing_Page_Agribio/',
        repoLink: 'https://github.com/GabriellePagnard/Landing_Page_Agribio',
      },      
      {
        id: 12,
        name: 'Boule magique',
        description: 'Bienvenue dans l\'univers mystique de la Boule Magique 🧙‍♂️, une application interactive qui répond à toutes tes questions avec des effets visuels dynamiques et une interface responsive pour une expérience immersive à chaque utilisation.',
        fullDescription: `
          🧙‍♂️ **Bienvenue dans l'univers mystique de la Boule Magique !**
      
          Ce projet recrée l'expérience classique de la célèbre boule 8 mystique, qui, d'un simple geste, répond à toutes vos questions. Que vous cherchiez des réponses à une décision importante ou que vous soyez simplement en quête d'amusement, cette application est conçue pour vous offrir une expérience immersive et magique.
      
          ## Présentation
          Dans cette application, vous pouvez poser toutes sortes de questions et obtenir des réponses mystiques, allant des conseils énigmatiques aux réponses divertissantes. L’interface a été soigneusement conçue pour capturer l'essence du jeu classique tout en offrant une expérience moderne et interactive. Laissez-vous guider par la magie et découvrez ce que l'avenir vous réserve en un seul clic !
      
          ## Fonctionnalités Principales
      
          🎱 **Simulation de boule magique** :
          La fonctionnalité principale de l'application est la simulation fidèle de la boule 8 mystique. Vous posez une question, appuyez sur le bouton, et attendez que la boule vous délivre l'une des 20 réponses mystiques possibles. Cela recrée l'expérience classique avec une touche numérique, idéale pour ceux qui aiment s'amuser tout en cherchant des réponses mystérieuses.
      
          💫 **Effets visuels dynamiques** :
          L’application ne se contente pas de donner une réponse : elle le fait de manière visuellement captivante. Les animations fluides et les effets de retournement ajoutent une dimension interactive, tandis que le design mystique vous plonge dans une atmosphère énigmatique. Ces détails visuels apportent une touche magique supplémentaire et rendent chaque utilisation plus immersive.
      
          🖼️ **Interface responsive** :
          Conçue pour s’adapter à tous les types d'écrans, l'application est totalement responsive. Que vous l’utilisiez sur un ordinateur de bureau, une tablette, ou un smartphone, l’expérience reste optimale et fluide. Cette flexibilité garantit que vous pouvez consulter la boule magique à tout moment, où que vous soyez.
      
          🔄 **Rejouabilité** :
          Après chaque réponse mystique, l'application vous permet de poser une nouvelle question et de continuer à explorer les secrets de la boule magique. Grâce à une rejouabilité infinie, vous pouvez découvrir de nouvelles réponses à chaque session et prolonger l'amusement sans limite.
      
          ## Pourquoi utiliser la Boule Magique ?
          La Boule Magique vous propose une manière ludique et interactive d’obtenir des réponses à vos questions tout en vous divertissant. Grâce à ses effets visuels captivants, son interface responsive, et sa simplicité d'utilisation, elle offre une expérience utilisateur engageante et immersive. Que vous soyez à la recherche de conseils ou simplement d'une réponse amusante, cette application est là pour faire briller un peu de magie dans votre quotidien.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id12-img1.jpg',
          'images/images_projets/id12-img2.jpg',
          'images/images_projets/id12-img3.jpg',
          'images/images_projets/id12-img4.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=MxrADV5a8GA',
          'https://www.youtube.com/watch?v=So71LFTBhlQ',
        ],
        demoLink: 'https://gabriellepagnard.github.io/Boule_magique/',
        repoLink: 'https://github.com/GabriellePagnard/Boule_magique',
      },      
      {
        id: 13,
        name: 'Meteo',
        description: 'Météo est une application simple qui vous permet de consulter instantanément les conditions météorologiques actuelles de n\'importe quelle ville, avec une expérience fluide sur tous les appareils.',
        fullDescription: `
          🌍 **Météo - Consultez la météo instantanément partout dans le monde !**
      
          Météo vous permet de consulter rapidement la météo de n'importe quelle ville à travers le monde. En saisissant simplement le nom d'une ville, l'application vous affiche immédiatement les conditions actuelles : température, humidité, vitesse du vent, et bien plus encore. Avec une interface moderne et soignée, vous obtenez toutes les informations en un clin d'œil, tout en profitant d'une expérience utilisateur agréable.
      
          ## Fonctionnalités Principales
      
          🏙️ **Recherche de villes** :
          L'application vous permet de rechercher facilement la météo pour n'importe quelle ville grâce à un champ de recherche intuitif. En tapant le nom d'une ville, des suggestions instantanées vous sont proposées pour faciliter et accélérer votre recherche. Vous n'avez plus besoin de connaître l'orthographe exacte ou de parcourir une longue liste, la recherche est instantanée et précise.
      
          📊 **Affichage des données météo** :
          Une fois la ville sélectionnée, l'application vous fournit une vue détaillée des conditions météorologiques actuelles, y compris la température, le taux d'humidité, la vitesse du vent, et d'autres informations essentielles. Tout est présenté de manière claire et concise pour que vous puissiez rapidement prendre connaissance des conditions extérieures.
      
          📱💻 **Interface responsive** :
          Météo est conçue pour s’adapter parfaitement à tous les appareils. Que vous consultiez la météo depuis votre smartphone, tablette, ou ordinateur, l'application s'adapte automatiquement pour offrir une expérience utilisateur fluide et optimale, peu importe la taille de l'écran.
      
          🌈 **Icônes dynamiques** :
          Les conditions météorologiques sont accompagnées d’icônes animées dynamiques pour une meilleure lisibilité et un rendu visuel attractif. Par exemple, une icône de soleil pour les journées ensoleillées, des nuages pour un ciel couvert, ou des gouttes de pluie pour signaler des averses. Ces animations rendent la consultation plus interactive et agréable.
      
          🗂️ **Stockage des données locales** :
          Pour améliorer l'expérience utilisateur, l'application intègre un système de stockage local qui enregistre vos précédentes recherches. Cela permet un suivi rapide des requêtes, vous offrant un accès instantané aux villes déjà consultées, sans avoir à refaire la recherche.
      
          ## Pourquoi utiliser l'application Météo ?
          Météo est l'outil idéal pour obtenir rapidement des informations météorologiques fiables, où que vous soyez dans le monde. Grâce à son interface moderne, ses animations dynamiques, et sa recherche intuitive, vous pouvez accéder à des données précises en un instant, tout en profitant d'une expérience utilisateur fluide et agréable. Plus besoin de consulter plusieurs sites ou applications, Météo regroupe tout ce dont vous avez besoin dans une seule interface simple et élégante.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id13-img1.jpg',
          'images/images_projets/id13-img2.jpg',
          'images/images_projets/id13-img3.jpg',
          'images/images_projets/id13-img4.jpg',
          'images/images_projets/id13-img5.jpg',
          'images/images_projets/id13-img6.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=zGAOJx9SSo8',
          'https://www.youtube.com/watch?v=ClP1MwEVflw',
        ],
        demoLink: 'https://main--astounding-cupcake-5cd5e1.netlify.app/',
        repoLink: 'https://github.com/GabriellePagnard/Meteo',
        
      },      
      {
        id: 14,
        name: 'Pomodoro',
        description: 'Pomodoro est une application web qui optimise votre productivité avec la technique Pomodoro, en vous offrant une gestion personnalisée des temps de travail et de pause, des notifications sonores, et la sauvegarde locale de vos préférences.',
        fullDescription: `
          ⏳ **Pomodoro - Boostez votre productivité avec la technique Pomodoro !**
      
          Bienvenue dans **Pomodoro**, une application web conçue pour améliorer votre productivité en appliquant la célèbre technique Pomodoro. Que vous souhaitiez vous concentrer pleinement sur vos tâches ou intégrer des pauses régulières pour optimiser votre flux de travail, cette application vous accompagne tout au long de votre journée de manière simple et efficace.
      
          ## Présentation
      
          La technique Pomodoro repose sur des cycles de travail intense de 25 minutes suivis de courtes pauses, favorisant la concentration et la productivité. **Pomodoro** vous permet de personnaliser cette méthode pour qu’elle corresponde parfaitement à vos besoins, tout en offrant une interface moderne et intuitive.
      
          ## Fonctionnalités Principales
      
          ✨ **Gestion du Temps de Travail et de Pause** :
          **Pomodoro** vous permet de personnaliser les durées de vos sessions de travail et de pause. Ajustez le temps de travail pour s’adapter à vos préférences ou à la nature de vos tâches, tout en définissant la durée de vos pauses pour un équilibre optimal entre effort et récupération. Créez ainsi un flux de travail adapté à votre rythme.
      
          🎨 **Cercle de Décompte Dynamique** :
          L'interface comprend un cercle de décompte dynamique qui évolue en temps réel et change de couleur pour indiquer si vous êtes en période de travail ou de pause. Ce visuel clair et engageant vous permet de suivre facilement votre progression sans être distrait par des chiffres ou des horloges.
      
          🔊 **Notification Sonore** :
          À la fin de chaque session de travail ou de pause, une alerte sonore se déclenche pour vous avertir du changement. Cela vous permet de vous détendre sans constamment surveiller l’interface, sachant que l'application vous alertera quand il est temps de passer à la session suivante.
      
          💾 **Sauvegarde des Préférences** :
          Vos préférences de durée (temps de travail et de pause) sont sauvegardées localement dans votre navigateur. Lorsque vous revenez sur l’application, vous pouvez reprendre là où vous vous étiez arrêté sans avoir à reconfigurer vos réglages.
      
          ## Pourquoi choisir Pomodoro ?
      
          **Pomodoro** est l'outil idéal pour améliorer votre productivité de manière organisée et structurée. Avec ses fonctionnalités de personnalisation du temps, ses indicateurs visuels dynamiques et ses alertes sonores, elle vous permet de gérer efficacement votre temps de travail et de pause. En sauvegardant localement vos préférences, l’application vous offre une expérience continue et sans tracas, pour que vous puissiez vous concentrer pleinement sur vos objectifs.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id14-img1.jpg',
          'images/images_projets/id14-img2.jpg',
          'images/images_projets/id14-img3.jpg',
          'images/images_projets/id14-img4.jpg',
          'images/images_projets/id14-img5.jpg',
          'images/images_projets/id14-img6.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=4AXiL1ukxo8',
          'https://www.youtube.com/watch?v=8v9smi-Orgk',
        ],
        demoLink: 'https://scintillating-cranachan-22bbc3.netlify.app/',
        repoLink: 'https://github.com/GabriellePagnard/Pomodoro',
        
      },      
      {
        id: 15,
        name: 'Puissance 4',
        description: 'Puissance 4 est une version en ligne moderne du jeu classique, offrant une interface responsive, une mécanique de jeu réaliste, et une détection automatique des gagnants.',
        fullDescription: `
          🎮 **Puissance 4 - Le jeu classique revisité en ligne !**
      
          Puissance 4 en ligne vous permet de revivre le plaisir de ce jeu stratégique directement depuis votre navigateur. L'objectif est simple : placer tour à tour des jetons dans une grille et être le premier à aligner quatre jetons de la même couleur, horizontalement, verticalement ou en diagonale. Ce projet s'appuie sur des technologies modernes pour offrir une interface épurée et des animations fluides, apportant une expérience utilisateur optimale.
      
          ## Fonctionnalités Principales
      
          ✨ **Interface Responsive** :
          Cette version de Puissance 4 est entièrement responsive, s’adaptant à tous les appareils, qu’il s’agisse d’un ordinateur de bureau, d’une tablette ou d’un smartphone. Quelle que soit la taille de votre écran, l’expérience de jeu reste fluide et agréable, vous permettant de jouer partout et à tout moment.
      
          🎨 **Design Moderne** :
          Le jeu propose un design épuré et minimaliste, avec des couleurs vives et des animations douces pour un rendu visuel agréable. Grâce à **Chakra UI**, les éléments de l’interface sont modernes, ergonomiques et parfaitement adaptés aux standards actuels de design, offrant ainsi une expérience engageante à tous les joueurs.
      
          🎯 **Mécanique de Jeu Réaliste** :
          La mécanique de jeu respecte les règles traditionnelles de **Puissance 4**, où les jetons tombent dans la grille de haut en bas, ajoutant une touche d’authenticité au jeu. Ce réalisme rend chaque partie plus immersive et permet de ressentir la satisfaction d’un vrai jeu de Puissance 4.
      
          🏆 **Détection du Gagnant** :
          Le jeu inclut un système de détection automatique des gagnants. Lorsqu'un joueur parvient à aligner quatre jetons, le jeu met en surbrillance les jetons gagnants et annonce le vainqueur. Cela garantit une expérience fluide sans besoin de vérifier manuellement les résultats à chaque tour.
      
          🔄 **Redémarrage Facile** :
          À la fin de chaque partie, un bouton de redémarrage rapide permet de relancer une nouvelle partie en un clic, sans avoir à recharger la page. Ce système de relance rapide favorise des sessions de jeu prolongées et un enchaînement fluide entre les parties.
      
          ## Pourquoi choisir cette version de Puissance 4 ?
      
          Cette version en ligne de **Puissance 4** combine modernité et simplicité, offrant une expérience de jeu fluide, intuitive et agréable sur tous les appareils. Grâce à des fonctionnalités comme la détection automatique des gagnants, un design responsive et moderne, et un redémarrage facile, c’est la version idéale pour tous ceux qui souhaitent s'amuser entre amis ou en famille, où qu'ils soient.
        `,
        date: "2024",
        isEncours: true,
        images: [
          'images/images_projets/id15-img1.jpg',
          'images/images_projets/id15-img2.jpg',
          'images/images_projets/id15-img3.jpg',
          'images/images_projets/id15-img4.jpg',
          'images/images_projets/id15-img5.jpg',
          'images/images_projets/id15-img6.jpg',
        ],
        videos: [
          'https://www.youtube.com/watch?v=6Q9jnpUi8T0',
          'https://www.youtube.com/watch?v=7LzeEruRcX0',
        ],
        demoLink: 'https://66cf99504c8aa03235ed28da--statuesque-longma-e061ea.netlify.app/',
        repoLink: 'https://github.com/GabriellePagnard/Puissance-4',
        
      },      
      {
        id: 16,
        name: 'Projet 16',
        description: 'Description courte du projet 2.',
        fullDescription: 'Description détaillée du projet 2.',
        date: "2023",
        isEncours: true,
        images: [
            '/path/to/image1.png',
            '/path/to/image2.png',
            '/path/to/image3.png', // Plusieurs images
          ],
          videos: [
            'https://www.youtube.com/embed/video1',
          ],
          demoLink: 'https://lien-demo1.com',
          repoLink: 'https://github.com/repo1',
      },
  ];
  
  export default projectsData;