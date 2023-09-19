import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../Button";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Pix from "../../assets/images/pix.png";
import Transferir from "../../assets/images/transferir.png";
import Pagar from "../../assets/images/pagar.png";

interface AccountMenuProps {
  name: string;
  account: string;
  agency: string;
}

export function AccountMenu({name, account, agency }: AccountMenuProps) {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#ec0000",
          paddingVertical: "16%",
          paddingHorizontal: 12,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Olá, {name}</Text>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Ag {agency} Co {account}
        </Text>
      </View>
      <View style={{ alignItems: "center", gap: 40 }}>
        <Button
          style={{
            backgroundColor: "#fff",
            marginTop: -32,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            gap: 12,
          }}
        >
          <Ionicons name="md-swap-horizontal" size={52} color="#ec0000" />
          <Text>
            Cadastre sua chave Pix e facilite suas transações. Clique aqui.
          </Text>
        </Button>
        <Button
          style={{
            width: "90%",
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <MaterialIcons
              name="account-balance-wallet"
              size={28}
              color="#ec0000"
            />
            <Text style={{ fontSize: 16 }}>Saldo disponivel</Text>
          </View>
          <Entypo name="chevron-thin-down" size={24} color="#333333" />
        </Button>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 18,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              width: "30%",
              height: 90,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={Pix}
              style={{ width: 32, height: 32, tintColor: "#ec0000" }}
            />
            <Text style={{ color: "#6d6d6d" }}>Pix</Text>
          </Button>
          <Button
            style={{
              width: "30%",
              height: 90,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={Pagar}
              style={{ width: 32, height: 32, tintColor: "#ec0000" }}
            />
            <Text style={{ color: "#6d6d6d" }}>Pagar</Text>
          </Button>
          <Button
            style={{
              width: "30%",
              height: 90,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={Transferir}
              style={{ width: 32, height: 32, tintColor: "#ec0000" }}
            />
            <Text style={{ color: "#6d6d6d" }}>transferir</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
