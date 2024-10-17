import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "@/components/FormField";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";

interface NoteForm {
  title: string;
  description: string;
  mentalState: "sober" | "slightly_altered" | "very_altered";
}

export default function Create() {
  const [form, setForm] = useState<NoteForm>({
    title: "",
    description: "",
    mentalState: "sober",
  });

  const handleChange = (key: keyof NoteForm) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = () => {
    alert(`Formulario enviado: ${JSON.stringify(form)}`);
    router.push("/home");
  };

  return (
    <SafeAreaView className="bg-dark-bg4 flex-1">
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingBottom: 100,
        }}
      >
        <Text className="text-purple-light text-3xl font-bold mb-6">
          Crear Nueva Nota
        </Text>
        <CustomInput
          title="Titulo"
          value={form.title}
          handleChangeText={handleChange("title")}
          placeholder="Vi un pez"
        />
        <CustomInput
          title="Descripción"
          value={form.description}
          handleChangeText={handleChange("description")}
          placeholder="Este pez me gusto pero un gato lo atrapo"
          inputType="textarea"
        />

        <Text className="text-2xl text-purple-light mb-2 mx-3">Estado</Text>
        <View className="bg-[#151e36] rounded-2xl mb-4 mx-3">
          <Picker
            selectedValue={form.mentalState}
            onValueChange={(itemValue) =>
              handleChange("mentalState")(itemValue as NoteForm["mentalState"])
            }
            style={{ color: "#E2E8F0" }}
          >
            <Picker.Item label="Sobrio" value="sober" />
            <Picker.Item
              label="Ligeramente alterado"
              value="slightly_altered"
            />
            <Picker.Item label="Muy alterado" value="very_altered" />
          </Picker>
        </View>

        <TouchableOpacity
          onPress={submit}
          className="bg-purple-medium py-4 px-6 rounded-full mt-4"
        >
          <Text className="text-white text-lg font-semibold text-center">
            Guardar Nota
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
