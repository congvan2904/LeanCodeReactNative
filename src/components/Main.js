import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,

    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Filter from './Filter';
import Form from './Form';
import Header from './Header';
import Word from './Word';

class Main extends Component {

    getWordList() {
        const { arrayWord, filterStatus } = this.props;
        if (filterStatus == 'SHOW_ALL') return arrayWord;
        if (filterStatus == 'MEMORIEZ') return arrayWord.filter(e => e.memorized);
        if (filterStatus == 'NEED_PRACTICE') return arrayWord.filter(e => !e.memorized);
    }
    render() {
        const renderItem = ({ item }) => (
            <Word item={item} />
        )

        return (

            < View style={{ backgroundColor: 'yellow', flex: 1 }
            }>
                <Header />
                {this.props.isAdding ? <Form /> : null}
                <FlatList
                    data={this.getWordList()}
                    renderItem={
                        renderItem
                    }
                />
                <Filter />
            </View >


        )
    }
}
function mapStateToProp(state) {
    return {
        arrayWord: state.arrWords,
        filterStatus: state.filterStatus,
        isAdding: state.isAdding,
    }
}

export default connect(mapStateToProp)(Main);
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
        },
        buttonAdd: {
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        }
    }
)