import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import CardSection from '../../CardSection/CardSection'
import Card from '../../Card/Card'
import Buttons from '../../Buttons/Buttons'
const AlbumDetail = (props) => {
    const { thumbnail_image, title, artist, image,url } = props.album
    const {
        imageThumbnailContainer,
        imageThumbnailStyle,
        textContainer,
        titleTextStyle,
        imageStyle
    } = styles
    return (
        <Card>
            <CardSection>
                <View style={imageThumbnailContainer}>
                    <Image source={{ uri: thumbnail_image }}
                        style={imageThumbnailStyle}
                    />
                </View>
                <View style={textContainer}>
                    <Text style={titleTextStyle}>Title: {title}</Text>
                    <Text>Artist: {artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{ uri: image }}
                    style={imageStyle} />
            </CardSection>

            <CardSection>
                {/* Link is a component for app to open a url page */}
                <Buttons OnPress={() => Linking.openURL('https://shareibc.com')}/>
            </CardSection>
        </Card>
    )
} 

const styles = {
    imageThumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 2,
    },
    imageThumbnailStyle: {
        width: 66,
        height: 58
    },
    titleTextStyle: {
        fontSize: 20,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail