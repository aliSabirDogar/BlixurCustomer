import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
const RootStack = createStackNavigator();
// Navigator Screens
import FlashMessage from 'react-native-flash-message';
import Navigation from './Src/Navigations/Stack.js';
import {StatusBar, View, Platform} from 'react-native';
const App = () => {
  return (
    <>
      <NativeBaseProvider>
        {/* <StatusBar
          backgroundColor={'#000000'}
          barStyle={'light-content'}
          // translucent
        /> */}
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStack.Navigator headerMode="none">
              <RootStack.Screen name="Navigation" component={Navigation} />
            </RootStack.Navigator>
          </NavigationContainer>
          <FlashMessage position="top" />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
};

export default App;

// import React, {Component} from 'react';
// import {View, StyleSheet} from 'react-native';
// import Video from 'react-native-video';
// function App() {
//   return (
//     <View style={{flex: 1}}>
//       <Video
//         source={require('./Src/assets/video/1.mp4')} // Can be a URL or a local file.
//         // ref={ref => {
//         //   this.player = ref;
//         // }} // Store reference
//         // onBuffer={this.onBuffer} // Callback when remote video is buffering
//         // onError={this.videoError} // Callback when video cannot be loaded
//         style={StyleSheet.absoluteFillObject}
//         resizeMode="cover"
//         repeat={true}
//       />
//     </View>
//   );
// }

// export default App;
