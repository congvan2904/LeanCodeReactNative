import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import getTemp from '../api/getTemp';
import { startFetchData, fetchSuccess, fetchError, fetchDataThunk } from './redux/actionCreator';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
        }
    }
    getTempByCityName() {
        const { cityName } = this.state;
        // this.props.startFetchData();
        // getTemp(cityName)
        //     .then(temp => this.props.fetchSuccess(cityName, temp))
        //     .catch(() => this.props.fetchError())
        this.props.fetchDataThunk(cityName);
    }
    getWeatherMessage() {
        const { mycityName, temp, isLoading, error } = this.props;
        // console.log(isLoading);
        if (isLoading) return '....Loading';
        if (error) return 'Vui Long Thu Lai';
        if (!mycityName) return 'Nhap vao thanh pho cua ban';
        return `${mycityName} hien tai la ${temp}oF`;
    }
    render() {
        // getTemp("tokyo").then(kq => console.log(kq))
        return (
            <View style={styles.container}>
                <Text style={styles.message}> {this.getWeatherMessage()}</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.cityName}
                    onChangeText={text => this.setState({ cityName: text })}
                />
                <TouchableOpacity style={styles.button}
                    onPress={() => this.getTempByCityName()}
                >
                    <Text style={styles.buttonText}>
                        Lay nhiet do
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'yellow',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        message: {
            color: 'red',
            fontSize: 25,
        },
        button: {
            backgroundColor: 'gray',
            padding: 10,
            margin: 10,
            height: 50,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonText: {
            color: 'red',
            fontSize: 25,
        },
        textInput: {
            height: 40,
            width: 300,
            backgroundColor: 'white'
        }

    }
)
function mapStateToProps(state) {
    return {
        mycityName: state.cityName,
        temp: state.temp,
        isLoading: state.isLoading,
        error: state.error,
    }
}
export default connect(mapStateToProps, { startFetchData, fetchSuccess, fetchError, fetchDataThunk })(Main);