/* eslint-disable quotes */

import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: "bl" | "br";
    onPress: () => void;
}

export const Fab = ( { title, onPress, position = "br" }:Props ) => {

    const ios = () => {
        return (
            <TouchableOpacity
            activeOpacity={ 0.5 }
                onPress={ onPress }
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right ]}
            >
                <View style={styles.fab } >
                        <Text style={styles.fabText }>{ title }</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View style={[styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right ]}>
                <TouchableNativeFeedback
                        onPress={ onPress }
                        background={ TouchableNativeFeedback.Ripple('black',false,30)} >
                    <View style={styles.fab }>
                        <Text style={styles.fabText }>{ title }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };
    //
    return ( Platform.OS === 'ios' ) ? ios() : android();
    //
};

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: {
        left: 25,
    },
    right: {
        right: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
