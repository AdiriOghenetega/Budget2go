import { StatusBar } from "expo-status-bar";
import { StyleSheet, ActivityIndicator } from "react-native";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/homeScreen";
import HistoryScreen from "./src/screens/historyScreen";
import TopUpScreen from "./src/screens/topupScreen";
import SpendScreen from "./src/screens/spendScreen";
import MyTabBar from "./src/components/tabBar";

const Tab = createBottomTabNavigator();

export default function App() {
  const tabIcon = {
    home: "home",
    topup: "plus-box",
    history: "history",
    spend: "minus-box",
  };
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" color="rgb(242,78,30)" />}
        persistor={persistor}
      >
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={({ route, navigation }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = tabIcon[route.name.toLowerCase()];

                // You can return any component that you like here!
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={24}
                    color="rgb(242,78,30)"
                  />
                );
              },
              tabBarIndicatorStyle: {
                backgroundColor: "rgb(163,237,128)",
                height: 5,
              },
              tabBarShowLabel: true,
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Topup" component={TopUpScreen} />
            <Tab.Screen
              name="History"
              component={HistoryScreen}
              options={{ title: "Overview" }}
            />
            <Tab.Screen name="Spend" component={SpendScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
