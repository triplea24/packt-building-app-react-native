/* @flow */

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Props= {
    title: string,
    year: number,
    image: any,
}

export default class FilmRow extends Component<Props,void>{
    render(){
        return (
            <TouchableOpacity style={styles.container}>
                <Image
                    style={styles.filmImage} 
                    source={{ uri: this.props.image }} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.year}>{this.props.year}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        height: 80,        
    },
    filmImage: {
        margin: 15,
        width: 45,
        height: 60,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        fontSize: 16,
        color: '#333',
    },
    year: {
        fontFamily: 'Avenir Next',
        fontWeight: '300',
        fontSize: 14,
        color: '#999',
    },
    disclosure: {
        margin: 15,
    }
});