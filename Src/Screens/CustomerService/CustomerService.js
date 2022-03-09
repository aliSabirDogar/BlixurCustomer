import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Theme from '../../Utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Logo from '../../assets/svgs/logo';
import {fontFamily} from 'styled-system';
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default class CustomerService extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Heqader */}
        <View style={styles.header}>
          <AntDesign
            name={'arrowleft'}
            color={Theme.secondary}
            size={Theme.fontBoldHeadings}
            onPress={() => this.props.navigation.goBack()}
          />
          <View style={styles.headingsView}>
            <Text style={styles.heading}>Welcome to</Text>
            <Text
              style={[
                styles.heading,
                {
                  fontSize: Theme.fontSubBoldHeadings,
                  fontFamily: Theme.gilRoyExtraBold,
                },
              ]}>
              Blixur Support
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Image
              style={{width: 100, height:100, borderRadius: 100}}
              source={require('../../assets/images/newLogo.jpeg')}
            />
          </View>
          <Text style={styles.heading}>How can we help you?</Text>
          <TouchableOpacity
            style={styles.letsTalkView}
            onPress={() => this.props.navigation.navigate('MessageService')}>
            <Text
              style={{color: Theme.primary, fontFamily: Theme.gilRoySemiBold}}>
              Let's talk
            </Text>
            <Entypo
              name={'mic'}
              color={Theme.primary}
              size={Theme.fontBoldHeadings}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Theme.primary,
    flex: 1,
  },
  header: {
    padding: 20,
  },
  heading: {
    color: Theme.secondary,
    fontSize: Theme.fontBoldHeadings,
  },
  headingsView: {
    marginTop: hp('5%'),
  },
  container: {
    flex: 1,
    // backgroundColor: Theme.secondary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logoView: {
    borderWidth: 0.2,
    borderColor: Theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 105,
    height: 105,
    borderRadius: 100,
  },
  letsTalkView: {
    width: wp('80%'),
    backgroundColor: Theme.secondary,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
});
