import 'react-native-gesture-handler'
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {Drawer} from 'expo-router/drawer'
import {Ionicons} from '@expo/vector-icons'

const drawerIcon = (name) => ({color, size}) => (
    <Ionicons name={name} color={color} size={size} />
)

export default function _layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Drawer
        screenOptions={{
            drawerActiveTintColor: 'rgba(6, 3, 207, 0.87)',
            drawerInactiveTintColor: '#64748b'
        }}
        >
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Início",
                    title: "Página Inicial | FAAMA",
                    headerShown: false,
                    drawerIcon: drawerIcon("home-outline")
                }}
            />
            <Drawer.Screen
                name="ads"
                options={{
                    drawerLabel: "Curso de ADS",
                    title: "Curso de ADS | FAAMA",
                    headerShown: false,
                    drawerIcon: drawerIcon("school-outline")
                }}
            />
            <Drawer.Screen
                name="Novo"
                options={{
                    drawerLabel: "Novo",
                    title: "Novo",
                    drawerIcon: drawerIcon("add-circle-outline")
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  )
}
