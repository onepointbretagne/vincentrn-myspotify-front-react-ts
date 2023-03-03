# myspotify-front-react-ts

## Setup : Accès à l'API Spotify

* Aller sur la page [Spotify Dashboard](https://developer.spotify.com/dashboard).
* Se connecter ou créer un compte (gratuit).
* Ensuite dans le dashboard, il faut créer une application (bouton "Create an app")
    * Lui donner un nom
    * Valider
* Editer les settings
    * Ajouter un redirect URI : http://localhost:3000/callback
* Récupérer le Client ID (vers le haut à gauche)
* Copier ensuite le fichier .env vers un fichier .env.local
* Dans le fichier .env.local, modifier la variable VITE_SPOTIFY_CLIENT_ID avec votre clientId

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
