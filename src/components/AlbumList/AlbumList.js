import React from 'react'
import { View, ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail/AlbumDetail';
class AlbumList extends React.Component{
    state = {
        albums: []
    }
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((data) => {
            this.setState({
                albums: data.data
            })
        })
    }
    renderAlbums() {
       return this.state.albums.map((album, index) =>{
            return(
                <AlbumDetail key={index} album={album}/>
            )
        })
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList