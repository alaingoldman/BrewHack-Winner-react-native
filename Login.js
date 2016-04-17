'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} = React;

import Register from  './Register';
import ddpClient from './ddpClient';
import Accounts from  './accounts';
import NavigationBar from 'react-native-navbar'; 
import Create from './Create';


class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: 'alain.goldman@gmail.com',
			password: 'red123',
			alert: "",
			loaded: true,
		}
	}

	componentWillUnmount() {
	  ddpClient.close();
	}

	_handlePress(){
		ddpClient.initialize()
		  .then((res) => {
		  	return Accounts.signIn(
		  		this.state.email.toLowerCase(), 
		  		this.state.password );
		  })
		  .then((res) => {
		  	this.props.navigator.immediatelyResetRouteStack([{component: Create}]);
		  })
		  .catch((err) => {
		    var newState = {};
		    newState["alert"] = err.reason;
		    return this.setState(newState);
		  })
	}

	_handleChange(x, event) {
		var newState = {};
		newState[x] = event.nativeEvent.text;
		this.setState(newState);
	}

	_linker(comp){
		this.props.navigator.push({
			component: comp
		});
	}

	render() {
		const titleConfig =
			<View>
		      <Text style={styles.navTitleText}></Text>
		  	</View>;

		return(
			<Image source={require('./sweater.png')} style={styles.container}>
				<NavigationBar
				  title={titleConfig}
				  tintColor="transparent"/>
				<View style={styles.wrap}>
			  	    <Image 
			  	      resizeMode="cover"
			  	      source={require('./logogreen.png')} 
			  	      style={styles.logo}/>
			  		<View style={styles.introTextWrap}>
			  		<Text style={styles.logoTxt}>
			  			BYOP
			  		</Text>
			  		</View>
			  	  	<Text style={styles.alert}>
			  	  	 	{this.state.alert}
			  	  	</Text>
				  	<View style={styles.boxer}>
				  		<Text style={styles.inputTitle}>E-mail</Text>
					    <TextInput 
						    style={styles.input} 
						    keyboardType='email-address'
						    value={this.state.email}
						    onChange={this._handleChange.bind(this,"email")}
						    autoCorrect={false} />
					</View>
					<View style={styles.boxer}>
					    <Text style={styles.inputTitle}>Password</Text>
						<TextInput 
						    style={styles.input} 
						    onChange={this._handleChange.bind(this,"password")}
						    value={this.state.password}
						    secureTextEntry={true}/>
					</View>
					<TouchableHighlight
					    onPress={this._handlePress.bind(this)}
					    underlayColor='#50e3c2'
					    style={styles.butt}
					    activeOpacity={1}>
					  <Text style={styles.buttInner}>
					  	LOGIN
					  </Text>
					</TouchableHighlight>
					<View style={styles.bot}>
						<Text 
						  style={styles.link}
						  onPress={this._linker.bind(this, Register)}>
						   REGISTER
						</Text>
					</View>
				</View>
			</Image>

		)
	}
};



var styles = StyleSheet.create({
  logoTxt: {
  	color: "white",
  	fontWeight: "bold",
  	fontSize: 39,
  	marginTop: -35,
  },
  logo: {
  	alignSelf: "center",
  	width: 70,
  	height: 90,
  	marginLeft: -8,
  	marginTop: 25,
  },
  introText: {
  	color: "white",
  	fontSize: 11,
  },
  introTextWrap: {
  	marginTop: 40,
  	paddingBottom: 10,
  	alignItems: "center",
  },
  wrap: {
	flex: 1,
	alignSelf: "stretch",
	marginLeft: 20,
	marginRight: 20,
  },
  boxer: {
  	borderBottomWidth: 1,
  	borderColor: "white",
  	marginBottom: 16,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
  },	
  header: {
  	flex: 1,
  },
  alert:{
  	color: 'red',
  },
  input: {
  	height: 35, 
  	borderColor: 'gray', 
  	borderBottomWidth: 1, 
  	marginTop: 10,
  	color: "white",
  },
  inputTitle: {
  	color: "rgba(255,255,255,0.7)",
  	fontSize: 12,
  	height: 12,
  },
  butt: {
  	backgroundColor: "rgb(80,227,194)",
  	marginTop: 17,
  	height: 40,
  	justifyContent: 'center',
  	alignItems: "center",
  },
  buttInner: {
  	color: "black",
  	fontSize: 11,
  	justifyContent: 'center',
  },
  link: {
  	color: "white",
  	marginTop: 10,
  	alignSelf: "center",
  },
  bot: {
  	flex:1,
  	alignItems: "flex-end",
  	justifyContent: "flex-end",
  	paddingBottom: 20,

  }
});

module.exports = Login;