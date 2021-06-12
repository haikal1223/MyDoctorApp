import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Firebase} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          // kondisi user sedang login
          console.log('user: ', user);
          navigation.replace('MainApp');
        } else {
          // kondisi user sedang log out
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.pages}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: fonts.primary[600],
  },
});
