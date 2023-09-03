import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { useSelector } from "react-redux";
import { globalStyles } from "../styles/globalstyles";

export default function HistoryScreen({ route, navigation }) {
  const expense = useSelector((state) => state.expense.record);
  const purchaseName = route.params.purchase;

   if(expense?.length <=0){
    return
   }

  const individualExpense = expense.filter(
    (elem) => elem?.purchase.toLowerCase() === purchaseName.toLowerCase()
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={globalStyles.amountContainer}>
          <Text style={{ ...globalStyles.naira }}>₦</Text>
          <Text style={globalStyles.amount}>{individualExpense[0]?.amount}</Text>
        </View>
        <View style={styles.rowViewContainer}>
          <Text style={globalStyles.text}>Purchase : </Text>
          <Text style={globalStyles.text}>{individualExpense[0]?.purchase}</Text>
        </View>
        <View style={styles.rowViewContainer}>
          <Text style={globalStyles.text}>Description : </Text>
          <Text style={globalStyles.text}>
            {individualExpense[0]?.description}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title="back"
        onPress={() => navigation.goBack()}
        color={"rgb(10,207,132)"}
      />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgb(10,207,132)",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  rowViewContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 8,
    flexWrap: "wrap",
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
  }
});
