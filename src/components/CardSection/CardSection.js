import React from 'react'
import {View} from "react-native"
const CardSection = (props) => {
    const { containerStyle} = styles
    return(
        <View style={containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        padding: 5,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        borderBottomColor: '#ddd',
    }
}
export default CardSection