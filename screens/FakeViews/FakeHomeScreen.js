import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { PlaceholderContainer, Placeholder } from 'react-native-loading-placeholder';
import { LinearGradient } from 'expo-linear-gradient'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default class FakeHomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.loadingComponent = new Promise(resolve => {
            setTimeout(() => {
                resolve(

                    <View
                        style={{ alignItems: 'center', marginTop: screenHeight / 5 }}>
                        <Image style={{ width: 200, height: 200 }}
                            source={require('../../assets/images/bietthu.jpg')}></Image>
                        <Text style={{ fontSize: 16, color: 'green', marginTop: 20, fontWeight: 'bold' }}>Oops! Something went wrong</Text>
                    </View>

                );
            }, 10000);
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <PlaceholderData loader={this.loadingComponent} />
            </View>
        );
    }
}

const Gradient = () => {
    return (
        <LinearGradient
            colors={['#eeeeee', '#dddddd', '#eeeeee']}
            start={{ x: 1.0, y: 0.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={{
                flex: 1,
                width: 120
            }}
        />
    );
};
const PlaceholderData = ({ loader }) => {
    return (
        <PlaceholderContainer
            style={styles.placeholderContainer}
            duration={1000}
            animatedComponent={<Gradient />}
            delay={1000}
            loader={loader}
        >
            <View style={{ flexDirection: 'column' }}>
                <Placeholder style={[styles.placeholder, { width: screenWidth, height: screenWidth * 9 / 16 }]} />
                <Placeholder style={[styles.placeholder, { width: '90%' }]} />
                <Placeholder style={[styles.placeholder, { width: '80%' }]} />
                <Placeholder style={[styles.placeholder, { width: '70%' }]} />

            </View>
            <View style={{ marginTop: 10, flexDirection: 'column' }}>
                <Placeholder style={[styles.placeholder, { width: screenWidth, height: screenWidth * 9 / 16 }]} />
                <Placeholder style={[styles.placeholder, { width: '90%' }]} />
                <Placeholder style={[styles.placeholder, { width: '80%' }]} />
                <Placeholder style={[styles.placeholder, { width: '70%' }]} />

            </View>



        </PlaceholderContainer>
    );
};
const styles = StyleSheet.create({
    placeholderContainer: {
        width: '100%',
        backgroundColor: '#fff',
        height: screenHeight,

    },
    placeholder: {
        height: 30,
        marginTop: 6,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    row: {
        flexDirection: 'row',
        width: '100%'
    }
});