import { stories } from '#/constants/stories'
import { LinearGradient } from 'expo-linear-gradient'
import { FlatList, Image, Text, View } from 'react-native'
import { Live } from '../Live'

export const ListOfStories = () => (
  <FlatList
    data={stories}
    horizontal
    style={{
      paddingHorizontal: 16,
      marginBottom: 10
    }}
    contentContainerStyle={{
      backgroundColor: '#fff',
      gap: 15
    }}
    renderItem={({ item: { name, image, live }, index }) => (
      <View className="items-center">
        <LinearGradient
          style={{
            width: 75,
            height: 75,
            borderRadius: 75,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          colors={['#C90083', '#D22463', '#E10038']}
          locations={[0, 0.2, 1]}
          end={{ x: 1.5, y: 1 }}
        >
          <View className="relative bg-white p-1 rounded-full w-[70px] h-[70px]">
            <Image source={image} className="w-full h-full rounded-full" />
            {live && <Live />}
          </View>
        </LinearGradient>
        <Text className="text-[#262626] text-xs mt-2">{name}</Text>
      </View>
    )}
  />
)
