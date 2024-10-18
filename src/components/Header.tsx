import { Text, View } from 'react-native';
import { HeaderInterface } from '../interfaces/HeaderInterface';
import { globalStyles } from '../theme/theme';

export const Header = ({ title }: HeaderInterface) => {
    return (
        <View>
            <Text style={globalStyles.title}>{title}</Text>
        </View>
    )
}
