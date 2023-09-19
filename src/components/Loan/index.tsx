import { Text, View } from "react-native";
import { Button } from "../Button";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

export function Loan() {
  return (
    <View style={{ paddingHorizontal: 18, paddingVertical: 8, gap: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Empréstimos</Text>
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
            <FontAwesome5 name="hand-holding-usd" size={28} color="#333333" />
            <Text style={{ fontSize: 16 }}>Empréstimos</Text>
          </View>
          <Entypo name="chevron-thin-down" size={24} color="#333333" />
        </View>
        <Text style={{ paddingLeft: 16, fontSize: 14, paddingBottom: 12, color: "#6d6d6d" }}>Simule Agora</Text>
      </Button>
    </View>
  );
}
