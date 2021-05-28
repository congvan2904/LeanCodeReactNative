import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleMemorized, toggleShow } from '../redux/actionCreaters';
class Word extends Component {
    memorizedWord() {
        this.props.toggleMemorized();
    }
    Showword() {
        this.props.toggleShow();
    }
    render() {
        const { en, vn, memorized, isShow, id } = this.props.item;
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
                    <TouchableOpacity onPress={() => this.props.toggleMemorized(id)}>
                        <Text style={styles.button}>
                            {memorizeButonText}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.toggleShow(id)}>
                        <Text style={styles.button}>
                            Show
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default connect(null, { toggleMemorized, toggleShow })(Word);
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