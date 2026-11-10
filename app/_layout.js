import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
            fontFamily: 'System',
            fontSize: 14,
            fontWeight: '500',
            letterSpacing: 0,
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
        <Drawer.Screen
          name="pastoral"
          options={{
            drawerLabel: 'Pastoral',
            title: 'Vida Espiritual',
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
        <Drawer.Screen
          name="teologia"
          options={{
            drawerLabel: "Curso de Teologia",
            title: "Teologia - FAAMA",
          }}
        />

       <Drawer.Screen
          name="programasExtensao"
          options={{
            drawerLabel: "Pós-graduação e Cursos de Extensão",
            title: "Pós-graduação e Cursos de Extensão"
           }}
        />
        <Drawer.Screen
            name="calendarioAcademico"
            options={{
                drawerLabel: "Calendário Acadêmico",
                title: "Calendário Acadêmico"
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

        <Drawer.Screen
          name="enfermagem"
          options={{
            drawerLabel: 'Enfermagem',
            title: 'Curso de Enfermagem | FAAMA',
            headerTitle: () => (
              <Image
                source={require('../assets/faama.png')}
                style={{ width: 60, height: 45, resizeMode: 'contain' }}
                accessibilityLabel="FAAMA"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="laboratorios"
          options={{
            drawerItemStyle: { display: 'none' },
            title: 'Laboratórios | FAAMA',
            headerTitle: () => (
              <Image
                source={require('../assets/faama.png')}
                style={{ width: 60, height: 45, resizeMode: 'contain' }}
                accessibilityLabel="FAAMA"
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
