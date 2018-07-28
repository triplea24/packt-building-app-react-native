/* @flow */

import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';

export default (props: { body: string, style?: any}) => (
    <Text {...props} style={[ styles.body, props.style ]}>
        { props.body }
    </Text>
)

const styles = StyleSheet.create({
    body: {
        fontFamily: 'Avenir Next',
        color: '#999',
    }
});