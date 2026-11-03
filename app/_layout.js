
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="index"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563EB',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 17,
          },
          headerShadowVisible: false,

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

          sceneStyle: {
            backgroundColor: '#F5F7FF',
          },
        }}
      >
        {/* Tela inicial: não aparece no menu lateral */}
        <Drawer.Screen
          name="index"
          options={{
            title: 'Início',
            drawerItemStyle: { display: 'none' },
          }}
        />

        {/* Cardápio */}
        <Drawer.Screen
          name="cardapio"
          options={{
            title: 'Cardápio',
            drawerLabel: 'Cardápio',
          }}
        />

        {/* Agendamento de visita */}
        <Drawer.Screen
          name="agendamento"
          options={{
            title: 'Agendar visita',
            drawerLabel: 'Agendar visita',
          }}
        />

        {/* Rotas antigas: mantidas, mas ocultas */}
        <Drawer.Screen
          name="segunda"
          options={{
            title: 'Segunda-feira',
            drawerItemStyle: { display: 'none' },
          }}
        />

        <Drawer.Screen
          name="Novo"
          options={{
            title: 'Terça-feira',
            drawerItemStyle: { display: 'none' },
          }}
        />

        <Drawer.Screen
          name="quarta"
          options={{
            title: 'Quarta-feira',
            drawerItemStyle: { display: 'none' },
          }}
        />

        <Drawer.Screen
          name="quinta"
          options={{
            title: 'Quinta-feira',
            drawerItemStyle: { display: 'none' },
          }}
        />

        <Drawer.Screen
          name="sexta"
          options={{
            title: 'Sexta-feira',
            drawerItemStyle: { display: 'none' },
          }}
        />

        <Drawer.Screen
          name="sabado"
          options={{
            title: 'Sábado',
            drawerItemStyle: { display: 'none' },
          }}
        />

        <Drawer.Screen
          name="domingo"
          options={{
            title: 'Domingo',
            drawerItemStyle: { display: 'none' },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
