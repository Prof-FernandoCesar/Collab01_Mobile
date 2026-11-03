import {GestureHandlerRootView} from "react-native-gesture-handler"
import {Drawer} from 'expo-router/drawer'

export default function _layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Drawer
        screenOptions={{
            drawerActiveTintColor: 'rgba(74, 71, 223, 0.87)',
            drawerInactiveTintColor: '#64748b'
        }}
        >
            <Drawer.Screen
                name="index"
                options={{
                    title: "parte de comunhão "
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  )
}