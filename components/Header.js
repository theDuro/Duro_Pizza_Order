import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';
import * as React from "react";

class Header extends React.Component {

    render() {
        let { navigation, title } = this.props;
        return (
            <>
                <View style={styles.header}>
                    <StatusBar style="auto" />

                    <Button style={styles.headerButton} onPress={() => navigation.toggleDrawer()} />
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 0.08,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },

    headerButton: {
        flex: 1,
        backgroundColor: "green"
    },

    headerText: {
        flex: 1,
        textAlign: "center",
        fontFamily: "Roboto_400Regular",
        fontWeight: "bold",
    }

});

export default Header;