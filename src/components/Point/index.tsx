import { ColorValue, View } from "react-native";

interface PointProps {
  size: number;
  color?: ColorValue;
}

export function Point({ size, color }: PointProps) {
  return (
    <View
      style={{
        borderRadius: size / 2,
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
}
