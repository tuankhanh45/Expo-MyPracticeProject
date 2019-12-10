import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, } from "react-native";
import { Badge, Slider, CheckBox, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";

import { UPDATE_TIME_REFRESH, UPDATE_NOTIFY_SETTINGS } from "../../redux/actions/notifyAction"
class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, backgroundColor: "black", borderBottomColor: "#000", borderBottomWidth: 0.2,  alignItems: "center",paddingTop:20 }}>
          <Text style={{ flex: 8, textAlign: "center", fontSize: 30, color: "white" }}> Settings </Text>

          <TouchableOpacity>
            <View style={{ height: 30, width: 30 }}>
              <Image source={require("../../assets/images/noti_icon.png")}
                style={{ width: 30, height: 30, borderRadius: 30 }}>
              </Image>
              <Badge
                value={5}
                containerStyle={{ position: "absolute", top: -2, right: -2 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: "#404040", flex: 1 }}>
        <View style={{ padding: 10, margin: 10, backgroundColor: "#2c2c2c", borderRadius: 10 }}>
          <Text style={{ color: "#fff", fontSize: 18, textTransform: "uppercase", textAlign: "center" }}> Thiết lập chung </Text>

          <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18, marginRight: 20 }}>Xóa bộ nhớ</Text>
            <View style={{ flex: 6, justifyContent: "center", alignItems: "center" }}>
              <Button
                title="Xóa bộ nhớ" />
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18, marginRight: 20, flex: 4 }}>Cập nhật {this.props.setting.refreshTime} s</Text>
            <View style={{ flex: 6 }}>
              <Slider
                value={this.props.setting.refreshTime}
                minimumValue={10}
                maximumValue={60}
                step={5}
                thumbTintColor={"orange"}
                onValueChange={(val)=> this.props.UPDATE_TIME_REFRESH(val)}
              />
            </View>

          </View>
        </View>

        <View style={{ padding: 10, margin: 10, backgroundColor: "#2c2c2c", borderRadius: 10 }}>
          <Text style={{ color: "#fff", fontSize: 18, textTransform: "uppercase", textAlign: "center" }}> Thiết lập thông báo </Text>

          <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18, marginRight: 20, flex: 3 }}>Gửi tin nhắn</Text>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <CheckBox
                checked={this.props.setting.notifyMessage}
                checkedColor={"green"}
                onPress={()=> this.props.UPDATE_NOTIFY_SETTINGS(0)}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18, marginRight: 20, flex: 3 }}>Âm thanh</Text>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <CheckBox
                checked={this.props.setting.notifySound}
                checkedColor={"green"}
                onPress={()=> this.props.UPDATE_NOTIFY_SETTINGS(1)}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18, marginRight: 20, flex: 3 }}>Rung</Text>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <CheckBox
                checked={this.props.setting.notifyVibrate}
                checkedColor={"green"}
                onPress={()=> this.props.UPDATE_NOTIFY_SETTINGS(2)}
              />
            </View>
          </View>

        </View>
      </View>
    )

  }
}

export default connect(state => ({
  setting: state.setting,
}),
  { UPDATE_TIME_REFRESH, UPDATE_NOTIFY_SETTINGS },
)(SettingsScreen)

