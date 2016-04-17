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

class Suggested extends React.Component {
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

  _linker(comp){
    this.props.navigator.push({
      component: comp
    });
  }

  _goBack(){
    this.props.navigator.pop();
  }

  componentDidMount() {
    // this._fetchApiData();
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
    const leftButtonConfig = <Text style={styles.whiteArrow} onPress={this._goBack.bind(this)} > {'<'} </Text>


      const rightButtonConfig = 
        <View>
          <TouchableHighlight
              activeOpacity={1}
              underlayColor='transparent'>
              <Image resizeMode="cover"
                source={require('./searchdark.png')} style={styles.search}/>
          </TouchableHighlight>
        </View>;
    const titleConfig =
      <View>
          <Text style={styles.navTitleText}>Suggested</Text>
      </View>;

    let loading = <View><Text>loading...</Text></View>;
    if (this.state.loaded) {
      loading = <View>
          <Text>it loaded dude</Text>
          </View>;}

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
        hidden={this.state.hidden}
        backgroundColor="blue"
        barStyle="default"/>
        <NavigationBar
            style={styles.bump}
            title={titleConfig}
            tintColor="transparent"
            leftButton={leftButtonConfig} 
            rightButton={rightButtonConfig}/>
        
        <View style={styles.pager}>
        <TouchableHighlight
                onPress={this._handlePress.bind(this)}
                underlayColor='transparent'
                activeOpacity={1}
                style={styles.quad}>
          <View style={styles.quad}>
              <Text style={styles.topText}>Bachlorette Party</Text>
              <Text style={styles.topText2}>You left the boys home and now the women get to play!</Text>
              <Text style={styles.topText3}>42 items</Text>
              <Image source={require('./fix1.jpg')} resizeMode="cover" style={styles.imgFix} />
          </View>
          </TouchableHighlight>
          <TouchableHighlight
                  onPress={this._handlePress.bind(this)}
                  underlayColor='transparent'
                  activeOpacity={1}
                  style={styles.quadb}>
          <View style={styles.quadb}>
              <Text style={styles.topText}>House Party</Text>
              <Text style={styles.topText2}>You left the boys home and now the women get to play!</Text>
              <Text style={styles.topText3}>42 items</Text>
              <Image source={require('./fix2.jpg')} resizeMode="cover" style={styles.imgFix} />
          </View>
          </TouchableHighlight>
          <TouchableHighlight
                  onPress={this._handlePress.bind(this)}
                  underlayColor='transparent'
                  activeOpacity={1}
                  style={styles.quadc}>
          <View style={styles.quadc}>
              <Text style={styles.topText}>Home Warming</Text>
              <Text style={styles.topText2}>You left the boys home and now the women get to play!</Text>
              <Text style={styles.topText3}>42 items</Text>
              <Image source={require('./fix3.jpeg')} resizeMode="cover" style={styles.imgFix} />
          </View>
          </TouchableHighlight>
          <TouchableHighlight
                  onPress={this._handlePress.bind(this)}
                  underlayColor='transparent'
                  activeOpacity={1}
                  style={styles.quadd}>
          <View style={styles.quadd}>
              <Text style={styles.topText}>Adult</Text>
              <Text style={styles.topText2}>You left the boys home and now the women get to play!</Text>
              <Text style={styles.topText3}>42 items</Text>
              <Image source={require('./fix4.jpg')} resizeMode="cover" style={styles.imgFix} />
          </View>
        </TouchableHighlight>

        </View>
      </View>
    )
  }
};



var styles = StyleSheet.create({
  topText: {
    flex: 3,
    position: "absolute",
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: "bold",
  },
  topText2: {
    position: "absolute",
    marginTop: 59,
    color: "#808080",
    width: 200,
    marginLeft: 30,
    fontFamily: 'Avenir',
  },
  topText3: {
    position: "absolute",
    marginTop: 110,
    color: "black",
    width: 200,
    fontSize: 11,
    marginLeft: 30,
    fontFamily: 'Avenir',
  },
  imgFix: {
    flex: 3,
    width:139,
    alignSelf: "flex-end",
  },
  quad: {
    flex:3,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  quadb: {
    flex:3,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  quadc: {
    flex:3,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  quadd: {
    flex:3,
  },
  pager: {
    flex: 1,
    backgroundColor: "rgb(248,248,248)",
    alignItems: "stretch",
  },
  whiteArrow: {
    color: "rgb(78,78,78)",
    fontSize: 22,
    marginTop: -5,
    marginLeft: 10,
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
export default Suggested;