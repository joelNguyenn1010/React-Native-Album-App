import React from 'react'
import { Button, TouchableOpacity, Text } from 'react-native'
const Buttons = (props) => {
    return (
        <TouchableOpacity onPress={props.OnPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Buy</Text>
        </TouchableOpacity>
    )
}
const styles = {
    textStyle: {
        alignSelf: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 20,
        color: '#007aff',
        fontWeight: '600',
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,

    }
}

export default Buttons