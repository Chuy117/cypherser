import { StyleSheet } from 'react-native';

export const colours = {
    background: '#000',
    letters: '#fafafa',
    primary: '#27a776',
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colours.background
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    button: {
        height: 45,
        width: 80,
        backgroundColor: colours.primary,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 25,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    },
    perfil: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 100,
        marginTop: 25,
        marginBottom: 15,
    },
    aboutText: {
        textAlign: 'center',
        fontWeight: '500',
        color: colours.primary,
        fontSize: 20,
    },
    description: {
        textAlign: 'justify',
        margin: 20,
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: '300',
        color: colours.primary,
    },
    userFlat: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: colours.primary
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: colours.primary,
        borderRadius: 5,
    },
});