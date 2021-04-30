import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyDoctor1 } from '../../assets'
import { Header, ListDoctor } from '../../component'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Pilih Dokter Anak" type='dark' onPress={() => navigation.goBack()} />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex:1
    }
})
