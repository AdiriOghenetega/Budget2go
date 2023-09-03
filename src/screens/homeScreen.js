import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
} from "react-native";
import HistoryComponent from "../components/historyComponent";
import { globalStyles } from "../styles/globalstyles";
import { LineChart } from "react-native-gifted-charts";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const spentData = useSelector((state) => state.earnings.spent);
  const available = useSelector((state) => state.earnings.amount);
  const spentSum = spentData?.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  const lineData = spentData?.map((elem) => {
    return {
      value: parseInt(elem),
      dataPointText: elem,
    };
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.updateBudgetContainer}>
          <View>
            <Text
              style={{ ...globalStyles.text, fontSize: 20, fontWeight: "900" }}
            >
              Spent
            </Text>
            <View style={{flexDirection:"row"}}>
            <Text style={{ ...globalStyles.naira , fontSize: 20}}>₦</Text>
            <Text style={{ ...globalStyles.text, fontSize: 20 }}>
              {spentSum}
            </Text>
            </View>
          </View>
          <View>
            <Text
              style={{ ...globalStyles.text, fontSize: 20, fontWeight: "900" }}
            >
              Available
            </Text>
            <View style={{flexDirection:"row"}}>
            <Text style={{ ...globalStyles.naira , fontSize: 20}}>₦</Text>
            <Text style={{ ...globalStyles.text, fontSize: 20 }}>
              {available}
            </Text>
            </View>
          </View>
          <View style={styles.updateBudget}>
            <Button
              title="Topup"
              color={"rgb(10,207,132)"}
              onPress={() => navigation.navigate("Topup")}
            />
            <Button
              title="Spend"
              color={"rgb(242,78,30)"}
              onPress={() => navigation.navigate("Spend")}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              ...globalStyles.text,
              textAlign: "center",
              marginVertical: 5,
            }}
          >
            Spent data stats
          </Text>
          {lineData?.length > 0 ? (
            <LineChart
              initialSpacing={0}
              data={lineData}
              textShiftY={-8}
              textShiftX={-10}
              textFontSize={13}
              isAnimated
              spacing={40}
              thickness={5}
              hideYAxisText
              yAxisColor="rgb(10,207,132)"
              showVerticalLines
              verticalLinesColor="rgb(10,207,132)"
              xAxisColor="rgb(10,207,132)"
              color="rgb(242,78,30)"
            />
          ) : (
            <Text>No spending data Avaliable</Text>
          )}
        </View>
        <HistoryComponent navigation={navigation} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  updateBudgetContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 4,
  },
  updateBudget: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width:130
  },
});
