import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "@/components/FormField";
import { Link, router } from "expo-router";
import { useAuthContext } from "@/context/AuthContext";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { onLogin } = useAuthContext();

  const submit = () => {
    router.push("/home");
  };

  return (
    <SafeAreaView className="bg-dark-bg4 flex-1">
      <View className="flex-1 items-center justify-center px-1">
        <Text className="text-purple-light mb-5 text-5xl font-bold">
          Iniciar Sesion
        </Text>
        <CustomInput
          title="Email"
          value={form.email}
          handleChangeText={(e: string) => setForm({ ...form, email: e })}
          keyboardType="email"
          placeholder="yourEmail@email.com"
        />
        <CustomInput
          title="Password"
          value={form.password}
          handleChangeText={(e: string) => setForm({ ...form, password: e })}
          keyboardType="password"
          placeholder="yourpassword"
        />
        <TouchableOpacity
          onPress={submit}
          className="py-4 px-12 rounded-full w-full mt-7 bg-purple-medium"
        >
          <Text className="text-lg font-semibold text-white text-center">
            Iniciar Sesion
          </Text>
        </TouchableOpacity>
        <View className="gap-2 flex-row pt-5 justify-center items-center">
          <Text className="text-gray-200 text-lg">No tienes cuenta?</Text>
          <Link href={"/sign-up"} className="text-purple-light text-lg">
            Crea una
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
