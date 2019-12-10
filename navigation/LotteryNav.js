import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from "react-native";
export default class LotteryNav extends Component {
    constructor(props) {
        super(props);

    };
    
    render() {
        return (
            <View 
            style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 20,backgroundColor:'black',borderBottomColor: 'gray',borderBottomWidth: 0.2, }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
                    <Image
                        style={{ height: 30, width: 30, }}
                        source={require('../assets/images/area-icon.png')}
                        tintColor='white'
                    />
                </TouchableOpacity>
                <Text style={{ flex: 8, textAlign: "center", fontSize: 30, color:'white' }}>Kết quả xổ số</Text>

            </View>
        )
    }
}