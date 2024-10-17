import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { EyeIcon, EyeOffIcon } from "@/components/Icons/EyeIcons";

interface CustomInputProps {
  title: string;
  placeholder: string;
  value: string;
  handleChangeText: (text: string) => void;
  keyboardType?: string;
  inputType?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  title,
  placeholder,
  value,
  handleChangeText,
  inputType,
  keyboardType = "default", // Valor predeterminado para el tipo de teclado
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View className="w-full mb-4 bg-dark-bg4 px-3">
      {/* Título del input */}
      <Text className="text-2xl text-purple-light mb-2">{title}</Text>

      {/* Input con contenedor */}
      <View className="flex flex-row w-full h-16 px-4 border-2 bg-[#151e36] rounded-2xl focus:border-secondary">
        <TextInput
          className="flex-1 text-base text-white"
          placeholder={placeholder}
          placeholderTextColor="#A0AEC0"
          onChangeText={handleChangeText}
          multiline={inputType === "textarea"}
          numberOfLines={inputType === "textarea" ? 4 : 1}
          secureTextEntry={keyboardType === "password" && !showPassword}
          value={value}
        />

        {/* Botón para mostrar/ocultar contraseña si es tipo password */}
        {keyboardType === "password" && (
          <TouchableOpacity
            onPress={toggleShowPassword}
            className="absolute right-4 top-[18px]"
          >
            {showPassword ? (
              <EyeOffIcon size={24} color="#9d4edd" />
            ) : (
              <EyeIcon size={24} color="#9d4edd" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
