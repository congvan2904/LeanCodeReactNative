import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import { connect } from 'react-redux';
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
        this.props.dispatch({ type: 'ADD', en, vn })
        this.props.dispatch({ type: 'ISADDING' })

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
export default connect()(Form);