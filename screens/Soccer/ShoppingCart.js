import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native"
const Size = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View >
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>Cart subtotal </Text>
                    <Text style={{ fontSize: 20, color: "#fff" }}>(4 items):</Text>
                    <Text style={{ fontSize: 20, color: "orange" }}> $ 736 </Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: "blue", padding: 10, borderRadius: 5, marginTop: 15 }}>
                    <Text style={{ fontSize: 22, color: "#fff", textAlign: "center", textTransform: "uppercase" }}> proceed to checkout </Text>
                </TouchableOpacity>

                <View style={{ backgroundColor: "#fff", borderRadius: 5, marginTop: 55, padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={{ height: 100, width: 120, marginTop: -20, borderRadius: 5 }}
                            source={require("../../assets/images/bietthu.jpg")}>
                        </Image>

                        <View style={{ flex: 1, marginLeft: 20, justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 18 }}>Nike Sportswear WindRunner</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, color: "green" }}> In Stock</Text>
                                <Text style={{ fontSize: 16, color: "blue" }}> $ 180</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: "#058c6f", borderRadius: 5, justifyContent: "center", alignItems: "center", paddingBottom: 5, paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>01   >   </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: "#058c6f", borderRadius: 5, justifyContent: "center", alignItems: "center", paddingBottom: 5, paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Delete</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ backgroundColor: "#058c6f", borderRadius: 5, justifyContent: "center", alignItems: "center", paddingBottom: 5, paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Save For Later</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}