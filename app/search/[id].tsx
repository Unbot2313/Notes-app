import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "@/components/FormField";
import { Picker } from "@react-native-picker/picker";
import { router, useLocalSearchParams } from "expo-router";
import { PencilIcon, TrashIcon } from "lucide-react-native";

interface NoteForm {
  title: string;
  description: string;
  mentalState: "sober" | "slightly_altered" | "very_altered";
  tags: string;
}

export default function EditNote() {
  const { id } = useLocalSearchParams();
  const [form, setForm] = useState<NoteForm>({
    title: "",
    description: "",
    mentalState: "sober",
    tags: "",
  });

  useEffect(() => {
    // Aquí cargarías los datos de la nota existente
    // Por ahora, usaremos datos de ejemplo
    setForm({
      title: "Título de ejemplo",
      description: "Descripción de ejemplo",
      mentalState: "sober",
      tags: "tag1, tag2",
    });
  }, [id]);

  const handleChange = (key: keyof NoteForm) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = () => {
    // Aquí iría la lógica para actualizar la nota
    console.log("Nota actualizada:", form);
    router.back();
  };

  const deleteNote = () => {
    // Aquí iría la lógica para eliminar la nota
    console.log("Nota eliminada:", id);
    router.back();
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
        <View className="flex-row items-center mb-6">
          <Text className="text-3xl font-bold text-purple-light mr-2">
            Editar Nota
          </Text>
          <PencilIcon color="#9d4edd" size={24} />
        </View>

        <CustomInput
          title="Título"
          value={form.title}
          handleChangeText={handleChange("title")}
          placeholder="Título de tu pensamiento"
        />

        <CustomInput
          title="Descripción"
          value={form.description}
          handleChangeText={handleChange("description")}
          placeholder="Describe tu pensamiento..."
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

        <View className="flex-row justify-between mt-6">
          <TouchableOpacity
            onPress={submit}
            className="bg-purple-medium py-4 px-6 rounded-full flex-1 mr-2"
          >
            <Text className="text-white text-lg font-semibold text-center">
              Actualizar Nota
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={deleteNote}
            className="bg-red-600 py-4 px-6 rounded-full"
          >
            <TrashIcon color="white" size={24} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
