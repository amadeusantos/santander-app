import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TopBar } from "./src/components/TopBar";
import { AccountMenu } from "./src/components/AccountMenu";
import { CreditCard } from "./src/components/creditCard";
import { Loan } from "./src/components/Loan";
import { Savings } from "./src/components/Savings";
import { MyBanks } from "./src/components/MyBanks";
import { Help } from "./src/components/Help";

export default function App() {
  return (
    <View>
      <StatusBar style="inverted" backgroundColor="#ec0000" />
      <TopBar />
      <ScrollView style={{ paddingTop: "20%" }}>
        <AccountMenu />
        <CreditCard />
        <Loan />
        <Savings />
        <MyBanks />
        <Help />
        <View style={{ height: 128 }}></View>
      </ScrollView>
    </View>
  );
}
