import React, { Component } from "react";
import { View, Text, TouchableHighlight, Image, Dimensions, FlatList, Modal, TouchableOpacity } from "react-native";
import { Badge, Slider, CheckBox, Button, Icon } from "react-native-elements";

import ShoppingCart from "./ShoppingCart"
const Size = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width
}
export default class SoccerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      datalist: [
        {
          name: "list1"
        },
        {
          name: "list2"
        },
        {
          name: "list3"
        },
        {
          name: "list3"
        },
        {
          name: "list3"
        },
        {
          name: "list3"
        },
        {
          name: "list3"
        },
        {
          name: "list3"
        },
      ],
      page: 1,
      error: null,
      refreshing: false,
      modalVisible: false,
    }
  }


  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View
          style={{ flexDirection: "row", paddingLeft: 10, backgroundColor: "black", borderBottomColor: "gray", borderBottomWidth: 0.2, paddingTop: 20 }}>
          <Text style={{ flex: 8, textAlign: "center", fontSize: 30, color: "white" }}>Football Match </Text>
        </View>
      )
    }
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  makeRemoteRequest = () => {
    const { page } = this.state;
    const url = ``;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.data.docs : [...this.state.data, ...res.data.docs],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Tìm kiếm" lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };


  render() {
    return (
      <View
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
      >
        <Text style={{ fontWeight: "700", textAlign: "center", justifyContent: "center" }}>List view horizontal</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={this.state.datalist}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data) =>
            <View style={{ height: 40, width: 100, borderColor: "gray", borderWidth: 1, margin: 5, alignItems: "center", justifyContent: "center" }}>
              <Text>{data.item.name}</Text>
            </View>
          }
        />
        <View style={{ marginTop: 22, alignItems: "center", justifyContent: "center" }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}>

            <View
              style={{ width: Size.width, height: Size.height, backgroundColor: "#000", padding: 20 }}>

              <View style={{ flexDirection: "row", height: 40, borderBottomColor: "gray", borderBottomWidth: 0.5, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Image
                    source={require("../../assets/images/icon-back-white.png")}
                    style={{ height: 25, width: 25 }}
                  />
                </TouchableOpacity>

                <Text style={{ color: "#fff", marginLeft: 40, fontSize: 18 }}>Shopping Cart Modal</Text>
              </View>

              <ShoppingCart style={{ marginTop: 10 }} />
            </View>
          </Modal>

          <TouchableHighlight
            style={{ width: 100, height: 40, backgroundColor: "black", borderRadius: 5, alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={{ color: "white" }}>Show Modal</Text>
          </TouchableHighlight>
        </View>

        {/* go to new screen */}
        <Button
          buttonStyle={{ marginTop: 20 }}
          title="Go to shopping cart screen"
          onPress={() => this.props.navigation.navigate("Shopping", data = { back: true, title: "go to from soccer screen to shopping screen" })}
        />

        
      </View>
    );
  }
}
