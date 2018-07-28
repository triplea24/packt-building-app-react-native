/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, View} from 'react-native';

import FilmRow from './src/films/components/FilmRow';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const films = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/816bYlte58L._SY679_.jpg',
    title: 'Harvey',
    year: 1950,
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/816bYlte58L._SY679_.jpg',
    title: 'Harvey',
    year: 1950,
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/816bYlte58L._SY679_.jpg',
    title: 'Harvey',
    year: 1950,
  },
];

type Props = {};
export default class App extends Component<Props> {
  _keyExtractor = (item,index) => index+''

  _renderItem = ({item}) => (
    <FilmRow 
      title={item.title}
      year={item.year}
      image={item.image}/>
  )
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={films}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30,
  },
});
