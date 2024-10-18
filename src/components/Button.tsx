import React from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { colours, globalStyles } from '../theme/theme';
import { ButtonInterface } from '../interfaces/ButtonInterface';

export const Button = ({ label, colour = colours.primary, onPress }: ButtonInterface) => {

    const { width, height } = useWindowDimensions();

    return (

        <View style={{ alignSelf: 'center', marginBottom: 30 }}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => ({
                    ...globalStyles.button,
                    backgroundColor: colour,
                    opacity: (pressed) ? 0.8 : 1,
                    width: width * 0.75,
                })}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        style={{
                            ...globalStyles.buttonText,
                            color: colours.letters
                        }}>
                        {label}
                    </Text>
                </View>
            </Pressable>
        </View>

    )

}
