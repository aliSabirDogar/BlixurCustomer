import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SmallButton from '../../../../../../../../components/SmallBtn/SmallBtn';
import Theme from '../../../../../../../../Utils/Theme';
// import ServiceDoneLogo from '../../../../../../../../assets/svgs/serviceDoneLogo';
export default class ProceedDone extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <AntDesign
            name="arrowleft"
            size={20}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <Image
          style={{width: wp('60%'), height: hp('30%'), resizeMode: 'contain'}}
          source={require('../../../../../../../../assets/images/doneService.png')}
        />
        {/* <ServiceDoneLogo /> */}
        <Text style={styles.txt}>Your Service has been booked</Text>
        <SmallButton
          onPress={() => this.props.navigation.navigate('DashBoard')}
          txt={'Continue Shopping'}
          width={wp('50%')}
          bgColor={Theme.primary}
          color={Theme.secondary}
          height={hp('5%')}
          radius={20}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: wp('5%'),
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 0,
  },
  txt: {
    fontFamily: Theme.gilRoySemiBold,
    fontSize: Theme.fontBoldHeadings,
  },
});
