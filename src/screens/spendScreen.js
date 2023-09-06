import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { substractEarningsRedux } from "../redux/earningsSlice";
import { addExpenseRedux } from "../redux/expenseSlice";
import HistoryComponent from "../components/historyComponent";
import { globalStyles } from "../styles/globalstyles";

export default function SpendScreen({ navigation }) {
  const [expenditure, setExpenditure] = useState({
    amount: "",
    purchase: "",
    description: "",
  });

  const dispatch = useDispatch();
  const earnings = useSelector((state) => state.earnings);

  const handleSpend = () => {
    if (earnings?.amount >= expenditure.amount) {
      if (
        expenditure.amount % 1 === 0 &&
        expenditure.purchase.length !== 0 &&
        expenditure.description.length !== 0
      ) {
        dispatch(substractEarningsRedux(expenditure.amount));
        dispatch(addExpenseRedux(expenditure));
        setExpenditure({
          amount: "",
          purchase: "",
          description: "",
        });
      } else {
        Alert.alert("Incomplete details", "Fill in all entries", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } else {
      Alert.alert("Not allowed", "You do not have enough money to spend", [
        {
          text: "Topup",
          onPress: () => navigation.navigate("Topup"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.firstSection}>
            <View style={globalStyles.amountContainer}>
              <Text style={{ ...globalStyles.naira }}>₦</Text>
              <Text style={globalStyles.amount}>{earnings.amount}</Text>
            </View>
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Purchase"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                setExpenditure((prev) => {
                  return {
                    ...prev,
                    purchase: text,
                  };
                })
              }
              value={expenditure.purchase}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Amount"
              placeholderTextColor="gray"
              inputMode="numeric"
              onChangeText={(text) =>
                setExpenditure((prev) => {
                  return {
                    ...prev,
                    amount: text,
                  };
                })
              }
              value={expenditure.amount}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Description"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                setExpenditure((prev) => {
                  return {
                    ...prev,
                    description: text,
                  };
                })
              }
              value={expenditure.description}
            />
            <Button
              title="spend"
              color={"rgb(10,207,132)"}
              onPress={handleSpend}
            />
          </View>
          <HistoryComponent navigation={navigation} />
        </View>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom:15
  },
  firstSection: {
    width: "100%",
    alignItems: "center",
  },
});
