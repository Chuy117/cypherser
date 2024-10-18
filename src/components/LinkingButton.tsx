import React from 'react';
import { LinkingInterface } from '../interfaces/LinkingInterface';
import { Linking, Pressable, Text, useWindowDimensions, View } from 'react-native';
import { colours, globalStyles } from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export const LinkingButton = ({ url, text, iconName }: LinkingInterface) => {

    const { width, height } = useWindowDimensions();

    return (
        <>
            <View style={{ alignSelf: 'center' }}>
                <Pressable
                    onPress={() => Linking.openURL(url)}
                    style={({ pressed }) => ({
                        ...globalStyles.button,
                        backgroundColor: colours.primary,
                        opacity: (pressed) ? 0.8 : 1,
                        width: width * 0.75,
                    })}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name={iconName} size={25} color={colours.letters} style={{ marginRight: 10 }} />
                        <Text
                            style={{
                                ...globalStyles.buttonText,
                                color: colours.letters
                            }}>
                            {text}
                        </Text>

                    </View>
                </Pressable>
            </View>
        </>
    )
}
