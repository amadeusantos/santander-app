import { Image, Text, View } from "react-native";
import { Button } from "../Button";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export function CreditCard() {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 18,
        paddingVertical: 18,
        gap: 12,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cartões</Text>
      <View style={{ alignItems: "center", gap: 24 }}>
        <Button
          style={{
            width: "100%",
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <AntDesign name="creditcard" size={24} color="#333333" />
            <Text style={{ fontSize: 16 }}>Meus cartões</Text>
          </View>
          <Entypo name="chevron-thin-down" size={24} color="#333333" />
        </Button>
        <Button
          style={{
            width: "100%",
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#ec0000",
          }}
        >
          <Text style={{ fontSize: 16, color: "#ec0000" }}>Cartão Online</Text>
        </Button>
        <Button
          style={{
            width: "100%",
            height: 128,
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={{
              uri: "https://fintech.com.br/app/uploads/2021/08/cartao-credito-santander-sx-capa.jpg",
            }}
            style={{ width: 81, height: 128, borderRadius: 2 }}
          />
          <View style={{ padding: 18 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Ainda não tem cartão de com 12
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              meses de anuidade grátis?
            </Text>
            <Text style={{ padding: 6, color: "#ec0000", fontSize: 14 }}>
              Peça o seu.
            </Text>
          </View>
        </Button>
      </View>
    </View>
  );
}
