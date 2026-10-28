
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="index"
        screenOptions={{
          // Cabeçalho superior
          headerStyle: {
            backgroundColor: '#2563EB',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 17,
          },
          headerShadowVisible: false,

          // Menu lateral
          drawerStyle: {
            backgroundColor: '#FFFFFF',
            width: 285,
          },
          drawerActiveTintColor: '#6D28D9',
          drawerActiveBackgroundColor: '#EDE9FE',
          drawerInactiveTintColor: '#475569',
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: '600',
            marginLeft: 0,
          },

          // Fundo das páginas
          sceneStyle: {
            backgroundColor: '#F5F7FF',
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: 'Início',
            drawerLabel: 'Início',
          }}
        />

        <Drawer.Screen
          name="segunda"
          options={{
            title: 'Segunda-feira',
            drawerLabel: 'Segunda-feira',
          }}
        />

        <Drawer.Screen
          name="Novo"
          options={{
            title: 'Terça-feira',
            drawerLabel: 'Terça-feira',
          }}
        />

        <Drawer.Screen
          name="quarta"
          options={{
            title: 'Quarta-feira',
            drawerLabel: 'Quarta-feira',
          }}
        />

        <Drawer.Screen
          name="quinta"
          options={{
            title: 'Quinta-feira',
            drawerLabel: 'Quinta-feira',
          }}
        />

        <Drawer.Screen
          name="sexta"
          options={{
            title: 'Sexta-feira',
            drawerLabel: 'Sexta-feira',
          }}
        />

        <Drawer.Screen
          name="sabado"
          options={{
            title: 'Sábado',
            drawerLabel: 'Sábado',
          }}
        />

        <Drawer.Screen
          name="domingo"
          options={{
            title: 'Domingo',
            drawerLabel: 'Domingo',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
