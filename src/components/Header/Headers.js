import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Header = (props) => {
    const { textStyle, viewStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.header}</Text>
        </View>
    )
}
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 10,
        shadowColor: '#000',
        //define the dimasion of the shadow
        shadowOffset: { width: 0, height: 2},
        //define the darkness of the shadow
        shadowOpacity: 0.2,

        
        elevation:2,
        position:'relative'
        
    },
    textStyle: {
        fontSize: 30
    }
}


export default Header