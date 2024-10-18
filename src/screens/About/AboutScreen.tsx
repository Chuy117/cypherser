import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { LinkingButton } from '../../components/LinkingButton';

export const AboutScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <Image
                style={{ ...globalStyles.perfil, width: width * 0.35, height: width * 0.35 }}
                source={require('../../images/Perfil.jpg')}
            />

            <Text style={globalStyles.aboutText}>Jesús Enrique Cruz Gómez</Text>
            <Text style={globalStyles.aboutText}>UX / UI Designer</Text>
            <Text style={globalStyles.aboutText}>ReactJS / React Native Developer</Text>

            <Text style={globalStyles.description}>
                Soy una persona dedicada y apasionada por lo que hace, buscando las mejores experiencias y soluciones.
                Me adapto fácilmente a los equipos de desarrollo, me gusta comunicar mis ideas y verlas implementadas.
            </Text>

            <LinkingButton url='https://drive.google.com/file/d/1iE1CUOQ8EPOCoau5u0D_1Qpe2czObPxj/view?usp=sharing' text='Descargar CV' iconName='cloud-download-outline' />
            <LinkingButton url='https://www.linkedin.com/in/jesús-enrique-cruz-gómez-628363195' text='LinkedIn' iconName='logo-linkedin' />
            <LinkingButton url='tel:${5516502686}' text='Celular' iconName='call-outline' />
            <LinkingButton url='mailto:cruzgz.jesus@gmail.com' text='Mail' iconName='send-outline' />

        </View >
    )

}
