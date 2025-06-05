import { Image, ImageStyle, ImageSourcePropType, StyleProp } from 'react-native'

type Props = {
    styles: StyleProp<ImageStyle>,
    source: ImageSourcePropType,
}

export default function ChooseBuddy({ styles, source }: Props) {
    return (
        <Image style={styles} source={source}/>
    )
}