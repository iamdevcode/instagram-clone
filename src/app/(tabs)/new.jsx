import { posts } from '#/constants/posts'
import { Button } from '@/components/Buttons/Button'
import { useState } from 'react'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function CreatePostScreen() {
  const [input, setInput] = useState('')

  return (
    <ScrollView
      className="flex-1 bg-white p-2"
      contentContainerStyle={{ gap: 15, paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{ uri: posts[0].image_url }}
        className="w-3/5 aspect-[3/4] mx-auto rounded-xl"
      />
      <TouchableOpacity>
        <Text className="text-center text-lg text-[#09f]">Change</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Whats is on your mind?"
        className="bg-gray-50 p-2"
        value={input}
        onChangeText={value => setInput(value)}
      />
      <Button
        onPress={() => {}}
        width="100%"
        height={42}
        bgColor="#09f"
        txtColor="#fff"
        title="Share"
      />
    </ScrollView>
  )
}
