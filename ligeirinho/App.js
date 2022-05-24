import React from 'react'
import { Button, Image, StatusBar, StyleSheet, View } from 'react-native'

import lig1 from './assets/1.jpg'
import lig2 from './assets/2.jpg'
import lig3 from './assets/3.jpg'
import lig4 from './assets/4.jpg'

export default class App extends React.Component {

    state = {
        imagem: lig1
    }

    render() {
        const { imagem } = this.state
        return (
            <View style={styles.container}>
                <Image
                    resizeMode='center'
                    source={imagem}
                    style={styles.image}
                />
                <View style={styles.separator} />
                <View>
                    <Button
                        title='1'
                        onPress={_ => this.setState({ imagem: lig1 })}
                    />
                    <View style={styles.separator} />
                    <Button
                        title='2'
                        onPress={_ => this.setState({ imagem: lig2 })}
                    />
                    <View style={styles.separator} />
                    <Button
                        title='3'
                        onPress={_ => this.setState({ imagem: lig3 })}
                    />
                    <View style={styles.separator} />
                    <Button
                        title='4'
                        onPress={_ => this.setState({ imagem: lig4 })}
                    />
                </View>
                <StatusBar />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    separator: {
        marginBottom: 20
    }
})
