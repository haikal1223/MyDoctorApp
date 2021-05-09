import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../component'
import { colors, fonts } from '../../utils'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message'

const UploadPhoto = ({navigation}) => {
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILNullPhoto)
    const getImage = () => {
        launchImageLibrary({}, response => {
            console.log('Response = ', response);
            if (response.didCancel || response.error ){
                showMessage({
                    message: 'oops, sepertinya anda tidak memilih foto nya?',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            }else {
                const source = {uri: response.uri}
                setPhoto(source);
                setHasPhoto(true);
            }
            
        })
    }

    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                {/* Avatar View */}
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar} />
                        {
                            hasPhoto && <IconRemovePhoto style={styles.addPhoto} />
                        }
                        {
                            !hasPhoto && <IconAddPhoto style={styles.addPhoto} />
                        }
                    </TouchableOpacity>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.profession}>Product Designer</Text>
                </View>
                {/* Button View */}
                <View>
                    <Button 
                        disable={!hasPhoto}
                        title="Upload and Continue" 
                        />
                    <Gap height={30} />
                    <Link 
                    title="Skip for this" 
                    align="center" 
                    size={16}
                    onPress={() => navigation.replace('MainApp')}
                    />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex:1
    }, 
    content: {
        paddingHorizontal: 40,
        flex:1,
        justifyContent:'space-between',
        paddingBottom: 64
    },
    profile: {
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth:1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems:'center',
        justifyContent:'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign:'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign:'center',
        color: colors.text.secondary
    }
})
