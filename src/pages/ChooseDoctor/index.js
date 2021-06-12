/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { Header, List } from '../../component';
import { colors } from '../../utils';

// eslint-disable-next-line react/prop-types
const ChooseDoctor = ({ navigation }) => (
  <View style={styles.page}>
    <Header
      title="Pilih Dokter Anak"
      type="dark"
      onPress={() => navigation.goBack()}
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="Alexander Janie"
      desc="Wanita"
      onPress={() => navigation.navigate('Chatting')}
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="Alexander Janie"
      desc="Wanita"
      onPress={() => navigation.navigate('Chatting')}
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="Alexander Janie"
      desc="Wanita"
      onPress={() => navigation.navigate('Chatting')}
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="Alexander Janie"
      desc="Wanita"
      onPress={() => navigation.navigate('Chatting')}
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="Alexander Janie"
      desc="Wanita"
      onPress={() => navigation.navigate('Chatting')}
    />
  </View>
);

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
