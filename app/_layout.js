import "../global.css"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"
import { Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function _layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "#ffffff",
          drawerInactiveTintColor: "#bfdbfe",
          drawerStyle: { backgroundColor: "#172554" },
          headerStyle: { backgroundColor: "#172554" },
          headerTintColor: "#ffffff",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{ drawerLabel: "Início", title: "Página Inicial" }}
        />
        <Drawer.Screen
          name="ouvidoria"
          options={{ drawerLabel: "Ouvidoria", title: "Fale Conosco" }}
        />
        <Drawer.Screen
          name="calcularmedia"
          options={{
            drawerLabel: "Calculadora de Média",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calculator-outline" size={size} color={color} />
            ),
            title: "Calculadora de Média",
            headerRight: () => (
              <Image
                source={require("../assets/faama.png")}
                style={{ width: 60, height: 45, resizeMode: "contain", marginRight: 30 }}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
