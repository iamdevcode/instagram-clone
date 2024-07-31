import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'

export const Post = ({ post }) => (
  <View>
    <View className="flex-row items-center gap-x-2 p-2">
      <Image
        source={post.image_profile}
        style={{ width: 30, aspectRatio: 1, borderRadius: 20 }}
      />
      <Text className="font-semibold">{post.user.username}</Text>
    </View>
    <Image source={post.image_post} className="w-full h-[400px]" />
    <View className="p-3 flex-row justify-between">
      <View className="flex-row items-center gap-x-3">
        <AntDesign name="hearto" size={24} />
        <Ionicons name="chatbubble-outline" size={24} />
        <Feather name="send" size={24} />
      </View>
      <Feather name="bookmark" size={24} />
    </View>
  </View>
)
