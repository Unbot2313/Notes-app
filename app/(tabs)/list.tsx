import React, { useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BookOpenIcon } from "lucide-react-native";
import { NoteItem } from "@/components/NoteItem";

interface Note {
  id: string;
  title: string;
  description: string;
  mentalState: "sober" | "slightly_altered" | "very_altered";
  createdAt: Date;
  location: string;
}

const PAGE_SIZE = 10;

const mockNotes: Note[] = Array(50)
  .fill(null)
  .map((_, index) => ({
    id: `note-${index}`,
    title: `Nota ${index + 1}`,
    description: `Esta es una descripción de ejemplo para la nota ${
      index + 1
    }. Puede contener múltiples líneas de texto.`,
    mentalState: ["sober", "slightly_altered", "very_altered"][
      Math.floor(Math.random() * 3)
    ] as Note["mentalState"],
    createdAt: new Date(Date.now() - Math.random() * 10000000000),
    location: ["Casa", "Oficina", "Parque", "Café"][
      Math.floor(Math.random() * 4)
    ],
  }));

const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(mockNotes.slice(0, PAGE_SIZE));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreNotes = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    // Simular una carga de datos
    setTimeout(() => {
      const newNotes = mockNotes.slice(notes.length, notes.length + PAGE_SIZE);
      if (newNotes.length < PAGE_SIZE) {
        setHasMore(false);
      }
      setNotes([...notes, ...newNotes]);
      setLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-bg4 pr-2 pt-4 pb-28">
      <View className="flex-1 p-4">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-3xl font-bold text-purple-light">
            Mis Notas
          </Text>
          <BookOpenIcon color="#9d4edd" size={28} />
        </View>

        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id}
          onEndReached={loadMoreNotes}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            loading ? (
              <View className="py-4">
                <ActivityIndicator color="#9d4edd" />
              </View>
            ) : null
          }
        />

        {!hasMore && notes.length > 0 && (
          <Text className="text-center text-content-subtext py-4">
            No hay más notas para cargar
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NotesList;
