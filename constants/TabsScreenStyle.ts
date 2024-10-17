import Colors from "./Colors";

export const TabsScreenStyles = {
  tabBarActiveTintColor: Colors.tabActive,
  tabBarInactiveTintColor: Colors.tabInactive,
  tabBarStyle: {
    backgroundColor: Colors.tabBg,
    height: 70, // Hacemos la barra más alta
    borderRadius: 35, // Mayor curvatura para un look moderno
    marginBottom: 20, // Mantiene la barra elevada
    marginHorizontal: 20,
    paddingHorizontal: 20, // Mayor espacio interno
    paddingBottom: 10,
    paddingTop: 10, // Asegura que el contenido esté centrado verticalmente
    shadowColor: "#000", // Sombra para dar la sensación de elevación
    shadowOffset: { width: 0, height: 5 }, // Dirección de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 10, // Difusión de la sombra
    elevation: 10, // Elevación en Android
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    borderTopWidth: 2.1,
    borderTopColor: Colors.tabActive,
  },
  tabBarLabelStyle: {
    fontSize: 14, // Tamaño del texto más grande
    fontWeight: "600",
  },
  tabBarIconStyle: {
    marginTop: -4, // Centra mejor los iconos
  },
  tabBarItemStyle: {
    justifyContent: "center", // Centra los elementos
    alignItems: "center",
  },
};
