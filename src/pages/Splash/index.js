import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { colors, fonts } from '../../utils';

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
        backgroundColor: colors.white,
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
        },
    title: {
        fontSize: 20, 
        color: colors.text.primary, 
        marginTop: 20,
        fontFamily: fonts.primary[600]
        }
})