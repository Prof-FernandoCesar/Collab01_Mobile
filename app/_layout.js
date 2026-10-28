import "../global.css"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"
import { Image } from "react-native"
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        drawerActiveTintColor: "#ffffff",
        drawerInactiveTintColor: "#bfdbfe",
        drawerStyle: {
          backgroundColor: "#172554",
        },
        headerStyle: {
          backgroundColor: "#172554",
        },
        headerTintColor: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
      }

      }>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Calculadora de Média Semestral",
            drawerIcon: ({ color, size }) => (
  <Ionicons name="calculator-outline" size={size} color={color} />
),
            title: "Calculadora de Média Semestral",
            headerRight: () => (
              <Image
                source={require("../assets/faama.png")}
                style={{
                  width: 70,
                  height: 35,
                  resizeMode: "contain",
                  marginRight: 50,
                }}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
