import { Text, View } from "react-native";
import { Button } from "../Button";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Point } from "../Point";

export function Savings() {
  return (
    <View style={{ paddingHorizontal: 18, paddingVertical: 12, gap: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Poupança e Investimentos
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
            <MaterialCommunityIcons
              name="piggy-bank-outline"
              size={28}
              color="#333333"
            />
            <Text style={{ fontSize: 16 }}>Poupança</Text>
          </View>
          <Entypo name="chevron-thin-down" size={24} color="#333333" />
        </View>
        <Text
          style={{
            paddingLeft: 16,
            fontSize: 14,
            paddingBottom: 12,
            color: "#6d6d6d",
          }}
        >
          Guarde seu dinheiro agora mesmo.
        </Text>
      </Button>
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
            <FontAwesome name="dollar" size={28} color="#333333" />
            <Text style={{ fontSize: 16 }}>Investimentos</Text>
          </View>
          <Entypo name="chevron-thin-down" size={24} color="#333333" />
        </View>
        <Text
          style={{
            paddingLeft: 16,
            fontSize: 14,
            paddingBottom: 12,
            color: "#6d6d6d",
          }}
        >
          Faça o seu dinheiro render mais.
        </Text>
      </Button>
      <Button
        style={{
          width: "100%",
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 6,
        }}
      >
        <MaterialCommunityIcons
          name="sack"
          size={52}
          color="#ec0000"
          style={{ padding: 6 }}
        />
        <View style={{ padding: 6 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#6d6d6d",
            }}
          >
            Dá pra fazer muita coisa com R$ 1
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#6d6d6d",
            }}
          >
            milhão. e, pra concorrer, contrate
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#6d6d6d",
            }}
          >
            um DinDin.
          </Text>
        </View>
      </Button>
      <View style={{ alignSelf: "center", flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Point color={"#ec0000"} size={10} />
        <Point color={"#c2c2c2"} size={6} />
        <Point color={"#c2c2c2"} size={6} />
      </View>
    </View>
  );
}
