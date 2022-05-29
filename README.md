## Stack

- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript
- [Axios](https://github.com/axios/axios) to make API calls
- [TypeScript](https://www.typescriptlang.org/) a typed superset of JavaScript that compiles to plain JavaScript
- [Babel](http://babeljs.io/) for ES6+ support
- [Prettier](https://prettier.io/) and [eslint](https://eslint.org/) a code quality toolset

Ensure you've followed the [Setting up the development environment](https://reactnative.dev/docs/environment-setup) doc.
Now you can setup and run the project by running:

- `npm i` or `yarn` to install the dependencies
- run the following steps for your platform

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `npm start` to start the metro bundler, in a dedicated terminal
- `npm run ios` to run the iOS application

## File Structure

- `/android` - Android native project
- `/ios` - iOS native project
- `/src` - contains React Native App codebase
    - `/api` - API clients
    - `/components` -  components
    - `/hooks` -  common hooks
    - `/theme` - theme definition: colors, spacing, typography
    - `/utils` - helpers
- `/App.tsx` - Base component
