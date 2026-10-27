import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function _layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "rgba(6, 3, 207, 0.87)",
          drawerInactiveTintColor: "#64748b",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Início",
            title: "Página Inicial",
          }}
        />
        <Drawer.Screen
          name="contato"
          options={{
            drawerLabel: "Contato",
            title: "Fale Conosco",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
