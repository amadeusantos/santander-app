import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";

interface ButtonProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

export function Button({ children, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 2,
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        ...style,
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
