import { Text, View } from "react-native";
import { Button } from "../Button";

export function MyBanks() {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 18,
        paddingVertical: 18,
        gap: 12,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Meus bancos</Text>
        <Text
          style={{
            fontSize: 16,
            textDecorationLine: "underline",
            color: "#ec0000",
          }}
        >
          Adicionar
        </Text>
      </View>
      <Button style={{ width:"100%", backgroundColor:"#fff", paddingHorizontal: 18, paddingVertical: 24 }}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Acesse tudo em um só lugar</Text>
        <Text style={{ fontSize: 14, color: "#6d6d6d" }}>Quer praticidade para acessar suas contas? Dá o OK no Open Finance.</Text>
      </Button>
    </View>
  );
}
