import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, } from 'react-native';
import { Badge, Icon, withBadge } from 'react-native-elements'

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, backgroundColor: "black", borderBottomColor: "gray", borderBottomWidth: 0.2, marginTop: 20,alignItems:"center" }}>
          <Text style={{ flex: 8, textAlign: "center", fontSize: 30, color: "white" }}> Settings </Text>

          <TouchableOpacity>
            <View style={{ height: 30, width: 30 }}>
              <Image source={require("../../assets/images/noti_icon.png")}
                style={{ width: 30, height: 30, borderRadius: 30 }}>
              </Image>
              <Badge
                value={5}
                containerStyle={{ position: 'absolute', top: -2, right: -2 }}
              />

            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={{}}>
      </View>
    )

  }
}

