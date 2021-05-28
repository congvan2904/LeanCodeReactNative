import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../redux/actionCreaters'
class Header extends Component {
    render() {
        return (
            <View style={styles.buttonAdd}>
                <Text />
                <Text>
                    My Word
                    </Text>
                <TouchableOpacity onPress={() => this.props.toggleIsAdding()}>
                    <Text>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
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
            flexDirection: 'row',
            paddingHorizontal: 20,
        },

    }
)
export default connect(null, { toggleIsAdding })(Header);