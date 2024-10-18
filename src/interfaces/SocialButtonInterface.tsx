export interface SocialButtonInterface {
    label: string;
    colour?: string;
    blackText?: boolean;
    nameIcon: string;
    iconColour: string
    onPress: () => void;
}