import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../../../Utils/Theme';
import PaymentCardImage from '../../../assets/svgs/Card';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import {borderWidth} from 'styled-system';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false,
      luckyDraw: this.props.route.params.luckyDraw,
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <AntDesign name="arrowleft" />
            <Text style={styles.heading}>
              {this.state.next == false ? `Payment Method` : `Add Credit Card`}
            </Text>
            <View style={styles.bottomLine} />
          </View>
          <View style={styles.cardContainer}>
            <Image
              style={styles.cardSTy}
              source={require('../../../assets/images/visaCard.png')}
            />
          </View>
          {this.state.next == false ? (
            <>
              <View
                style={[
                  styles.bottomLine,
                  {
                    marginTop: hp('4%'),
                    marginStart: wp('5%'),
                    marginEnd: wp('5%'),
                  },
                ]}
              />

              {this.state.luckyDraw == false ? (
                <View style={styles.content}>
                  <View style={styles.rowForHeadingAndPrice}>
                    <Text style={styles.subTxt}>Sub Total</Text>
                    <Text style={styles.subTxt}>$100</Text>
                  </View>
                  <View style={styles.rowForHeadingAndPrice}>
                    <Text style={styles.subTxt}>Shipping</Text>
                    <Text style={styles.subTxt}>$100</Text>
                  </View>
                  <View style={styles.rowForHeadingAndPrice}>
                    <Text style={styles.subTxt}>Processing Fee</Text>
                    <Text style={styles.subTxt}>$100</Text>
                  </View>
                  <View style={styles.rowForHeadingAndPrice}>
                    <Text style={styles.subTxt}>Transaction Fee</Text>
                    <Text style={styles.subTxt}>$100</Text>
                  </View>
                  <View style={[styles.bottomLine]} />
                  <View
                    style={[
                      styles.rowForHeadingAndPrice,
                      {marginTop: hp('2%')},
                    ]}>
                    <Text style={styles.totalAndPriceTxt}>Total</Text>
                    <Text style={styles.totalAndPriceTxt}>$100</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.content}>
                  <View
                    style={[
                      styles.rowForHeadingAndPrice,
                      {marginTop: hp('2%')},
                    ]}>
                    <Text style={styles.totalAndPriceTxt}>Total</Text>
                    <Text style={styles.totalAndPriceTxt}>$100</Text>
                  </View>
                </View>
              )}
            </>
          ) : (
            <View style={styles.nextContainer}>
              <Text style={styles.subTxt}>Card Number</Text>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderColor: Theme.placeHolderColor,
                  height: hp('5%'),
                }}
                placeholder={'424242424242'}
                //   placeholderTextColor={'red'}
              />
              <View style={{marginTop: hp('2%')}}>
                <Text style={styles.subTxt}>Card Holder</Text>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    borderColor: Theme.placeHolderColor,
                    height: hp('5%'),
                  }}
                  placeholder={'Blixur'}
                  // placeholderTextColor={'red'}
                />
              </View>
              <View style={{marginTop: hp('2%')}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.subTxt}>Expires Date</Text>
                    <TextInput
                      style={{
                        borderBottomWidth: 1,
                        borderColor: Theme.placeHolderColor,
                        height: hp('5%'),
                        width: wp('40%'),
                      }}
                      placeholder={'21/7'}
                      // placeholderTextColor={'red'}
                    />
                  </View>
                  <View>
                    <Text style={styles.subTxt}>CVV</Text>
                    <TextInput
                      style={{
                        borderBottomWidth: 1,
                        borderColor: Theme.placeHolderColor,
                        height: hp('5%'),
                        width: wp('40%'),
                      }}
                      placeholder={'123'}
                      // placeholderTextColor={'red'}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}

          <SmallButton
            txt={'Pay Now'}
            width={wp('60%')}
            height={'5%'}
            radius={20}
            bottom={10}
            color={Theme.secondary}
            bgColor={Theme.primary}
            onPress={
              this.state.next == false
                ? () => this.setState({next: true})
                : this.state.luckyDraw == false
                ? () => this.props.navigation.navigate('PaymentDone')
                : () => this.props.navigation.navigate('Congrats')
            }
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  nextContainer: {
    padding: wp('5%'),
  },
  subTxt: {
    color: Theme.subSecondary,
    fontFamily: Theme.gilRoyLight,
    fontSize: Theme.fontNormal,
  },
  totalAndPriceTxt: {
    fontFamily: Theme.gilRoyExtraBold,
  },
  header: {
    height: hp('20%'),
    // backgroundColor: 'blue',
    paddingStart: wp('5%'),
    paddingEnd: wp('5%'),
    justifyContent: 'center',
  },
  heading: {
    marginTop: hp('4%'),
    marginBottom: hp('4%'),
    fontSize: Theme.fontBoldHeadings,
    fontFamily: Theme.gilRoyExtraBold,
  },
  bottomLine: {
    height: 0.5,
    backgroundColor: Theme.placeHolderColor,
  },
  cardContainer: {
    // backgroundColor: 'red',
    // height: hp('25%'),
    justifyContent: 'center',
  },
  cardSTy: {
    width: wp('75%'),
    height: hp('25%'),
    alignSelf: 'center',
  },
  content: {
    padding: wp('5%'),
  },
  rowForHeadingAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
});
