import { registerRootComponent } from 'expo';
// import 'react-native-get-random-values';
// import { v4 } from 'uuid';
// import { polyfillWebCrypto } from 'expo-standard-web-crypto';
// polyfillWebCrypto();
// const uuid = v4();
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
