# React Native Boilerplate for CoderSchool

Simple react-native boilerplate for mobile development.

## Getting Started

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project `git clone https://github.com/2ksoft/boilerplate-rn-coderschool.git`
1. Run `npm install` from root directory
1. Start the app in [an emulator](/docs/quick-tips.md#running-in-an-emulator)

## Stack

- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript
- [Redux](https://github.com/reduxjs/redux) a predictable state container for Javascript apps
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) middleware for Redux
- [Babel](http://babeljs.io/) for ES6+ support
- [React Navigation](https://github.com/react-community/react-navigation) navigation for React Native

## File Structure

- `/src` - Contains our React Native App codebase
  - `/actions` - Action Types and Action Creators
  - `/assets` - Images, Fonts and others
  - `/components` - Dumb components
    - `/common` - Shared components
  - `/config` - Config files
  - `/containers` - Smart components
  - `/reducers` - Reducers
  - `/utils` - Helpers
  - `/App.js` - Base component
  - `/Router.js` - App navigation
  - `/Store.js` - Store
