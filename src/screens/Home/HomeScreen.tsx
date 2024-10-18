import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { SocialButton } from '../../components/SocialButton';
import { colours, globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { RequestInterface, User } from '../../interfaces/RequestInterface';

export const HomeScreen = () => {

    const navigation = useNavigation();
    const [users, setUsers] = useState<User[]>([]);

    const loadUsers = async () => {
        try {
            const { data } = await axios.get<RequestInterface>('https://chuykike117.pythonanywhere.com/api/listUsers')
            setUsers(data.data);
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadUsers();
    }, [])

    const { width, height } = useWindowDimensions();

    return (
        <FlatList
            style={{ backgroundColor: colours.background }}
            data={users}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={globalStyles.userFlat}>
                    <View>
                        <Image
                            style={{ ...globalStyles.perfil, width: width * 0.2, height: width * 0.2 }}
                            source={{
                                uri: item.avatar,
                            }}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: colours.letters }}>{item.first_name}</Text>
                        <Text style={{ color: colours.letters }}>{item.email}</Text>
                    </View>
                </View>
            )}
            ListFooterComponent={() => (
                <View style={{ margin: 10 }}>
                    <SocialButton label='Acerca de' colour={colours.primary} nameIcon='person-circle-outline' iconColour={colours.letters} onPress={() => navigation.navigate('About' as never)} />
                </View>
            )}
        />
    )

}
