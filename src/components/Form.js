import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding, addWords } from '../redux/actionCreaters';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        }
    }
    onAdd() {
        const { en, vn } = this.state;
        this.props.addWords(en, vn);
        this.props.toggleIsAdding();
    }
    render() {
        return (
            <View style={styles.view}>
                <TextInput style={styles.textInput}
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                    placeholder='English word'
                />
                <TextInput style={styles.textInput}
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                    placeholder="Meaning"
                />
                <TouchableOpacity onPress={this.onAdd.bind(this)}>
                    <Text>
                        Add
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        textInput: {
            height: 40,
            width: 300,
            backgroundColor: 'pink',
            margin: 5,
            paddingHorizontal: 10,
        },
        view: {
            alignItems: 'center',
        }
    }
)
export default connect(null, { toggleIsAdding, addWords })(Form);