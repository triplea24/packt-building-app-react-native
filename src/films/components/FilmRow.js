/* @flow */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

type Props= {
    title: string,
    year: number,
    image: any,
}

export default class FilmRow extends Component<Props,void>{
    render(){
        return (
            <View>
                <Image
                    style={{width: 50,height:50}} 
                    source={{ uri: this.props.image }} />
                <Text>{this.props.title}</Text>
                <Text>{this.props.year}</Text>
            </View>
        );
    }
}