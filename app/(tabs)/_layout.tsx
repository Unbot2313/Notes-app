import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { HomeIcon, ListIcon, CreateIcon } from "@/components/Icons/tabsIcons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
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
          paddingTop: 15, // Asegura que el contenido esté centrado verticalmente
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
          fontWeight: "600", // Texto más visible
        },
        tabBarIconStyle: {
          marginTop: -4, // Centra mejor los iconos
        },
        tabBarItemStyle: {
          justifyContent: "center", // Centra los elementos
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          headerTitle: "Home",
          headerStyle: { backgroundColor: "#000" },
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size }) => (
            <HomeIcon color={color} focused={focused} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarShowLabel: false,
          headerShown: false,

          headerTitle: "Create",
          headerStyle: { backgroundColor: "#000" },
          tabBarIcon: ({ color, focused, size }) => (
            <CreateIcon color={color} focused={focused} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarShowLabel: false,
          title: "List",
          headerShown: false,

          headerTitle: "List",
          headerStyle: { backgroundColor: "#000" },
          tabBarIcon: ({ color, focused, size }) => (
            <ListIcon color={color} focused={focused} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
