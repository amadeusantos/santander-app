import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";
import Santander from "../../assets/images/santander.png";

export function TopBar() {
  return (
    <View
      style={{
        backgroundColor: "#ec0000",
        position: "absolute",
        top: 24,
        flexDirection: "row",
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 12,
        justifyContent: "space-between",
        elevation: 1,
      }}
    >
      <Ionicons name="menu-outline" size={30} color="#f0f0f0" />
      <View
        style={{
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={Santander} style={{ width: 24, height: 24 }} />
        <Text style={{ fontSize: 20, color: "#f0f0f0" }}>Santander</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <Ionicons
          name="ios-chatbox-ellipses-outline"
          size={24}
          color="#f0f0f0"
        />
        <FontAwesome5 name="bell" size={24} color="#f0f0f0" />
      </View>
    </View>
  );
}
