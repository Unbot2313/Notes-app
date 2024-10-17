import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Usaremos Ionicons como ejemplo

export function EyeIcon({ size = 24, color = "#7b2cbf" }) {
  return <Ionicons name="eye" size={size} color={color} />;
}

export function EyeOffIcon({ size = 24, color = "#7b2cbf" }) {
  return <Ionicons name="eye-off" size={size} color={color} />;
}
