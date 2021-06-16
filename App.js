import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import OfferScreen from "./screens/OfferScreen";
import LoginScreen from "./screens/LoginScreen";
import DrawerC from "./components/Drawer";

const Drawer = createDrawerNavigator();

function MyDrawer() {

    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerC {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
            <Drawer.Screen name="Offer" component={OfferScreen} options={{ title: "Offer" }} />
            <Drawer.Screen name="Order" component={OrderScreen} options={{ title: "Order" }} />
            <Drawer.Screen name="Login" component={LoginScreen} options={{ title: "Login" }} />
        </Drawer.Navigator>
    );
}

export default class App extends React.Component {

    render() {
        return (
            <NavigationContainer>
                <MyDrawer />
            </NavigationContainer>
        );
    }
};

