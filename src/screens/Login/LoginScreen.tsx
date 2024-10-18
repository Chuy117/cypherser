import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { colours, globalStyles } from '../../theme/theme';
import { SocialButton } from '../../components/SocialButton';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {

    const { width, height } = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image
                    style={{ ...globalStyles.logo, width: width * 0.8, height: height * 0.08 }}
                    source={require('../../images/cypherserlogo.png')}
                />
                <SocialButton label='E-mail' colour={colours.primary} nameIcon='mail-outline' iconColour={colours.letters} onPress={() => {navigation.navigate('Tabs' as never), console.log('huia')}} />
                <SocialButton label='Facebook' colour='blue' nameIcon='logo-facebook' iconColour={colours.letters} onPress={() => navigation.navigate('Tabs' as never)} />
            </View>
        </View>
    )
}
