'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Image,
} = React;

import NavigationBar from 'react-native-navbar'; 
import DrawerLayout from 'react-native-drawer-layout';
import Settings from './Settings';
import Create from './Create';
import Browse from './Browse';
import MyParty from './MyParty';
import ShareIt from './ShareIt';

class Alcohol2 extends React.Component {

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

  _goBack(){
    this.props.navigator.pop();
  }



  _handlePress(){
    alert("clicked");
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
  }
  render() {
    let Content = <Image style={styles.full} resizeMode="stretch" source={require('./p2.png')}>
    </Image>;


    const leftButtonConfig = <Text style={styles.whiteArrow} onPress={this._goBack.bind(this)} > {'<'} </Text>

    const rightButtonConfig = 
      <View>
        <TouchableHighlight
            onPress={this._linker.bind(this, ShareIt)}
            activeOpacity={1}
            underlayColor='transparent'>
            <Text> Next </Text>
        </TouchableHighlight>
      </View>;

    const titleConfig =
      <View>
          <Text style={styles.navTitleText}>Alcohol</Text>
      </View>;


    const navigationView = (
        <Image source={require('./dash.png')} style={styles.container}>
          <View style={styles.siteWrap}>
            <Image 
              resizeMode="stretch"
              source={require('./logoalt.png')} 
              style={styles.logo}/>
              <Text style={styles.sidebarLink} onPress={this._linker.bind(this, Create)}> Create </Text>
              <Text style={styles.sidebarLink} onPress={this._linker.bind(this, MyParty)}> My Party </Text>
              <Text style={styles.sidebarLink}> Settings </Text>
            <Text style={styles.sidebarLink}> Logout </Text>
          </View>
        </Image>);

    return(
      <View style={styles.contain}>
        <StatusBar
        backgroundColor="blue"
        barStyle="default"/>
        <NavigationBar
            style={styles.bump}
            title={titleConfig}
            tintColor="transparent"
            leftButton={leftButtonConfig} 
            rightButton={rightButtonConfig}/>
        
        <View style={styles.pager}>
          {Content}
        </View>
      </View>
    )
  }
};



var styles = StyleSheet.create({
  full: {
    width: null,
    height: null,
    flex: 1,
  },
  loader: {
    width: 290,
    height: 290,
    marginTop: 105,
    marginBottom: 15,
    backgroundColor: "red",
    alignSelf: "center",
    justifyContent: "center",
  },
  ltext:{
    color: "rgb(102,102,102)",
    alignSelf: "center",
    fontSize: 20,
    marginTop: -100,
    marginLeft: 20,
  },
  topText: {
    fontSize: 28,
    fontFamily: 'Avenir',
    fontWeight: "bold",
    color: "white",
  },
  midText: {
    fontSize: 14,
    fontFamily: 'Avenir',
    fontWeight: "bold",
    color: "#ddd",
  },
  shift: {
    // backgroundColor: "red",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 90,
    marginTop: 27,
    flex: 1,
    width:200,
    height:90,
    position: "absolute",
  },
  shift3: {
    backgroundColor: "red",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    width:200,
  },
  imgFix: {
    flex: 1,
    alignItems: "center", 
  },
  quad: {
    flex:3,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "stretch",
  },
  quadb: {
    flex:3,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "stretch",
  },
  quadc: {
    flex:3,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "stretch",
  },
  quadd: {
    flex:3,
    alignItems: "stretch",
  },
  pager: {
    flex: 1,
    alignItems: "stretch",
  },
  pager2: {
    flex: 1,
    backgroundColor: "rgb(248,248,248)",
    alignItems: "stretch",
  },
  whiteArrow: {
    color: "rgb(78,78,78)",
    fontSize: 22,
    marginTop: -5,
    marginLeft: 10,
    marginTop: 6,
  },
  moveOver:{
    flex: 1,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    backgroundColor: "red",
  },
  bump:{
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
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
    width: 30,
    height: 30,
    marginTop: 90,
    marginBottom: 15,
  },
  burger: {
    marginLeft: 13,
    height: 20,
    width: 20,
  },
  search:{
    height: 20,
    width: 20,
    marginRight: 10,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
  },  
  navTitleText: {
    color: "rgb(78,78,78)",
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
export default Alcohol2;