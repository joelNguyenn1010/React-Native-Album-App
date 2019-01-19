import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Headers';
import AlbumList from './src/components/AlbumList/AlbumList'
export default class App extends React.Component {
  state = {
    header: 'Album'
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header header={this.state.header} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
