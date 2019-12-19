import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import PropTypes from "prop-types";
import { ScrollView, Text, View, Image, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { Badge, Slider, CheckBox, Button, Icon, Avatar } from "react-native-elements";
import { DrawerActions } from "react-navigation-drawer"

class DrawerScreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    gotoScreen(screen) {
        // Alert.alert(`go to the`, screen)
        this.props.navigation.navigate(screen)
    }
    render() {
        return (
            <View style={{ backgroundColor: "#000", flex: 1, paddingTop: 20 }}>
                <ScrollView>
                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: "gray" }}>
                        <ImageBackground
                            source={require("../../assets/images/dark.jpg")}
                            style={{ width: '100%', height: 200, padding: 20 }}>

                            <Avatar rounded source={require("../../assets/images/my_avatar.png")} size="large" />
                            <Text style={{ marginTop: 30, fontSize: 20, color: "#fff" }}>Tuan Khanh Tran</Text>
                            <Text style={{ marginTop: 10, fontSize: 18, color: "#fff" }}>Tuankhanhtran45@gmail.com</Text>
                        </ImageBackground>
                    </View>


                    <TouchableOpacity
                        style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
                        onPress={() => this.gotoScreen("Lottery")}>
                        <Icon name='heartbeat' type='font-awesome' size={26} color="#fff" ></Icon>
                        <Text style={{ color: "#fff", fontSize: 14, marginLeft: 40 }}>Lottery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
                        onPress={() => this.gotoScreen("Soccer")}>
                        <Icon name='adjust' type='font-awesome' size={26} color="#fff" ></Icon>
                        <Text style={{ color: "#fff", fontSize: 14, marginLeft: 40 }}>Mixed</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
                        onPress={() => this.gotoScreen("Settings")}>
                        <Icon name='cogs' type='font-awesome' size={26} color="#fff" ></Icon>
                        <Text style={{ color: "#fff", fontSize: 14, marginLeft: 40 }}>Setting</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}

DrawerScreen.propTypes = {
    navigation: PropTypes.object
};

export default DrawerScreen;