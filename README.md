# SENVOTES Frontend

## Description
SENVOTES est une application de vote électronique sécurisée développée avec React. Cette application permet aux utilisateurs de s'inscrire, se connecter, participer à des événements de vote et consulter les résultats.

## Apperçu des technologies Utilisées
- React
- TypeScript (Ts > Js en vrai)
- Vite (Plus efficace que pour le développement)
- Tailwind CSS (parce que CSS c'est fatiguant...)
- Axios pour les requêtes HTTP
- React Router pour la navigation
- JWT pour l'authentification
- notistack pour les notifications (pas encore implémenté)

## Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-utilisateur/senvotes-frontend.git
   cd senvotes-frontend
   ```

2. Installez les dépendances :
   ```sh
   npm install
   ```

3. Configurez les variables d'environnement :
   Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
   ```env
   VITE_DEV_API_URL=dev-api-url
   VITE_JWT_SECRET=3303361d3469c328b08ea36c34671c5a7fd424bf4f53a792a08b6e6639e55539
   VITE_PORT=3001   
   VITE_PROD_API_URL=prod-api-url
   VITE_VERCEL_API_URL=Vercel-api-url
   VITE_NODE_ENV=PROD-DEV-or-VERCEL
   ```

4. Démarrez le serveur de développement :
   ```sh
   npm run dev
   ```
   ```sh
   npm run prod
   #A exécuter dans l'environnement de prod, ajoute l'option d'exposition du serveur 
   ```
   

## Pages

### Accueil
- **Route** : `/`
- **Description** : Page d'accueil avec options d'inscription et de connexion.

### Inscription
- **Route** : `/register`
- **Description** : Formulaire d'inscription pour les nouveaux utilisateurs.

### Connexion
- **Route** : `/login`
- **Description** : Formulaire de connexion pour les utilisateurs existants.

### Vérification
- **Route** : `/verification`
- **Description** : Formulaire de saisie du code de vérification envoyé par e-mail.

### Tableau de Bord
- **Route** : `/dashboard`
- **Description** : Liste des événements de vote accessibles à l'utilisateur connecté.

### Vote
- **Route** : `/vote/:id`
- **Description** : Page permettant aux utilisateurs de voter pour un événement spécifique.

### Résultats
- **Route** : `/results/:id`
- **Description** : Affichage des résultats d'un événement de vote après la date limite.

### Admin
- **Route** : `/admin`
- **Description** : Interface d'administration pour créer et gérer les événements de vote.

## Fonctionnalités Clés

1. **Authentification JWT** :
   - Les utilisateurs s'inscrivent, se connectent, et reçoivent des tokens JWT pour accéder aux fonctionnalités protégées.

2. **Création et Gestion d'Événements** :
   - Les administrateurs peuvent créer, mettre à jour et supprimer des événements de vote.

3. **Participation aux Votes** :
   - Les utilisateurs peuvent participer aux votes et consulter les résultats après la fin de l'événement.

4. **Notifications** :
   - Utilisation de notistack pour afficher des notifications contextuelles pour les actions utilisateur.

## Déploiement

Pour déployer cette application, assurez-vous que les variables d'environnement sont correctement configurées sur votre serveur de production. L'application est configurée de manière à pouvoir être déployée avec Vercel, importez le projet github sur votre Vercel et suivez-y les instructions !!

## Contributeurs
- **Mouhamed Lawal DAN AZOUMIr**
- **Gilbert GOMIS**
- **Maïmouna SAMB**

## Licence
Ce projet est sous licence SENVOTES. Voir le fichier `LICENSE` pour plus de détails.(il existe pas encore haha...)
