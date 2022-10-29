//NAVIGATION IMPORTS
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, SafeAreaView, Text } from "react-native";

// REACT NATIVE ELEMENTS IMPORTS
import { Icon } from "@rneui/themed";

//PAGES IMPORTS
import Market from "./src/pages/Market";
import Product from "./src/pages/Product";
import Cart from "./src/pages/Cart";
import Payment from "./src/pages/Payment";
import Admin from "./src/pages/Admin";

import tailwind from "tailwind-rn";

function HomeScreen({ navigation }) {
  return (
    <>
      <View
        style={tailwind(
          "flex flex-col  justify-center bg-blue-100 "
        )}
      >
        <SafeAreaView
          style={tailwind(
            "flex flex-row   pb-5 justify-center bg-blue-100 "
          )}
        >
          <View style={tailwind(" w-full p-2")}>
            <Text style={tailwind(" text-center font-semibold text-xl ")}>
              Mobile Ecommerce App
            </Text>

            <Text
              style={tailwind(
                " text-xs text-center font-semibold px-14 py-2  "
              )}
            >
              👋👋👋Welcome Admin to your Dashboard
            </Text>
          </View>
        </SafeAreaView>

        <SafeAreaView
          style={tailwind(
            "flex flex-row  justify-center bg-blue-200 rounded-t-3xl pt-10 "
          )}
        >
          <View style={tailwind("flex w-1/2")}>
            <View
              style={tailwind(
                "bg-blue-500  p-2 m-1 rounded-xl text-white font-semibold text-sm  w-48"
              )}
            >
              <Icon
                reverse
                name="key"
                type="ionicon"
                color="#60a5fa"
              />

              <Button
                onPress={() => navigation.navigate("Admin")}
                title="Go to Admin"
              />
            </View>
          </View>

          <View style={tailwind("flex items-center w-1/2")}>
            <View
              style={tailwind(
                "bg-blue-500  p-2  m-1 rounded-xl text-white font-semibold text-sm w-48 "
              )}
            >
              <Icon
                reverse
                name="card"
                type="ionicon"
                color="#60a5fa"
              />

              <Button
                onPress={() => navigation.navigate("Payment")}
                title="Go to Payment"
              />
            </View>
          </View>
        </SafeAreaView>

        <SafeAreaView
          style={tailwind(
            "flex flex-row   justify-center bg-blue-200 pt-3 "
          )}
        >
          <View style={tailwind("flex w-1/2")}>
            <View
              style={tailwind(
                "bg-blue-500  p-2  m-1 rounded-xl text-white font-semibold text-sm w-48"
              )}
            >
              <Icon
                reverse
                name="albums"
                type="ionicon"
                color="#60a5fa"
              />

              <Button
                onPress={() => navigation.navigate("Product")}
                title="Go to Product"
              />
            </View>
          </View>

          <View style={tailwind("flex w-1/2")}>
            <View
              style={tailwind(
                "bg-blue-500  p-2  m-1 rounded-xl text-white font-semibold text-sm  w-48"
              )}
            >
              <Icon
                reverse
                name="grid"
                type="ionicon"
                color="#60a5fa"
              />

              <Button
                onPress={() => navigation.navigate("MarketPlace")}
                title="Go to MarketPlace"
              />
            </View>
          </View>
        </SafeAreaView>

        <SafeAreaView
          style={tailwind(
            "flex flex-row  justify-center bg-blue-200 pt-3 "
          )}
        >
          <View style={tailwind("flex w-1/2")}>
            <View
              style={tailwind(
                "bg-blue-500  p-2  m-1 rounded-xl text-white font-semibold text-sm  w-48"
              )}
            >
              <Icon
                reverse
                name="cart"
                type="ionicon"
                color="#60a5fa"
              />

              <Button
                onPress={() => navigation.navigate("Cart")}
                title="Go to Cart"
              />
            </View>
          </View>

          <View style={tailwind("flex w-1/2")}>
            <View
              style={tailwind(
                "bg-blue-500  p-2  m-1 rounded-xl text-white font-semibold text-sm  w-48"
              )}
            >
              <Icon
                reverse
                name="notifications"
                type="ionicon"
                color="#60a5fa"
              />

              <Button
                onPress={() => navigation.navigate("Notifications")}
                title="Go to notifications"
                style={{ margin: 20, color: "#333333" }}
              />
            </View>
          </View>
        </SafeAreaView>

        <SafeAreaView
          style={tailwind(
            "flex flex-row justify-center bg-blue-200 pt-3 pb-8 "
          )}
        >
          <View style={tailwind("flex w-1/2")}>
            <View
              style={tailwind(
                "bg-blue-500  p-2  m-1 rounded-xl text-white font-semibold text-sm w-48"
              )}
            >
              <Icon
                reverse
                name="person"
                type="ionicon"
                color="#60a5fa"
              />
              <Button
                onPress={() => navigation.navigate("Profile")}
                title="Go to profile"
              />
            </View>
          </View>

          <View style={tailwind("flex w-1/2")}>
            <View
              style={tailwind(
                "bg-blue-500  p-2  m-1 rounded-xl text-white font-semibold text-sm  w-48"
              )}
            >
              <Icon
                reverse
                name="settings"
                type="ionicon"
                color="#60a5fa"
              />

              <Button
                onPress={() => navigation.navigate("Settings")}
                title="Go to Settings"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}

function MarketPlace({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Market />
    </View>
  );
}

function CartScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />

      <Cart />
    </View>
  );
}

function ProductScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />

      <Product />
    </View>
  );
}

function PaymentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />

      <Payment />
    </View>
  );
}

function AdminScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />

      <Admin />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="MarketPlace" component={MarketPlace} />
        <Drawer.Screen name="Product" component={ProductScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Payment" component={PaymentScreen} />
        <Drawer.Screen name="Admin" component={AdminScreen} />

        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
