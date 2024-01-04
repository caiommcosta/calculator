import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Buttons(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> props.calculator(props.number)}>

                <Text style={styles.text}>{props.number} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '33.3%',
        backgroundColor: '#8bb4f7',
        borderWidth: 1,
        borderColor: '#769fe3',
        height: '25%',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    }
})