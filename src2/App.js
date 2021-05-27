import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import store from './components/redux/store'
import Main from './components/Main';
import { Provider } from 'react-redux';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}