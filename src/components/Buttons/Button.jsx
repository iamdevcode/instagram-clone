import clsx from 'clsx'
import { Text, TouchableOpacity } from 'react-native'

export const Button = ({
  onPress,
  width,
  height,
  txtColor,
  bgColor,
  title,
  otherStyles
}) => (
  <TouchableOpacity
    style={{ width, height, backgroundColor: bgColor }}
    className={clsx('justify-center items-center rounded-lg', otherStyles)}
    onPress={onPress}
  >
    <Text style={{ color: txtColor }} className="font-semibold">
      {title}
    </Text>
  </TouchableOpacity>
)
