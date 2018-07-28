/* @flow */

import React from 'react';
import { Text, StyleSheet} from 'react-native';

export default (props: { title: string, style?: any}) => (
    <Text {...props} style={[ styles.title, props.style ]}>
        { props.title }
    </Text>
)

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Avenir Next',
        fontWeight: 'bold',
        color: '#333',
        paddingVertical: 5,
    }
});