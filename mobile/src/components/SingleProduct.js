import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

const Cards = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          
          
          <Card>
            <Card.Title>Nike Shoes</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_70508564.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                name="cart-outline"
                type="ionicon"
                color="#FFFFFF"
              />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Add To Cart"
            />
          </Card>

          <Card>
            <Card.Title>Nike Shoes</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_475151339.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                name="cart-outline"
                type="ionicon"
                color="#FFFFFF"
              />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Add To Cart"
            />
          </Card>



          <Card>
            <Card.Title>Nike Shoes</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_309135937.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                name="cart-outline"
                type="ionicon"
                color="#FFFFFF"
              />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Add To Cart"
            />
          </Card>




          <Card>
            <Card.Title>Nike Shoes</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_157851074.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                name="cart-outline"
                type="ionicon"
                color="#FFFFFF"
              />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Add To Cart"
            />
          </Card>




          
          <Card>
            <Card.Title>Nike Shoes</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_238777848.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                name="cart-outline"
                type="ionicon"
                color="#FFFFFF"
              />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Add To Cart"
            />
          </Card>



          
          <Card>
            <Card.Title>Nike Shoes</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_196630086.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                name="cart-outline"
                type="ionicon"
                color="#FFFFFF"
              />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Add To Cart"
            />
          </Card>













        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 50,
    
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Cards;
