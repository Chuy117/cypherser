import React from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { colours, globalStyles } from '../theme/theme';
import { SocialButtonInterface } from '../interfaces/SocialButtonInterface';
import Icon from 'react-native-vector-icons/Ionicons';

export const SocialButton = ({ label, colour = colours.primary, blackText = false, nameIcon, iconColour, onPress }: SocialButtonInterface) => {

    const { width, height } = useWindowDimensions();

    return (

        <View style={{ alignSelf: 'center' }}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => ({
                    ...globalStyles.button,
                    backgroundColor: colour,
                    opacity: (pressed) ? 0.8 : 1,
                    width: width * 0.75,
                })}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={nameIcon} size={25} color={iconColour} style={{ marginRight: 10 }} />
                    <Text
                        style={{
                            ...globalStyles.buttonText,
                            color: (blackText) ? 'black' : colours.letters
                        }}>
                        {label}
                    </Text>
                </View>
            </Pressable>
        </View>

    )

}
