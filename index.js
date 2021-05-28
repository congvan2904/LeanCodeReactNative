/**
 * @format
 */

import { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import App from './src/components/App';
// import App from './src2/App';
export default class Bai02 extends Component {
    render() {
        return (
            <App />
        )
    }
}

AppRegistry.registerComponent(appName, () => App);
