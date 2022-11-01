import React from "react";
//TAILWIND IMPORTS
import tailwind from "tailwind-rn";

// REACT NATIVE ELEMENTS IMPORTS
import { Icon } from "@rneui/themed";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBase,
  ImageBackground,
  FlatList,
  TextInput,
  Alert,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Animated,
  TextInputBase,
} from "react-native";

//COMPOENENTS IMPORTS
import SingleProduct from "../components/SingleProduct";

export default function Market() {
  return (
    <>
      <ScrollView style={tailwind("w-full bg-green-400")}>
        <SafeAreaView style={tailwind("justify-center ")}>
          <View style={tailwind("items-center  ")}>
            <View style={tailwind("px-4 pt-4 w-full flex ")}>
              <Text style={tailwind("text-2xl font-bold text-white")}>
                What would you like to order?
              </Text>
            </View>
          </View>
        </SafeAreaView>

        <View
          style={tailwind(
            "flex flex-row justify-center  bg-gray-100 p-2 m-2 border-2 border-green-400 rounded-xl mb-6 "
          )}
        >
          <Icon
            name="search"
            iconStyle={{ marginRight: 10 }}
            size={40}
            type="ionicon"
            color="#22c55e"
          />
          <TextInput
            placeholder="Find any type of shoe"
            style={tailwind(" h-10 w-5/6 ")}
          />
        </View>

        <View style={tailwind("bg-white px-3 py-6 w-full rounded-t-3xl")}>
          <SafeAreaView style={tailwind("justify-center ")}>
            <ScrollView style={styles.scrollView}></ScrollView>
          </SafeAreaView>

          <SingleProduct />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
    horizontal: true,
    flexBasis: 1,
    flexDirection: "row",
  },
});
