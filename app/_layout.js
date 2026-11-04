
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cores, fonteMono } from '../constantes/tema';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: cores.fundo }}>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: cores.fundo,
            borderBottomWidth: 1,
            borderBottomColor: cores.borda,
          },
          headerShadowVisible: false,
          headerTintColor: cores.textoForte,
          headerTitleStyle: { fontWeight: '700', fontSize: 16 },
          sceneStyle: { backgroundColor: cores.fundo },
          drawerStyle: {
            backgroundColor: cores.superficie,
            borderRightColor: cores.borda,
          },
          drawerActiveBackgroundColor: 'rgba(59, 130, 246, 0.15)',
          drawerActiveTintColor: cores.destaque,
          drawerInactiveTintColor: cores.textoSuave,
          drawerLabelStyle: {
            fontFamily: fonteMono,
            fontSize: 13,
            letterSpacing: 0.5,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início',
            title: 'FAAMA',
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
          name="pedagogia"
          options={{
            drawerLabel: 'Pedagogia',
            title: 'Curso de Pedagogia',
          }}
        />

        <Drawer.Screen
          name="calcularmedia"
          options={{
            drawerLabel: 'Calculadora de Média',
            title: 'Calculadora de Média',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calculator-outline" size={size} color={color} />
            ),
            headerRight: () => (
              <Image
                source={require('../assets/faama.png')}
                style={{
                  width: 60,
                  height: 45,
                  resizeMode: 'contain',
                  marginRight: 30,
                }}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
