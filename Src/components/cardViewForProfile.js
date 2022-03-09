import React from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import Theme from '../Utils/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SmallButton from './SmallBtn/SmallBtn';

const cardViewForProfile = ({AnimatedView}) => {
  return (
    <Animated.View style={[styles.cardView, {opacity: AnimatedView}]}>
      <View style={styles.viewOfProfilePicAndName}>
        <View style={styles.profilePic}></View>
        <View style={{marginStart: '5%'}}>
          <Text style={{fontSize: Theme.fontBoldHeadings}}>Yammy</Text>
          <Text style={{fontSize: Theme.fontNormalBoldHeadings}}>
            Brand Name
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <SmallButton
          onPress={() =>
            this.props.navigation.navigate('Products', {
              profilesProduct: true,
              data: `Yammy's Product`,
            })
          }
          txt={'Shop'}
          width={wp('30%')}
          bgColor={Theme.primary}
          color={Theme.secondary}
          height={hp('3.5%')}
          elevation={10}
          radius={15}
        />
        <SmallButton
          onPress={() => this.props.navigation.navigate('Messages')}
          txt={'Message'}
          width={wp('30%')}
          bgColor={Theme.secondary}
          height={hp('3.5%')}
          elevation={10}
          radius={15}
        />
      </View>
    </Animated.View>
  );
};

export default cardViewForProfile;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: Theme.secondary,
    position: 'absolute',
    padding: wp('10%'),
    width: wp('85%'),
    // height: hp('20%'),
    bottom: hp('10%'),
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 999,
    elevation: 10,
    // opacity: 0.8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: wp('70%'),
    justifyContent: 'space-between',
  },
  profilePic: {
    width: wp('18%'),
    height: hp('10%'),
    backgroundColor: 'red',
    // position: 'absolute',
    marginStart: wp('8%'),
    borderRadius: 10,
    top: hp('-3%'),
  },
  viewOfProfilePicAndName: {
    position: 'absolute',
    width: wp('85%'),
    flexDirection: 'row',
  },
});
