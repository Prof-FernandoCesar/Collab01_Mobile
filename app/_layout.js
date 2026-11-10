import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from 'expo-router/drawer'
import { Image } from 'react-native'
import '../global.css'

export default function _layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
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
                        title: "Página Inicial"


                    }}



                />
                <Drawer.Screen
                    name="ouvidoria"
                    options={{
                        drawerLabel: "Ouvidoria",
                        title: "Fale Conosco"
                    }}
                />
                <Drawer.Screen
                    name="enfermagem"
                    options={{
                        drawerLabel: "Enfermagem",
                        title: "Curso de Enfermagem",
                        headerStyle: { backgroundColor: '#172554' },
                        headerTintColor: '#ffffff',
                        headerTitle: () => (
                            <Image
                                source={require('../assets/faama.png')}
                                style={{ width: 112, height: 34 }}
                                resizeMode="contain"
                                accessibilityLabel="FAAMA"
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="laboratorios"
                    options={{
                        drawerItemStyle: { display: 'none' },
                        title: "Laboratórios",
                        headerStyle: { backgroundColor: '#172554' },
                        headerTintColor: '#ffffff',
                        headerTitle: () => (
                            <Image
                                source={require('../assets/faama.png')}
                                style={{ width: 112, height: 34 }}
                                resizeMode="contain"
                                accessibilityLabel="FAAMA"
                            />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}
