import { View, Text } from "react-native";
import React, { Children } from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 bg-dark-bg4 items-center justify-center">
      {children}
    </View>
  );
}
