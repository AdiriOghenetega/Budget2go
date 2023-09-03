import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Button,
} from "react-native";
import { useSelector } from "react-redux";
import { globalStyles } from "../styles/globalstyles";
import {persistor} from "../redux/store"

export default function HistoryComponent({ navigation }) {

  const expense = useSelector((state) => state.expense.record);

  const handleClearHistory = ()=>{
    persistor.purge()
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.historyContainer}>
      <Text style={globalStyles.amount}>
            History
      </Text>
      <Button title="clear history" onPress={handleClearHistory} color="rgb(10,207,132)" />
        </View>
      <View style={styles.listContainer}>
      <View>
        {expense?.length > 0 ? 
        <FlatList
          data={expense}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("History", { purchase: item.purchase })
              }
            >
              <View style={globalStyles.itemContainer}>
                <Text style={globalStyles.text}>{item.purchase}</Text>
              </View>
            </Pressable>
          )}
        />
        :
        <Text>No expenditure history available</Text>}
      </View>
      </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
  width:350,
  height:230,
  borderWidth: 1,
  borderColor: "rgb(10,207,132)",
  borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    padding:9
  },
  historyContainer:{
    marginVertical: 3,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
  }
});
