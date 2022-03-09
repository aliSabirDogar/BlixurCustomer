import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import Theme from '../../../Utils/Theme';
export default class Congrats extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Congrats</Text>
        <Text style={styles.subHeading}>
          You are added in the lucky draw, you will be notified soon
        </Text>
        <Image
          style={styles.img}
          source={require('../../../assets/images/congrats.png')}
        />
        <SmallButton
          onPress={() => this.props.navigation.navigate('DashBoard')}
          txt={'Continue Shopping'}
          width={wp('60%')}
          height={hp('5%')}
          bgColor={Theme.primary}
          radius={20}
          color={Theme.secondary}
        />
        <View style={styles.logoContiner}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/twitter.png')}
          />
          <Image
            style={styles.logo}
            source={require('../../../assets/images/instagram.png')}
          />
        </View>
        <Text
          style={
            styles.bottomHeading
          }>{`Be sure to follow BLIXUR on Instagram & Twitter to keep up with the latest prize updates and winners.`}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: wp('90%'),
    height: hp('50%'),
  },
  heading: {
    fontSize: Theme.fontSubBoldHeadings,
    fontFamily: Theme.gilRoyExtraBold,
  },
  subHeading: {
    width: wp('60%'),
    textAlign: 'center',
    fontFamily: Theme.gilRoyLight,
  },
  bottomHeading: {
    fontFamily: Theme.gilRoyRegular,
    textAlign: 'center',
    color: Theme.subSecondary,
    fontSize: Theme.fontSmall,
    width: wp('90%'),
  },
  logoContiner: {
    flexDirection: 'row',
    width: wp('40%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: hp('2%'),
  },
  logo: {
    width: wp('10%'),
    height: hp('5%'),
  },
});
