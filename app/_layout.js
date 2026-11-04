import 'react-native-gesture-handler'
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {Drawer} from 'expo-router/drawer'
import {StatusBar} from 'expo-status-bar'
import {Ionicons} from '@expo/vector-icons'
import {cores, fonteMono} from '../constantes/tema'

const drawerIcon = (name) => ({color, size}) => (
    <Ionicons name={name} color={color} size={size} />
)

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: cores.fundo }}>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: cores.fundo, borderBottomWidth: 1, borderBottomColor: cores.borda },
          headerShadowVisible: false,
          headerTintColor: cores.textoForte,
          headerTitleStyle: { fontWeight: '700', fontSize: 16 },
          sceneStyle: { backgroundColor: cores.fundo },
          drawerStyle: { backgroundColor: cores.superficie, borderRightColor: cores.borda },
          drawerActiveBackgroundColor: 'rgba(59, 130, 246, 0.15)',
          drawerActiveTintColor: cores.destaque,
          drawerInactiveTintColor: cores.textoSuave,
          drawerLabelStyle: { fontFamily: fonteMono, fontSize: 13, letterSpacing: 0.5 },
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
          name="ouvidoria"
          options={{
            drawerLabel: 'Ouvidoria',
            title: 'Fale Conosco',
          }}
        />
        <Drawer.Screen
          name="GuiaCalouro"
          options={{
            drawerLabel: 'Guia do Calouro',
            title: 'Guia do Calouro',
          }}
        />
        <Drawer.Screen
          name="contato"
          options={{
            drawerLabel: 'Contato',
            title: 'Fale Conosco',
          }}
        />
        <Drawer.Screen
          name="pedagogia"
          options={{
            drawerLabel: 'Pedagogia',
            title: 'Curso de Pedagogia',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
