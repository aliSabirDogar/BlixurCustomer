import React from 'react';
import {View, StyleSheet, Image, SafeAreaView, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashBoard from '../Screens/Dashboard/Dashboard';
import Theme from '../Utils/Theme';
import CustomDrawerContent from './customDrawer';
import ContactUs from '../Screens/Dashboard/ContactUs/ContactUs';
import Search from '../Screens/Dashboard/Search/Search';
import Cart from '../Screens/Dashboard/Cart/Cart';
import Profile from '../Screens/Dashboard/Profile/Profile';
import ShopBrands from '../Screens/Dashboard/ShopBrands/ShopBrands';
import EachProduct from '../Screens/Dashboard/ShopBrands/EachProduct/EachProduct';
import ProductDescription from '../Screens/Dashboard/ShopBrands/EachProduct/ProductDescription/ProductDescription';
import CheckOut from '../Screens/Dashboard/Cart/CheckOut/CheckOut';
import ViewProfile from '../Screens/Dashboard/ViewProfile/ViewProfile';
import Payment from '../Screens/Dashboard/Payment/Payment';
import PaymentDone from '../Screens/Dashboard/Payment/PaymentDone';
import Services from '../Screens/Dashboard/Services/Services';
import SubCategory from '../Screens/Dashboard/Services/SubCategory';
import BusinessProfiles from '../Screens/Dashboard/Services/BusinessProfiles.js/BusinessProfiles';
import EachProfile from '../Screens/Dashboard/Services/BusinessProfiles.js/EachProfile.js/EachProfile';
import OptionalDetails from '../Screens/Dashboard/Profile/OptionalDetails';
import Message from '../Screens/Dashboard/Services/BusinessProfiles.js/EachProfile.js/Messages/Messages';
import BookAppointment from '../Screens/Dashboard/Services/BusinessProfiles.js/EachProfile.js/BookAppointment/BookAppointment';
import BookingTiming from '../Screens/Dashboard/Services/BusinessProfiles.js/EachProfile.js/BookAppointment/BookingTiming/BookingTiming';
import ProceedDone from '../Screens/Dashboard/Services/BusinessProfiles.js/EachProfile.js/BookAppointment/BookingTiming/ProceedDone/ProceedDone';
import Products from '../Screens/Dashboard/Products/Products';
import EachProductDescription from '../Screens/Dashboard/Products/EachProductDesc';
import Raffles from '../Screens/Dashboard/Raffles/Raffles';
import Congrats from '../Screens/Dashboard/Raffles/Congrats';
import Notifications from '../Screens/Dashboard/Notifications/Notifications';

const drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        if (route.name === 'Homes') {
          return (
            <AntDesign
              // style={styles.iconStyle}
              name="home"
              size={15}
              color={color}
            />
          );
        }
        if (route.name === 'Contact Us') {
          return (
            <AntDesign
              // style={styles.iconStyle}
              name="phone"
              size={15}
              color={color}
            />
          );
        }
        if (route.name === 'Search') {
          return (
            <AntDesign
              // style={styles.iconStyle}
              name="search1"
              size={15}
              color={color}
            />
          );
        }
        if (route.name === 'Notifications') {
          return (
            <AntDesign
              // style={styles.iconStyle}
              name="notification"
              size={15}
              color={color}
            />
          );
        }
        if (route.name === 'Profile') {
          return (
            <IonIcon
              // style={styles.iconStyle}
              name="person"
              size={15}
              color={color}
            />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: Theme.primary,
      inactiveTintColor: Theme.placeHolderColor,
      keyboardHidesTabBar: true,

      // tabStyle:{borderRadius:20,backgroundColor:'red',height:60},

      style: {
        backgroundColor: Theme.secondary,
        // height: 40,
        elevation: 0,
        shadowOffset: {
          width: 0,
          height: 0, // for iOS
        },
        //   width: '95%',
        //   alignSelf: 'center',
        //   bottom: 5,
        //   borderRadius: 20,
        //   height: Platform.OS == 'ios' ? 70 : 70,
        //   paddingTop: Platform.OS == 'ios' ? 20 : 0,
      },
      //   labelStyle: {fontWeight: 'bold', top: Platform.OS == 'ios' ? 20 : 0},
    }}>
    <Tab.Screen
      name="Homes"
      component={NesteedStack}
      options={{tabBarLabel: 'Home'}}
    />
    <Tab.Screen name="Contact Us" component={ContactUs} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);

// export default BottomTab;
const drawerSc = () => {
  return (
    <drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="HomeNew"
      drawerStyle={{borderTopEndRadius: 20, borderBottomEndRadius: 20}}>
      <drawer.Screen name="HomeNew" component={BottomTab} />
      {/* <drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </drawer.Navigator>
  );
};
export default drawerSc;
const NesteedStack = () => {
  return (
    <Stack.Navigator initialRouteName={'DashBoard'} headerMode="none">
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="ShopBrands" component={ShopBrands} />
      <Stack.Screen name="EachProduct" component={EachProduct} />
      <Stack.Screen name="ProductDesc" component={ProductDescription} />
      <Stack.Screen name="EachProductDesc" component={EachProductDescription} />
      <Stack.Screen name="Raffles" component={Raffles} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CheckOut" component={CheckOut} />

      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentDone" component={PaymentDone} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="SubCategory" component={SubCategory} />
      <Stack.Screen name="BusinessProfiles" component={BusinessProfiles} />
      <Stack.Screen name="EachProfile" component={EachProfile} />
      <Stack.Screen name="Messages" component={Message} />
      <Stack.Screen name="BookAppointment" component={BookAppointment} />
      <Stack.Screen name="BookTiming" component={BookingTiming} />
      <Stack.Screen name="ProceedDone" component={ProceedDone} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Congrats" component={Congrats} />
      {/* <Stack.Screen name="OptionalDetails" component={OptionalDetails} /> */}
      {/* <Stack.Screen name="EachProfile" component={EachProfile} /> */}
      {/* <Stack.Screen name="YourProducts" component={YourProducts} />
      <Stack.Screen name="EachProduct" component={EachProduct} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="AccountInfoPro" component={AccountInfo} />
      <Stack.Screen name="PeronalBalancePro" component={PersonalBalance} />
      <Stack.Screen name="PaymentDonePro" component={PaymentDone} />
      <Stack.Screen name="DialBalancePro" component={DialBalance} /> */}
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={'ProfileStack'} headerMode="none">
      <Tab.Screen name="ProfileStack" component={Profile} />
      <Stack.Screen name="OptionalDetails" component={OptionalDetails} />
      {/* <Stack.Screen name="YourProducts" component={YourProducts} />
      <Stack.Screen name="EachProduct" component={EachProduct} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="AccountInfoPro" component={AccountInfo} />
      <Stack.Screen name="PeronalBalancePro" component={PersonalBalance} />
      <Stack.Screen name="PaymentDonePro" component={PaymentDone} />
      <Stack.Screen name="DialBalancePro" component={DialBalance} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  mainViewOfEachTab: {
    // backgroundColor: color,
    height: 40,
    width: 40,
    borderRadius: 10,
    // alignItems:'center',
    // justifyContent:'center'
  },
  viewOfOpacity: {
    opacity: 0.1,
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  iconStyle: {position: 'absolute', alignSelf: 'center', top: 7},
  lableStyle: {bottom: 5, color: '#4A4A4A', fontWeight: 'bold'},
});
