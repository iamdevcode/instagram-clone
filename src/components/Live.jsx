import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from 'react-native'

export const Live = () => (
  <View className="bg-white p-[3px] absolute -bottom-3 left-[18px] rounded-md">
    <LinearGradient
      style={{ paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4 }}
      colors={['#C90083', '#D22463', '#E10038']}
      locations={[0, 0.2, 1]}
      end={{ x: 1.5, y: 1 }}
    >
      <Text className="text-white text-[10px]">LIVE</Text>
    </LinearGradient>
  </View>
)
