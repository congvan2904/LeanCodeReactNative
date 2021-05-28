import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main';
import store from '../redux/store';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}