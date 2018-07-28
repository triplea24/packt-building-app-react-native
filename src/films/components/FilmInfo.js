/* @flow */

import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import FilmInfoTitle from './FilmInfoTitle';
import FilmInfoBody from './FilmInfoBody';

type Props = {
    title: string,
    body: string,
}

type State = {
    isOpened: boolean,
}

export default class FilmInfo extends Component<Props,State>{
    constructor(props: Props){
        super(props);
        this.state = {
            isOpened: false,
        }
    }

    _onPress(){
        this.setState( (state: State) => ({isOpened: !state.isOpened}) );
    }

    render(){
        return(
            <TouchableOpacity
                onPress={this._onPress.bind(this)}
                style={styles.container}>
                <FilmInfoTitle title={this.props.title} />
                <FilmInfoBody
                    body={this.props.body}
                    numberOfLines={this.state.isOpened ? 0 : 3}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    }
});