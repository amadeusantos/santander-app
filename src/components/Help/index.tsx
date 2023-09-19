import { Text, View } from "react-native";
import { Button } from "../Button";
import { Entypo, AntDesign } from "@expo/vector-icons";

export function Help() {
  return (
    <View style={{ paddingHorizontal: 18, paddingVertical: 8, gap: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Precisa de ajuda?
      </Text>
      <Button
        style={{
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <AntDesign name="questioncircleo" size={28} color="#333333" />
            <Text style={{ fontSize: 16 }}>Fale com a Gente</Text>
          </View>
          <Entypo name="chevron-thin-right" size={24} color="#333333" />
        </View>
        <Text
          style={{
            paddingLeft: 16,
            fontSize: 14,
            paddingBottom: 12,
            color: "#6d6d6d",
          }}
        >
          Tire dúvidas, encontre soluções,
          ative o WhatsApp e muito mais para te
          ajudar
        </Text>
      </Button>
    </View>
  );
}
