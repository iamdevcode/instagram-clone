import { posts } from '#/constants/posts'
import { Post } from '@/components/Post'
import { ListOfStories } from '@/components/Sections/ListOfStories'
import { FlatList, ScrollView } from 'react-native'

export default function HomeScreen() {
  return (
    <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
      <ListOfStories />
      <FlatList
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({ item: post, index }) => <Post key={index} post={post} />}
      />
    </ScrollView>
  )
}
