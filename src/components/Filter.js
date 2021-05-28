import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main';
import { connect } from 'react-redux';
import * as actionCreater from '../redux/actionCreaters';
class Filter extends Component {
    getTextStyle(statusname) {
        const { filterStatus } = this.props;
        if (statusname === filterStatus) return {
            color: 'yellow',
            fontWeight: 'bold'
        }
        return {
            color: 'white'
        }
    }
    render() {
        // console.log(this.props.filterStatus);
        return (

            <View style={styles.containerButton}>
                <TouchableOpacity onPress={
                    () => {
                        this.props.filterShowAll()
                    }
                }>
                    <Text style={this.getTextStyle('SHOW_ALL')}>
                        Show All
                        </Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={
                    () => {
                        this.props.filterMemorized()
                    }
                }>
                    <Text style={styles.textButon, this.getTextStyle('MEMORIEZ')}>
                        Memorized
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                    () => {
                        this.props.filterNeedPractice()
                    }
                }>
                    <Text style={styles.textButon, this.getTextStyle('NEED_PRACTICE')}>
                        Need Practice
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
function mapStateToProp(state) {
    return {
        filterStatus: state.filterStatus
    }
}
export default connect(mapStateToProp, actionCreater)(Filter);
const styles = StyleSheet.create(
    {
        view: {
            backgroundColor: 'white',
            margin: 5,
            padding: 10,
        },
        text: {
            fontSize: 20,
            fontWeight: '200',
        },
        containerButton: {
            backgroundColor: 'black',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 1,
            padding: 10,
        },
        textButon: {
            color: 'white',
            backgroundColor: 'black',
            fontSize: 20,
            borderColor: '#eb34b4',
            borderWidth: 2,
        }
    }
)