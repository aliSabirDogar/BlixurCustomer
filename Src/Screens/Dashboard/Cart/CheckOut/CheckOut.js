import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../../Utils/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TxtInputs from '../../../../components/TxtInputs/TxtInput';
import SmallButton from '../../../../components/SmallBtn/SmallBtn';
import PaymentLogos from '../../../../components/paymentLogos/paymentLogos';
export default class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkOutCart: [
        {
          img: 'https://assets.entrepreneur.com/content/3x2/2000/20171011145845-GettyImages-591404161.jpeg?width=700&crop=2:1',
        },
        {
          img: 'https://assets.entrepreneur.com/content/3x2/2000/20171011145845-GettyImages-591404161.jpeg?width=700&crop=2:1',
        },
        {
          img: 'https://assets.entrepreneur.com/content/3x2/2000/20171011145845-GettyImages-591404161.jpeg?width=700&crop=2:1',
        },
        {
          img: 'https://assets.entrepreneur.com/content/3x2/2000/20171011145845-GettyImages-591404161.jpeg?width=700&crop=2:1',
        },
        {
          img: 'https://assets.entrepreneur.com/content/3x2/2000/20171011145845-GettyImages-591404161.jpeg?width=700&crop=2:1',
        },
        {
          img: 'https://assets.entrepreneur.com/content/3x2/2000/20171011145845-GettyImages-591404161.jpeg?width=700&crop=2:1',
        },
      ],
    };
  }
  renderCheckOutCart = ({item, index}) => {
    return (
      <View>
        <Image
          style={{
            width: wp('30%'),
            height: hp('12%'),
            borderRadius: 20,
            marginEnd: 10,
          }}
          source={{uri: item.img}}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerOfDrawerAndCart}>
          <IonIcon
            // style={{marginStart: '5%'}}
            size={20}
            name={'arrow-back'}
            color={'#ffffff'}
            // onPress={() => this.props.navigation.openDrawer()}
          />
        </View>
        <View style={{alignItems: 'center', width: '100%', padding: 10}}>
          <Text
            style={{
              color: Theme.secondary,
              fontSize: Theme.fontBoldHeadings,
              fontFamily: Theme.gilRoySemiBold,
            }}>
            Check Out
          </Text>
        </View>
        <View style={styles.secondMain}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{padding: '5%'}}>
              <Text style={{fontFamily: Theme.gilRoySemiBold, fontSize:Theme.fontSubNormal, fontWeight:'bold'}}>
                Your Address
              </Text>
              <TxtInputs
                placeHolder={`Jhon Boe, +961-12345678 Schools Street, Bheind 
                the Official School,Magdou Saida, 1600`}
                radius={15}
                height={hp('10%')}
                align={'top'}
                top={hp('2%')}
              />
              <View style={styles.shippingModeAndBtn}>
                <Text style={{fontFamily: Theme.gilRoySemiBold, fontSize:Theme.fontSubNormal, fontWeight:'bold'}}>
                  Shipping Mode
                </Text>
                <TouchableOpacity
                  style={{
                    paddingStart: 10,
                    paddingEnd: 10,
                    borderRadius: 10,
                    backgroundColor: 'black',
                  }}>
                  <Text
                    style={{color: '#ffffff', fontSize: Theme.fontSmall}}>
                    Change Mode
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.shippingModeAndBtn,
                  {marginTop: hp('2%'), color: Theme.placeHolderColor},
                ]}>
                <Text
                  style={{
                    fontFamily: Theme.gilRoySemiBold,
                    color: Theme.subSecondary,
                  }}>
                  Shipping Speed
                </Text>

                <Text
                  style={{
                    color: Theme.placeHolderColor,
                    fontSize: Theme.fontSmall,
                  }}>
                  5 to 10 Days
                </Text>
              </View>
              <View style={styles.flatRatContainer}>
                <Text style={{color: Theme.placeHolderColor}}>Flat Rate</Text>
                <Text style={{color: Theme.placeHolderColor}}>$20</Text>
              </View>

              <View style={styles.shippingModeAndBtn}>
                <Text style={{fontFamily: Theme.gilRoySemiBold, fontSize:Theme.fontSubNormal, fontWeight:'bold'}}>Your Cart</Text>
                <TouchableOpacity
                  style={{
                    paddingStart: 10,
                    paddingEnd: 10,
                    borderRadius: 10,
                    backgroundColor: 'black',
                  }}>
                  <Text
                    style={{color: '#ffffff', fontSize: Theme.fontVerySmall}}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <FlatList
                contentContainerStyle={{marginStart: '5%'}}
                data={this.state.checkOutCart}
                renderItem={this.renderCheckOutCart}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={{padding: '5%'}}>
              <Text
                style={{
                 fontFamily: Theme.gilRoySemiBold, fontSize:Theme.fontSubNormal, fontWeight:'bold'
                }}>
                Order Summary
              </Text>
              <View
                style={{
                  padding: '5%',
                  backgroundColor: Theme.secondary,
                  borderRadius: 15,
                  marginTop: '5%',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('80%'),
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: Theme.subSecondary,
                  }}>
                  <Text
                    style={{
                      color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    Processing Fee
                  </Text>
                  <Text
                    style={{
                      color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    $455
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('80%'),
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: Theme.subSecondary,
                  }}>
                  <Text
                    style={{
                      color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    Transacion Fee
                  </Text>
                  <Text
                    style={{
                      color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    $455
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('80%'),
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: Theme.subSecondary,
                  }}>
                  <Text
                    style={{
                     color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    Shipping
                  </Text>
                  <Text
                    style={{
                      color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    $455
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('80%'),
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: Theme.subSecondary,
                  }}>
                  <Text
                    style={{
                      color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    Shipping
                  </Text>
                  <Text
                    style={{
                     color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    $455
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('80%'),
                    justifyContent: 'space-between',
                    marginTop: '2%',
                    alignItems: 'center',
                    // borderBottomWidth: 1,
                  }}>
                  <Text
                    style={{
                      color: Theme.gray,
                      fontFamily: Theme.gilRoyMedium,
                      fontSize:16
                    }}>
                    Total
                  </Text>
                  <Text
                    style={{
                      // color: Theme.subSecondary,
                      fontSize: Theme.fontNormalBoldHeadings,
                      fontFamily: Theme.gilRoyRegular,
                      fontWeight:'bold'
                    }}>
                    $455
                  </Text>
                </View>
              </View>
              <View style={styles.shippingModeAndBtn}>
                <Text style={{fontFamily: Theme.gilRoySemiBold, fontSize:Theme.fontSubNormal, fontWeight:'bold'}}>Coupon</Text>
                <TouchableOpacity
                  style={{
                    paddingStart: 10,
                    paddingEnd: 10,
                    borderRadius: 5,
                    backgroundColor: Theme.secondary,
                    elevation: 5,
                    height: hp('2.5%'),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Theme.primary,
                      fontSize: Theme.fontSmall,
                    }}>
                    Add Coupon Code
                  </Text>
                  <MaterialIcons name="keyboard-arrow-right" />
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', marginTop: '10%'}}>
                <Text style={{fontFamily: Theme.gilRoySemiBold, fontSize:Theme.fontSubNormal, fontWeight:'bold'}}>
                  Paying With
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('80%'),
                    justifyContent: 'space-between',
                    marginTop: '5%',
                  }}>
                  <PaymentLogos
                    image={require('../../../../assets/images/paypal.png')}
                  />
                  <PaymentLogos
                    image={require('../../../../assets/images/visa.png')}
                  />
                  <PaymentLogos
                    image={require('../../../../assets/images/credit-card.png')}
                  />
                  <PaymentLogos
                    image={require('../../../../assets/images/paypal.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: '10%',
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: Theme.placeHolderColor,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    marginTop: '2%',
                    marginBottom: '2%',
                    fontFamily: Theme.gilRoySemiBold,
                    color: Theme.subSecondary,
                    fontWeight:'bold'
                  }}>
                  Total
                </Text>
                <Text
                  style={{
                    fontFamily: Theme.gilRoySemiBold,
                    fontSize: Theme.fontNormalBoldHeadings,
                    fontWeight:'bold'
                  }}>
                  $475
                </Text>
              </View>
              <View>
                <SmallButton
                  txt={'Pay Now'}
                  bgColor={Theme.primary}
                  width={wp('40%')}
                  height={hp('4%')}
                  radius={20}
                  color={Theme.secondary}
                  onPress={() =>
                    this.props.navigation.navigate('Payment', {
                      luckyDraw: false,
                    })
                  }
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  containerOfDrawerAndCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
  },
  secondMain: {
    backgroundColor: '#ffffff',
    flex: 1,
    // marginTop: '15%',
    width: wp('100%'),
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    overflow: 'hidden',
    // alignItems: 'center',
    // padding: '5%',
  },
  shippingModeAndBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('5%'),
  },
  flatRatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Theme.secondary,
    borderRadius: 10,
    marginTop: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
