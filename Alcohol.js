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
import Alcohol2 from './Alcohol2';

class Alcohol extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      hidden: false,
      products: [],
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
    this._fetchApiData();
  }

  _fetchApiData(){
    // YOU DONT HANDLE FAILURE OR LACK OF SERVICE !!!!!!!!!!
    fetch('https://delivery.com/api/data/search?search_type=alcohol&limit=10&address=1006+Avenue+of+the+Americas,10018&order_time=ASAP&order_type=delivery&client_id=brewhacks2016&section=beer', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      var newState = {};
      newState["loaded"] = true;
      let x = JSON.parse(res._bodyInit).data;
      let keys = Object.keys(x.products);
      let productArray = [];
      for(let i = 0;i < keys.length; i++){
        productArray.push(x.products[keys[i]]);
      }

      for(var y = 0; y < productArray.length; y++){
        console.log(productArray[y].price,productArray[y].name)
      }
      return this.setState(newState);
    })
  }

  _handlePress(){
    alert("clicked");
  }
  render() {
    let Content = <View><Image style={styles.loader} resizeMode="cover" source={require('./loading.gif')} /><Text style={styles.ltext}>loading...</Text></View>;
    if (this.state.loaded){
      Content = 
      <TouchableHighlight 
      style={styles.full}
      onPress={this._linker.bind(this, Alcohol2)}
      underlayColor='transparent'>
          <Image style={styles.full} resizeMode="stretch" source={require('./p1.png')}>
          </Image>
      </TouchableHighlight>
    }

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
          {Content}
        </View>
      </View>
    )
  }
};



var styles = StyleSheet.create({
  quad: {
    flex:3,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "stretch",
  },
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
export default Alcohol;