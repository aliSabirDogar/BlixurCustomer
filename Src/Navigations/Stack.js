import React, {Component} from 'react';
import {View, StatusBar, SafeAreaView, LogBox, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens Imported
// import Home from '../Screens/Home/Home';
import Theme from '../Utils/Theme';
// import IntroSlider from '../Screens/IntroSlider/IntroSlider';
// import SignUp from '../Screens/SignUp/SignUp';

import BottomTab from './BottomTabs';

import Splash from '../Screens/Splash/Splash';
import AfterSplash from '../Screens/Splash/AfterSplash/AfterSplash';
import SignIn from '../Screens/AuthScreens/SignIn';
import SignUp from '../Screens/AuthScreens/SignUp';
import EachProduct from '../Screens/Dashboard/ShopBrands/EachProduct/EachProduct';
import CustomerService from '../Screens/CustomerService/CustomerService';
import MessageService from '../Screens/CustomerService/Message';
import Services from '../Screens/Dashboard/Services/Services';
import ViewProfile from '../Screens/Dashboard/ViewProfile/ViewProfile';
import Refund from '../Screens/Dashboard/Refund/Refund';
import Detail from '../Screens/Dashboard/Refund/Detail';
import RefundLabel from '../Screens/Dashboard/Refund/RefundLabel';
import RefundRequested from '../Screens/Dashboard/Refund/RefundRequested';

const Stack = createStackNavigator();
class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
  }
  render() {
    return (
      <>
        {Platform.OS === 'ios' && (
          <View
            style={{
              width: '100%',
              height: 100, // For all devices, even X, XS Max
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: '#000000',
            }}
          />
        )}

        <SafeAreaView style={{flex: 1, backgroundColor: '#000000'}}>
          <StatusBar barStyle="light-content" />
          {/* <View>
            {Platform.OS === 'ios' ? (
              <StatusBar
                barStyle="dark-content"
                backgroundColor={Theme.primary}
              />
            ) : (
              <StatusBar
                barStyle="dark-content"
                backgroundColor={Theme.primary}
              />
            )}
          </View> */}

          <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Home" component={BottomTab} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="AfterSplash" component={AfterSplash} />
            <Stack.Screen name="CustomerService" component={CustomerService} />
            <Stack.Screen name="MessageService" component={MessageService} />
            <Stack.Screen name="OuterServices" component={Services} />
            <Stack.Screen name="ViewProfile" component={ViewProfile} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Refund" component={Refund} />
            <Stack.Screen name="Details" component={Detail} />
            <Stack.Screen name="RefundLabel" component={RefundLabel} />
            <Stack.Screen name="RefundRequested" component={RefundRequested} />
          </Stack.Navigator>
        </SafeAreaView>
      </>
    );
  }
}

export default Navigation;
