import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import _ from 'lodash'
import * as React from "react";

export default class Drawer extends React.Component {

    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <View style={styles.container}>
                    <Text style={styles.text}>PizzaOrder</Text>
                </View>
                <DrawerItemList {...this.props} />
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    text: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold'
    }
    
});