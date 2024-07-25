# SENVOTES Frontend

## Description
SENVOTES est une application de vote électronique sécurisée développée avec React. Cette application permet aux utilisateurs de s'inscrire, se connecter, participer à des événements de vote et consulter les résultats.

## Technologies Utilisées
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios pour les requêtes HTTP
- React Router pour la navigation
- JWT pour l'authentification
- notistack pour les notifications

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
   VITE_API_URL=https://senvotes-express.vercel.app/api
   VITE_JWT_SECRET=your-jwt-secret
   ```

4. Démarrez le serveur de développement :
   ```sh
   npm run dev
   ```

## Structure du Projet

```
senvotes-frontend/
├── public/
├── src/
│   ├── api/
│   │   └── api.ts
│   ├── components/
│   │   └── Navbar.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── pages/
│   │   ├── Admin.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Results.tsx
│   │   ├── Verification.tsx
│   │   └── Vote.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
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

Pour déployer cette application, assurez-vous que les variables d'environnement sont correctement configurées sur votre serveur de production. Utilisez des outils comme Vercel ou Netlify pour déployer l'application React.

## Contributeurs
- **Nom de l'Utilisateur** - Développeur Principal

## Licence
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.


Ce fichier `README.md` fournit une vue d'ensemble complète de votre projet frontend SENVOTES, facilitant ainsi la compréhension, la configuration et l'utilisation de votre application pour d'autres développeurs. Assurez-vous de mettre à jour les informations spécifiques, comme les URLs de dépôt et les noms des contributeurs, selon vos besoins.
