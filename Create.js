'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Image,
} = React;

import NavigationBar from 'react-native-navbar'; 
import DrawerLayout from 'react-native-drawer-layout';
import Settings from './Settings';
import MyParty from './MyParty';
import Brose from './Browse';
import Categories from './Categories';
import Suggested from './Suggested';

class Create extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false,
      title: "",
      venue: "",
      date: "",
      borderColorA: "#E9E9E9",
      borderColorB: "#E9E9E9",
      borderColorC: "#E9E9E9",
    }
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


  _handlePress(){
    // ddpClient.initialize()
    //   .then((res) => {
    //     return Accounts.signIn(
    //       this.state.email.toLowerCase(), 
    //       this.state.password );
    //   })
    //   .then((res) => {
    //     this.props.navigator.immediatelyResetRouteStack([{component: Create}]);
    //   })
    //   .catch((err) => {
    //     var newState = {};
    //     newState["alert"] = err.reason;
    //     return this.setState(newState);
    //   })
    this._linker(Suggested);
  }

  _openShelf(){
    var newState = {};
    newState["hidden"] = true;
    this.refs['DRAWER'].openDrawer();
    return this.setState(newState);
  }

  _closeIt(){
    var newState = {};
    newState["hidden"] = false;
    return this.setState(newState);
  }

  _linker(comp){
    this.props.navigator.push({
      component: comp
    });
  }

  _onFocus(letter) {
    var newState = {};
    if(letter == "A"){
      newState["borderColorA"] = "rgb(168,239,218)";
      newState["borderColorB"] = "#E9E9E9";
      newState["borderColorC"] = "#E9E9E9";
    }else if(letter == "B"){
      newState["borderColorA"] = "#E9E9E9";
      newState["borderColorC"] = "#E9E9E9";
      newState["borderColorB"] = "rgb(168,239,218)";
    }else if(letter == "C"){
      newState["borderColorA"] = "#E9E9E9";
      newState["borderColorB"] = "#E9E9E9";
      newState["borderColorC"] = "rgb(168,239,218)";
    }
    return this.setState(newState);}

  render() {
    const leftButtonConfig = 
      <View>
        <TouchableHighlight
            onPress={this._openShelf.bind(this)}
            activeOpacity={1}
            underlayColor='transparent'>
            <Image resizeMode="cover"
              source={require('./dasheswhite.png')} style={styles.burger}/>
        </TouchableHighlight>
      </View>;

    const titleConfig =
      <View>
          <Text style={styles.navTitleText}>Create Party</Text>
      </View>;

    const navigationView = (
        <Image source={require('./dash.png')} style={styles.container}>
          <View style={styles.siteWrap}>
            <Image 
              resizeMode="stretch"
              source={require('./logogreen.png')} 
              style={styles.logo}/>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, Create)}> Create </Text>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, MyParty)}> My Party </Text>
            <Text style={styles.sidebarLink}> Settings </Text>
            <Text style={styles.sidebarLink}> Logout </Text>
          </View>
        </Image>);

    return(
      <DrawerLayout 
        drawerWidth={275}
        ref={'DRAWER'}
        onDrawerClose={this._closeIt.bind(this)}
        drawerPosition={DrawerLayout.positions.Left}
        renderNavigationView={() => navigationView}>
        <StatusBar
        hidden={this.state.hidden}
        backgroundColor="blue"
        barStyle="light-content"/>
        <View style={styles.contain}>
        <Image source={require('./party.png')} resizeMode="cover" style={styles.topImage}>
        <NavigationBar
            style={styles.bump}
            title={titleConfig}
            tintColor="transparent"
            leftButton={leftButtonConfig} />
        </Image>
        <View style={styles.bump2}>
          <Text style={styles.infoText}>Tell us about your party</Text>
          <TextInput 
                style={styles.input} 
                onChange={this._handleChange.bind(this,"title")}
                onFocus={() => this._onFocus("A")}
                placeholder="title"
                selectionColor="green"
                style={{ 
                  height: 45, 
                  borderColor: this.state.borderColorA,
                  marginTop: 10,
                  color: "black",
                  borderWidth: 2,
                  marginLeft: 30,
                  marginRight: 30,
                  paddingLeft: 22,
                  paddingRight: 22,}}/>
          <TextInput 
                style={styles.input} 
                onChange={this._handleChange.bind(this,"venue")}
                onFocus={() => this._onFocus("B")}
                placeholder="venue"
                selectionColor="green"
                style={{ 
                  height: 45, 
                  borderColor: this.state.borderColorB,
                  marginTop: 10,
                  color: "black",
                  borderWidth: 2,
                  marginLeft: 30,
                  marginTop: 20,
                  marginRight: 30,
                  paddingLeft: 22,
                  paddingRight: 22,}}/>
          <TextInput 
                style={styles.input} 
                onChange={this._handleChange.bind(this,"date")}
                onFocus={() => this._onFocus("C")}
                placeholder="date"
                selectionColor="green"
                style={{ 
                  height: 45, 
                  borderColor: this.state.borderColorC,
                  marginTop: 10,
                  color: "black",
                  borderWidth: 2,
                  marginLeft: 30,
                  marginTop: 20,
                  marginRight: 30,
                  paddingLeft: 22,
                  paddingRight: 22,}}/>
          <TouchableHighlight
              onPress={this._linker.bind(this, Categories)}
              underlayColor='#50e3c2'
              style={styles.butt}
              activeOpacity={1}>
            <Text style={styles.buttInner}>
              MAKE CUSTOM
            </Text>
          </TouchableHighlight>
          <Text style={styles.crypt}> Or choose from our premade sugggested party list</Text>
          <TouchableHighlight
              onPress={this._linker.bind(this, Suggested)}
              underlayColor='#50e3c2'
              style={styles.butt2}
              activeOpacity={1}>
            <Text style={styles.buttInner}>
              SUGGESTED
            </Text>
          </TouchableHighlight>
        </View>
        </View>
      </DrawerLayout>
    )
  }
};



var styles = StyleSheet.create({
  crypt:{
    marginTop: 8,
    color: "#777",
    alignSelf: "center",
  },
  butt: {
    backgroundColor: "rgb(14,185,125)",
    marginTop: 22,
    marginLeft: 30,
    marginRight: 30,
    height: 45,
    justifyContent: 'center',
    alignItems: "center",
  },
  butt2: {
    backgroundColor: "rgb(14,185,125)",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 45,
    justifyContent: 'center',
    alignItems: "center",
  },
  buttInner: {
    color: "white",
    fontSize: 16,
    justifyContent: 'center',
  },
  infoText: {
    marginLeft: 30,
    fontSize: 16,
    color: "#777",
    fontFamily: 'Avenir',
  },
  bump2: {
    marginTop: 15,
    paddingLeft: 3,
  },
  topImage:{
    width: null,
    height: 240,
  },
  moveOver:{
    flex: 1,
    backgroundColor: "red",
  },
  bump:{
  },
  sidebarLink: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 32,
  },
  siteWrap: {
    flex: 1,
    marginLeft: 55,
    alignSelf: "flex-start",
  },
  logo: {
    width: 40,
    height: 50,
    marginTop: 90,
    marginBottom: 10,
  },
  burger: {
    marginLeft: 13,
    height: 20,
    width: 20,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
  },  
  navTitleText: {
    color: "white",
    fontSize: 18,
    marginBottom: 3.5,
    fontFamily: 'Avenir',
    marginLeft: -130,
  },
  contain: {
    backgroundColor: "white",
    flex: 1,
  }
});

export default Create;