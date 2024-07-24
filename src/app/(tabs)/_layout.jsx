import { tabs_routes } from '#/constants/routes'
import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: '#09f' }}
    >
      {tabs_routes.map(({ name, title, icon }, i) => (
        <Tabs.Screen
          key={i}
          name={name}
          options={{
            headerTitle: title,
            tabBarIcon: ({ color }) => (
              <FontAwesome name={icon} size={26} color={color} />
            )
          }}
        />
      ))}
    </Tabs>
  )
}
