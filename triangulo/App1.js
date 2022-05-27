import React from 'react'
import { StyleSheet, Image, TextInput, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import Equilatero from './assets/equilatero.png'
import Escaleno from './assets/escaleno.png'
import Isoceles from './assets/isoceles.png'

let windowSize = Dimensions.get('window')

export default class App extends React.Component {

    triangulo = _=> {
        const {a, b, c} = this.state

        if ((a==b) && (b==c)) {
            this.setState({
                image : Equilatero,
                text: 'Triângulo Equilátero'
            })
        } else if ( (a!=b) && (a!=c) && (b!=c)) {
            this.setState({
                image : Escaleno,
                text: 'Triângulo Escaleno'
            })
        } else {
            this.setState({
                image : Isoceles,
                text: 'Triângulo Isósceles'
            })
        }
    }

    state = {
        image: "",
        a: "",
        b: "",
        c: "",
        text: ""
    };

    render() {
        const {a, b, c, image, text} = this.state;
        return (
            <View style={styles.container}>

                <TextInput style={styles.inputText} placeholder="A" keyboardType='numeric' onChangeText={(a) => this.setState({ a })}/>
                <TextInput style={styles.inputText} placeholder="B" keyboardType='numeric' onChangeText={(b) => this.setState({ b })}/>
                <TextInput style={styles.inputText} placeholder="C" keyboardType='numeric' onChangeText={(c) => this.setState({ c })}/>

                <TouchableOpacity style={styles.button} onPress = {this.triangulo}>
                    <Text style={styles.buttonText}>Classificar</Text>
                </TouchableOpacity>

                <Text style={styles.text}>{this.state.text}</Text>

                <Image
                    resizeMode='center'
                    style= {styles.image}
                    source={image}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 50
    },

    image: {
        width: 400,
        height: 200,
        marginBottom: 15,
        alignSelf: 'center'
    },

    button: {
        marginTop: 15,
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 100,
        height: 50
    },

    buttonText: {
        color: '#fff',
    },

    inputText: {
        borderColor: '#A9A9A9',
        marginBottom: 15,
        borderWidth: 1,
        padding: 2,
        width: windowSize.width-70
    },

    text: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'black',
        marginTop: 25
    }
});
