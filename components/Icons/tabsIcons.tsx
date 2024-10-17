import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TabIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const TabIcon: React.FC<{
  focused: boolean;
  size: number;
  name: any;
  label: string;
}> = ({ focused, size, name, label }) => {
  const iconColor = focused ? "#A020F0" : "#A9A9A9"; // Morado cuando está enfocado, gris claro cuando no.

  return (
    <View className="flex items-center">
      <Ionicons name={name} size={size + 4} color={iconColor} />
      {/* Ícono un poco más grande */}
      {focused && (
        <Text className="text-sm mb-2 text-center text-purple-500 font-semibold tracking-wider shadow-lg">
          {label}
        </Text>
      )}
    </View>
  );
};

export const HomeIcon: React.FC<TabIconProps> = ({ focused, size }) => (
  <TabIcon
    focused={focused}
    size={size}
    name={focused ? "home" : "home-outline"}
    label="Home"
  />
);

export const CreateIcon: React.FC<TabIconProps> = ({ focused, size }) => (
  <TabIcon
    focused={focused}
    size={size}
    name={focused ? "add-circle" : "add-circle-outline"}
    label="Create"
  />
);

export const ListIcon: React.FC<TabIconProps> = ({ focused, size }) => (
  <TabIcon
    focused={focused}
    size={size}
    name={focused ? "list" : "list-outline"}
    label="List"
  />
);
