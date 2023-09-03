import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addEarningsRedux } from "../redux/earningsSlice";
import { globalStyles } from "../styles/globalstyles";

export default function TopUpScreen() {
  const [earning, setEarning] = useState("");
  const dispatch = useDispatch();

  const earnings = useSelector((state) => state.earnings);

  const handleTopUp = () => {
    if (earning % 1 === 0) {
      dispatch(addEarningsRedux(earning));
      setEarning("");
    }
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={globalStyles.amountContainer}>
            <Text style={{ ...globalStyles.naira }}>₦</Text>
            <Text style={globalStyles.amount}>{earnings.amount}</Text>
          </View>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter Amount"
            placeholderTextColor="gray"
            inputMode="numeric"
            onChangeText={(text) => setEarning(text)}
            value={earning}
          />
          <Pressable onPress={handleTopUp}>
            <MaterialCommunityIcons
              name={"plus-box"}
              size={39}
              color="rgb(10,207,132)"
            />
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
