import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuthContext } from "@/context/AuthContext";

export default function Index() {
  const { authState, onLogout } = useAuthContext();

  if (authState?.authenticated) {
    return <Redirect href={"/home"} />;
  }

  return (
    <SafeAreaView className="bg-dark-bg4 h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={require("@/assets/logo.png")}
            className="w-80 h-32"
            resizeMode="contain"
          />

          <Image
            source={require("@/assets/Fotos.png")}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative">
            <Text className="text-3xl text-white font-bold text-center">
              Descubre posibilidades{"\n"}
              infinitas con{" "}
              <Text className="text-secondary-200 text-purple-light">
                Note-App
              </Text>
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Donde la creatividad se une con la IA para aumentar tu locura.
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="py-4 px-12 rounded-full w-full mt-7 bg-purple-medium"
          >
            <Text className="text-lg font-semibold text-white text-center">
              Continuar con correo
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
