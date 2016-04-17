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
import G1 from './G1';


class G2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      hidden: false,
    }
  }

  _handleChange(x, event) {
    var newState = {};
    newState[x] = event.nativeEvent.text;
    this.setState(newState);
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

  componentDidMount() {
    // this._fetchApiData();
  }
  render() {
    const leftButtonConfig = 
      <View>
        <TouchableHighlight
            activeOpacity={1}
            underlayColor='transparent'>
            <Image resizeMode="cover"
              source={require('./dashes.png')} style={styles.burger}/>
        </TouchableHighlight>
      </View>;

    const titleConfig =
      <View>
          <Text style={styles.navTitleText}>Share</Text>
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
        barStyle="default"/>
        <View style={styles.contain}>
          <NavigationBar
            style={styles.bump}
            title={titleConfig}
            tintColor="white"
            leftButton={leftButtonConfig} />
            <Image style={styles.full} resizeMode="stretch" source={require('./g2.png')}>

            </Image>
        </View>
      </DrawerLayout>
    )
  }
};



var styles = StyleSheet.create({
  full: {
    width: null,
    height: null,
    flex: 1,
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
    color: "#333",
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
export default G2;