import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import _ from 'lodash'
import Header from "../components/Header";

class HomeScreen extends React.Component {


    render() {
        let { navigation } = this.props;
        return (
            <View style={styles.wrapper}>
                <Header navigation={navigation} title={"Home"} />
                <SafeAreaView style={styles.container}>
                    <View>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 50, textAlign: 'center' }}>PizzaOrder{'\n'}</Text>
                        <Image style={{ height: 400, width: 400, marginLeft: 5 }} source={require('../images/pizzaLogo.jpg')} resizeMode="contain" />
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 10 }}>{'\n'}  Krzysztof Piechnik</Text>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 10 }}>{'\n'}  Dawid Durołek</Text>
                    </View>
                </SafeAreaView>
            </View>)
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    safeArea: {
        backgroundColor: "white"
    },

    container: {
        flex: 0.92,
        backgroundColor: "white"
    }

});

export default HomeScreen;
