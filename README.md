
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


# 1. Environment details

- Windows 10
- VS Code 1.75.1
- Node.js v18.0.0
- npm v8.6.0

# 2. Tasks asked

## 2.1. Technical debt

Some technical debt I've found on this project:

- Website not responsive (hard to use on phone)
- Bad UI/UX (using a framework like MUI or primereact could be a huge gain of time using the responsive pattern)
- No I18N nor L10N
- No test on front (storybook, cypress, jest)
- No code coverage
- No JSDoc
- No comments on the code
- Some file need to be cut down (eg.: App.tsx) and some components are missing
- No lint rule, some indentation issues and semicolons too
- No .nvmrc on the front project
- Use of any type in typescipt
- Order import by external module, entreprise module and then local import
- Some files import unsued packages
- There is a missing import to use primereact (core CSS missing)
- On [AlbumList](https://github.com/onepointbretagne/vincentrn-myspotify-front-react-ts/blob/57bc34ee5a870057e75ad9f5e744287db7e18493/src/components/AlbumList.tsx#L13) a map should be used instead of a pre compile array
- On [Album.tsx](https://github.com/onepointbretagne/vincentrn-myspotify-front-react-ts/blob/57bc34ee5a870057e75ad9f5e744287db7e18493/src/components/Album.tsx#L7) We try to get a value which might not exist and raise an uncatched error (accessing a prop on an undefined)
- In front, use only `const` and `let`, some `var` are still used
- On [App.tsx](https://github.com/onepointbretagne/vincentrn-myspotify-front-react-ts/blob/master/src/App.tsx#L28), use [URLSearchParams](https://developer.mozilla.org/fr/docs/Web/API/URLSearchParams) for a clearer and safer use of parameter
- Use equality of value and type ([App.tsx](https://github.com/onepointbretagne/vincentrn-myspotify-front-react-ts/blob/master/src/App.tsx#L65)
- On [App.tsx](https://github.com/onepointbretagne/vincentrn-myspotify-front-react-ts/blob/master/src/App.tsx#L73), doing a return directly inside a `if/else` make the `else` useless
- Not familiar enought with React and CSS but using SCSS with a scope could be better
- Have a config file for each environment (dev, staging, production)
- On [app.controller.ts](https://github.com/onepointbretagne/vincentrn-myspotify-back-nodejs/blob/a4316c700aea9f868555a3fa57cf4d0d9c6c4f51/src/app.controller.ts#L44) the promise function Promise.all should be used 
- On [app.controller.ts](https://github.com/onepointbretagne/vincentrn-myspotify-back-nodejs/blob/master/src/app.controller.ts#L57) export the class to not only have it locally


## 2.2. Refactor the album search

I created a new component called `AlbumSearch` and export the code which was in the App. I injected the token through the props.
I also changed the `AlbumList` component to use a map rendering the album.
I added an event on 'enter' key to valid the search.

## 2.3. Add an album detail

To add an album detail, I added an event on the card with a new page added in the `react-router`. The ID is passed by the URI, the new album component can access to this ID to have all the details thanks to Spotify's API.

## 2.4. Add paginator to the search

I used this [paginator](https://primereact.org/paginator/) to add the pagination to the app. On changing page, new data are asked to the API and the component is updated.
The core css import was missing to use primereact, so I added it.

## 2.5. Listened album do not work with too much informations

I have not the bigger file (csv talked about in the bug/perf ticket) but my guess is that there is too much data to be extract on each call and a timeout occurs.
The use of a database instead of a file would be much better, scalable and faster. The best way would be to do a limit + offset. 

## 2.6. Show the top 10 albums listened

Under the disconnect button, I added another one to access a new page using the `AlbumList` component.
On backend, I created a new endpoint using the `getLastListened` function, then order them and slice to only take the 10 most listened. With a database instead of a file, it would be easier and faster (and more scallable with index).
I also moved the business code to the `appService` file.

## 2.7. Add favorite on album

I only made it on backend and not linked it on frontend.
A POST endpoint `/api/fav` allows us to add one ID of album and the same endpoint in GET return an array with all the added album ID. We cannot remove them at the moment.

# 3. End of the test

## 3.1. Time's up

- Test started the 08th of March, 2023 at 13h30.
- Break time at 16h00 during 30min.
- End of the test at 18h00 to respect the afternoon time.

## 3.2. Remain to do

- Get a good UI/UX
- Link frontend and backend for the favorites
- Add comments
- Add test on frontend (cypress, storybook, jest)
- Make tests on backend work
- Others features listed

