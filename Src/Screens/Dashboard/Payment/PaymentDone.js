import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Theme from '../../../Utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import PaymentDoneLogo from '../../../assets/svgs/PaymentDone';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import {showMessage, hideMessage} from 'react-native-flash-message';
export default class PaymentDone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   product: this.props.route.params.product,
    };
  }
  // componentDidMount() {
  //   alert(this.state.product);
  // }
  componentDidMount() {
    // showMessage({
    //   message: 'You will receive your order soon',
    //   type: 'info',
    //   duration: 5000,
    //   hideStatusBar: true,
    //   style: {margin: 10, borderRadius: 10, backgroundColor: Theme.primary},
    //   icon: 'info',
    // });
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Heading */}
        <View style={{padding: 20}}>
          <AntDesign name={'arrowleft'} />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.paymentTxt}>Payment</Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: Theme.fontBoldHeadings,
              color: Theme.subSecondary,
              marginBottom: '2%',
            }}>
            Payment Successfull!
          </Text>
          <PaymentDoneLogo />
          <Text
            style={{
              //   fontSize: Theme.fontBoldHeadings,
              color: Theme.subSecondary,
              marginTop: '5%',
              width: wp('70%'),
              textAlign: 'center',
              fontSize: Theme.fontNormalBoldHeadings,
              fontFamily: Theme.gilRoyLight,
            }}>
            {`Your order will be processed and sent to you as soon as possible`}
          </Text>
          <View style={{marginTop: '20%'}}>
            <SmallButton
              txt={'Continue Shopping'}
              width={wp('70%')}
              bgColor={Theme.primary}
              height={hp('5%')}
              radius={20}
              color={Theme.secondary}
              onPress={() => {
                this.props.navigation.navigate('DashBoard');
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: Theme.secondary},
  paymentTxt: {
    // fontFamily: Theme.gilRoyExtraBold,
    fontSize: Theme.fontBoldHeadings,
    fontFamily: Theme.gilRoyExtraBold,
  },
});
