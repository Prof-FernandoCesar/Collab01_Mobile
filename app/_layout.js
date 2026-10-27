export default function _layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
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
        </Drawer>
    </GestureHandlerRootView>
  )
}