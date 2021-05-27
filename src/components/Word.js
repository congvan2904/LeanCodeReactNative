import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
class Word extends Component {
    memorizedWord() {
        this.props.dispatch(
            {
                type: 'MEMORIZED',
                id: this.props.item.id
            }
        )
    }
    Showword() {
        this.props.dispatch(
            {
                type: 'SHOW',
                id: this.props.item.id
            }
        )
    }
    render() {
        const { en, vn, memorized, isShow } = this.props.item;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizeButonText = memorized ? 'forget' : 'memorized';
        const meaning = isShow ? 'vn' : '------'
        return (
            <View style={styles.view}>
                <Text style={{ textDecorationLine }} >
                    {en}
                </Text>
                <Text style={styles.text}>
                    {meaning}
                </Text>
                <View style={styles.controler}>
                    <TouchableOpacity onPress={this.memorizedWord.bind(this)}>
                        <Text style={styles.button}>
                            {memorizeButonText}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.Showword()}>
                        <Text style={styles.button}>
                            Show
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default connect()(Word);
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
        controler: {
            flexDirection: 'row',
            justifyContent: 'space-around',

        },
        button: {
            backgroundColor: 'yellow',
            padding: 10,
            margin: 10,
        },

    }
)