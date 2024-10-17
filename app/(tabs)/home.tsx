import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart, PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { format } from "date-fns";

// Importa los iconos necesarios de tu biblioteca de iconos
import {
  BarChartIcon,
  PieChartIcon,
  ClockIcon,
  MapPinIcon,
} from "lucide-react-native";
import { router } from "expo-router";

interface NoteForm {
  id: string;
  title: string;
  description: string;
  mentalState: "sober" | "slightly_altered" | "very_altered";
  createdAt: Date;
  location: string;
}

const screenWidth = Dimensions.get("window").width;

const mockNotes: NoteForm[] = [
  {
    id: "note-1",
    title: "Reunión de trabajo",
    description: "Ideas para el próximo proyecto",
    mentalState: "sober",
    createdAt: new Date(2023, 9, 1),
    location: "Oficina",
  },
  {
    id: "note-2",
    title: "Cena con amigos",
    description: "Recuerdos divertidos",
    mentalState: "slightly_altered",
    createdAt: new Date(2023, 9, 2),
    location: "Restaurante",
  },
  {
    id: "note-3",
    title: "Inspiración nocturna",
    description: "Ideas para una nueva canción",
    mentalState: "very_altered",
    createdAt: new Date(2023, 9, 3),
    location: "Casa",
  },
  {
    id: "note-4",
    title: "Reflexiones matutinas",
    description: "Planes para el futuro",
    mentalState: "sober",
    createdAt: new Date(2023, 9, 4),
    location: "Parque",
  },
];

export default function Home() {
  const noteCountData = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [
      {
        data: [3, 5, 2, 8, 4, 6, 3],
        color: (opacity = 1) => `rgba(157, 78, 221, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const mentalStateData = [
    {
      name: "Sobrio",
      population: 50,
      color: "#9d4edd",
      legendFontColor: "#E2E8F0",
      legendFontSize: 12,
    },
    {
      name: "Ligeramente alterado",
      population: 30,
      color: "#7b2cbf",
      legendFontColor: "#E2E8F0",
      legendFontSize: 12,
    },
    {
      name: "Muy alterado",
      population: 20,
      color: "#5a189a",
      legendFontColor: "#E2E8F0",
      legendFontSize: 12,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1a1f26",
    backgroundGradientTo: "#1a1f26",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-bg4 pr-2 pt-6">
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{ paddingBottom: 135 }}
      >
        <Text className="text-3xl font-bold text-purple-light mb-6">
          Dashboard
        </Text>

        <View className="bg-dark-bg3 rounded-lg p-4 mb-6">
          <Text className="text-xl font-semibold text-white text-center mb-4">
            Notas por día
          </Text>
          <View className="items-center">
            <LineChart
              data={noteCountData}
              width={screenWidth - 32}
              height={220}
              chartConfig={chartConfig}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>

        <View className="bg-dark-bg3 rounded-lg p-4 mb-6">
          <Text className="text-xl font-semibold text-white text-center mb-4">
            Estados mentales
          </Text>
          <View className="items-center">
            <PieChart
              data={mentalStateData}
              width={screenWidth - 32}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"0"}
              center={[0, 0]}
              absolute
            />
          </View>
        </View>

        <Text className="text-2xl font-semibold text-purple-light mb-4 text-center">
          Notas recientes
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockNotes.map((note, index) => (
            <TouchableOpacity
              key={index}
              className="bg-dark-bg3 rounded-lg p-4 mr-4"
              style={{ width: screenWidth * 0.8 }}
              onPress={() => router.push(`/search/${note.id}`)}
            >
              <Text className="text-xl font-semibold text-white mb-2">
                {note.title}
              </Text>
              <Text className="text-content-subtext mb-4" numberOfLines={2}>
                {note.description}
              </Text>
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <ClockIcon color="#9d4edd" size={16} />
                  <Text className="text-content-subtext ml-1">
                    {format(note.createdAt, "dd/MM/yyyy")}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <MapPinIcon color="#9d4edd" size={16} />
                  <Text className="text-content-subtext ml-1">
                    {note.location}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
