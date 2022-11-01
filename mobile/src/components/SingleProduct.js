import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

const Cards = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>Solar Panel</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_294760891.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              Solar Panel 1 Description of the product
            </Text>
            <Text style={{ marginBottom: 10 }}>KSh 35,000.00</Text>
            <Button
              icon={<Icon name="cart-outline" type="ionicon" color="#FFFFFF" />}
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
            <Card.Title>Solar Panel 2</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_291457811.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              Solar Panel 2 Description of the product
            </Text>
            <Text style={{ marginBottom: 10 }}>KSh 35,000.00</Text>
            <Button
              icon={<Icon name="cart-outline" type="ionicon" color="#FFFFFF" />}
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
            <Card.Title>Solar Panel 3</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_340491937.jpeg")}
            />
            <Text style={{ marginBottom: 10 }}>
              Solar Panel 1 Description of the product
            </Text>
            <Text style={{ marginBottom: 10 }}>KSh 57,000.00</Text>
            <Button
              icon={<Icon name="cart-outline" type="ionicon" color="#FFFFFF" />}
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
            <Card.Title>Solar Panel 4</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_420788457.jpeg")}
            />
                  <Text style={{ marginBottom: 10 }}>
              Solar Panel 1 
              Description of the product
            </Text>
            <Text style={{ marginBottom: 10 }}>KSh 45,000.00</Text>
            <Button
              icon={<Icon name="cart-outline" type="ionicon" color="#FFFFFF" />}
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
            <Card.Title>Solar Panel 5</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_481635244.jpeg")}
            />
              <Text style={{ marginBottom: 10 }}>
              Solar Panel 5 
              Description of the product
            </Text>
            <Text style={{ marginBottom: 10 }}>KSh 85,000.00</Text>
            <Button
              icon={<Icon name="cart-outline" type="ionicon" color="#FFFFFF" />}
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
            <Card.Title>Solar Panel 6</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={require("../assets/img/AdobeStock_481954878.jpeg")}
            />
                 <Text style={{ marginBottom: 10 }}>
              Solar Panel 6
              Description of the product
            </Text>
            <Text style={{ marginBottom: 10 }}>KSh 75,000.00</Text>
            <Button
              icon={<Icon name="cart-outline" type="ionicon" color="#FFFFFF" />}
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
