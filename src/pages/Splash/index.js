import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    },  [])

    return (
        <View style={styles.pages}>
            <ILLogo />
            <Text style={styles.title}>My Doctor</Text>
          </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    pages: { 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
        },
    title: {
        fontSize: 20, 
        color:'#112340', 
        marginTop: 20,
        fontFamily: 'Nunit-SemiBold'
        }
})
