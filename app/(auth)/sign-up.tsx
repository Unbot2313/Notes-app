import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { CustomInput } from "@/components/FormField";

export default function SignUp() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-dark-bg4 flex-1">
      <View className="flex-1 items-center justify-center px-1">
        <Text className="text-purple-light mb-5 text-5xl font-bold">
          Crear cuenta
        </Text>
        <CustomInput
          title="Nombre"
          value={form.userName}
          handleChangeText={(e: string) => setForm({ ...form, userName: e })}
          keyboardType="nombre"
          placeholder="Jonh Doe"
        />
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
            Crear cuenta
          </Text>
        </TouchableOpacity>
        <View className="gap-2 flex-row pt-5 justify-center items-center">
          <Text className="text-gray-200 text-lg">Ya tienes cuenta?</Text>
          <Link href={"/sign-in"} className="text-purple-light text-lg">
            Inicia sesion
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
