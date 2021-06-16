import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from "react-native";
import _ from 'lodash'
import Header from "../components/Header";
import { TextInput } from 'react-native'

class LoginScreen extends React.Component {

	state = {
		name: '',
		surname: '',
		address: ''
	}
	handleName = (text) => {
		this.setState({ name: text })
	}
	handleSurname = (text) => {
		this.setState({ surname: text })
	}
	handleAddress = (text) => {
		this.setState({ address: text })
	}
	login = (name, surname, address) => {
		ToastAndroid.show('name: ' + name + '  ' + 'surname: ' + surname + '  ' + 'address: ' + address, ToastAndroid.SHORT, ToastAndroid.LENGTH_LONG)
	}
	render() {
		let { navigation } = this.props;
		return (
			<View style={styles.wrapper}>
				<Header navigation={navigation} title={"Login"} />
				<View style={styles.container}>
					<TextInput style={styles.input}
						underlineColorAndroid="transparent"
						placeholder="Name"
						placeholderTextColor="black"
						autoCapitalize="none"
						onChangeText={this.handleName} />

					<TextInput style={styles.input}
						underlineColorAndroid="transparent"
						placeholder="Surname"
						placeholderTextColor="black"
						autoCapitalize="none"
						onChangeText={this.handleSurname} />

					<TextInput style={styles.input}
						underlineColorAndroid="transparent"
						placeholder="Address"
						placeholderTextColor="black"
						autoCapitalize="none"
						onChangeText={this.handleAddress} />

					<TouchableOpacity
						style={styles.loginButton}
						onPress={
							() => this.login(this.state.name, this.state.surname, this.state.address)
						}>
						<Text style={styles.loginButtonText}>LOGIN</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 0.92,
		backgroundColor: "white"
	},
	input: {
		margin: 15,
		height: 40,
		borderColor: 'black',
		borderWidth: 1
	},
	loginButton: {
		backgroundColor: '#1273DE',
		padding: 10,
		margin: 15,
		height: 40,
	},
	loginButtonText: {
		color: 'white',
		textAlign: 'center'
	},
	wrapper: {
		flex: 1,
	},
	safeArea: {
		backgroundColor: "white"
	}
})