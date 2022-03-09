import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import Theme from '../../../Utils/Theme';
import Modal from 'react-native-modal';
import RefundRequestedSvg from '../../../assets/svgs/RefundRequested';
export class RefundRequested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <AntDesign name={'arrowleft'} />
        </View>
        <View style={{alignItems: 'center', flex: 1, marginTop: hp('10%')}}>
          <Text style={styles.heading}>Refund Requested</Text>
          <View style={styles.labelImg}>
            <Image
              style={{
                height: hp('30%'),
                width: wp('90%'),
                resizeMode: 'contain',
              }}
              source={require('../../../assets/images/RefundRequested.png')}
            />
          </View>
          <Text
            style={{
              // width: wp('50%'),
              textAlign: 'center',
              fontFamily: Theme.gilRoyLight,
              marginTop: hp('2%'),
            }}>{`Please make sure this item is return in this same form,it was received. Any item tempered with was not be subjected to a refund`}</Text>
          <SmallButton
            txt={'Continue'}
            width={wp('70%')}
            bgColor={Theme.primary}
            color={Theme.secondary}
            height={'5%'}
            radius={20}
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

export default RefundRequested;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: wp('5%'),
  },
  header: {
    alignSelf: 'flex-start',
  },
  heading: {
    fontFamily: Theme.gilRoyExtraBold,
    fontSize: Theme.fontBoldHeadings,
  },
  labelImg: {
    // height: hp('50%'),
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'grey',
    marginTop: hp('10%'),
    // marginBottom: hp('10%'),
  },
  mainContainerOfModal: {
    height: hp('40%'),
    width: wp('90%'),
    borderRadius: 50,
    backgroundColor: Theme.secondary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
