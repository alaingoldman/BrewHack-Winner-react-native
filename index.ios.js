'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
} = React;


import Login from './Login';
global.process = require("./process.polyfill");


function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class AppWrapper extends React.Component{

  componentWillUnmount() {
    ddpClient.close();
  }

  render(){
    const initialRoute = {
          component: Login
    }

    return(
      <View style={styles.container}>
      <Navigator 
        initialRoute={initialRoute}
        renderScene={renderScene}  />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

AppRegistry.registerComponent('andApp', () => AppWrapper);
