import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Container, Drawer, Icon} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import MenuIcon from '../assets/svgs/menuIcon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../Utils/Theme';

const CustomDrawerContent = ({...props}) => {
  return (
    <DrawerContentScrollView style={{}} {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View
        style={{
          paddingStart: 20,
          paddingEnd: 20,
          paddingTop: 20,
          height: hp('20%'),
          backgroundColor: Theme.lightBackground,
          borderTopEndRadius: 20,
          top: 0,
        }}>
        <View style={{}}>
          <AntDesign
            name="menufold"
            onPress={() => props.navigation.closeDrawer()}
          />
        </View>
        <View style={styles.containerOfPicAndName}>
          <View style={styles.containerOfPic}>
            <Image
              style={styles.image}
              source={require('../assets/images/profilePic.jpg')}
            />
          </View>
          <Text style={styles.name}>Robin Bladimir</Text>
        </View>
      </View>
      <View
        style={{
          margin: '5%',
          flex: 1,
          // backgroundColor: 'yellow',
          height: hp('80%'),
        }}>
        <DrawerItem
          onPress={() => props.navigation.navigate('DashBoard')}
          label={'Home'}
          icon={({color, size}) => <AntDesign name="home" size={12} />}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('Profile')}
          label={'Your Orders'}
          icon={({color, size}) => <AntDesign name="inbox" size={12} />}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('Details')}
          label={'Refunds'}
          icon={({color, size}) => <AntDesign name="inbox" size={12} />}
        />

        {/* <DrawerItem
          onPress={() =>
            props.navigation.navigate('AccountInfoPro', {product: true})
          }
          label={'Account Information'}
          icon={({color, size}) => <IonIcon name="wallet" size={12} />}
        /> */}
        <View style={{position: 'absolute', bottom: hp('5%'), width: '100%'}}>
          <DrawerItem
            label={'Setting'}
            icon={({color, size}) => <AntDesign name="setting" size={10} />}
          />
          <DrawerItem
            onPress={() => props.navigation.navigate('CustomerService')}
            label={'Customer Service'}
            icon={({color, size}) => (
              <AntDesign name="customerservice" size={10} />
            )}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  containerOfPicAndName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('3%'),
    // backgroundColor: 'blue',
  },
  containerOfPic: {
    width: 50,
    height: 50,
    borderRadius: 27.5,
    elevation: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Theme.secondary,
  },
  image: {width: 48, height: 48, borderRadius: 24},
  name: {
    fontSize: Theme.fontNormal,
    fontFamily: 'Gilroy-ExtraBold',
    marginStart: '5%',
  },
});
