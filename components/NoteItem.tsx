import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { format } from "date-fns";
import { ClockIcon, MapPinIcon, BrainIcon } from "lucide-react-native";
import { router } from "expo-router";

interface Note {
  id: string;
  title: string;
  description: string;
  mentalState: "sober" | "slightly_altered" | "very_altered";
  createdAt: Date;
  location: string;
}

export const NoteItem: React.FC<{ item: Note }> = ({ item }) => {
  const handleClick = () => {
    router.push(`/search/${item.id}`);
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      className="bg-dark-bg3 rounded-lg p-4 mb-4"
    >
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-xl font-semibold text-purple-light">
          {item.title}
        </Text>
        <BrainIcon
          color={
            item.mentalState === "sober"
              ? "#9d4edd"
              : item.mentalState === "slightly_altered"
              ? "#7b2cbf"
              : "#5a189a"
          }
          size={20}
        />
      </View>
      <Text className="text-content-text mb-3" numberOfLines={2}>
        {item.description}
      </Text>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <ClockIcon color="#9d4edd" size={16} />
          <Text className="text-content-subtext ml-1">
            {format(item.createdAt, "dd/MM/yyyy HH:mm")}
          </Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon color="#9d4edd" size={16} />
          <Text className="text-content-subtext ml-1">{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
