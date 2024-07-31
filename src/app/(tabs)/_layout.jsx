import { tabs_routes } from '#/constants/routes'
import { SvgCameraIcon, SvgIgtvIcon, SvgMessangerIcon } from '#/svg/icons'
import { SvgInstagramLogo } from '#/svg/images'
import { Tabs } from 'expo-router'
import { Image, Text, View } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff'
        }
      }}
    >
      {tabs_routes.map(({ name, icon, image }, i) => (
        <Tabs.Screen
          key={i}
          name={name}
          options={{
            header: () => {
              return (
                <View className="flex-row justify-between items-center pt-[40px] pb-4 px-4 bg-white">
                  <SvgCameraIcon />
                  <SvgInstagramLogo className="ml-8" />
                  <View className="flex-row items-center justify-between w-[60px]">
                    <SvgIgtvIcon />
                    <SvgMessangerIcon />
                  </View>
                </View>
              )
            },
            tabBarIcon: () =>
              icon ? (
                <Text>{icon}</Text>
              ) : (
                <Image
                  source={image}
                  className="w-[30px] h-[30px] rounded-full"
                />
              )
          }}
        />
      ))}
    </Tabs>
  )
}
