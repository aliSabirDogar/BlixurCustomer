import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TxtInput from '../../../components/TxtInputs/TxtInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import Modal from 'react-native-modal';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const countries = ['ICT', 'PB', 'KP', 'SD', 'GB', 'BA', 'AJK'];
import Logo from '../../../assets/svgs/logo';
import SmallCircle from '../../../assets/svgs/smallCircle';
// import styles from './Style';
import Theme from '../../../Utils/Theme';
// import {alignItems} from 'styled-system';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {color} from 'react-native-reanimated';
export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continue: false,
      isVisible: false,
      agree: false,
      premium: true,
      selected: false,
      forService: false,
    };
  }
  renderIcon = () => {
    return (
      <FontAwesome
        style={{bottom: 3}}
        size={15}
        name={'sort-down'}
        color={'#737373'}
      />
    );
  };
  navigate = () => {
    if (this.state.selected == false) {
      this.setState({continue: true});
    } else {
      this.setState({continue: true});
    }
  };
  navigateToTiming = () => {
    if (this.state.selected == true) {
      this.setState({forService: true});
    } else {
      this.setState({isVisible: false});
      this.props.navigation.replace('SelectCategory');
    }
  };
  render() {
    return (
      <View style={styles.rootContainerOfSignUp}>
        {/* Modal  */}

        {/* Modal */}
        <AntDesign
          style={{marginStart: wp('5%'), marginTop: wp('5%')}}
          name={'arrowleft'}
          color={Theme.secondary}
          size={Theme.fontBoldHeadings}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.containerOfLogo}>
          {/* <Logo /> */}

          <Text style={styles.heading}>Details</Text>
        </View>
        <View style={styles.mainContainerOfSignUpForm}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContentView}>
              <View style={styles.rowOfDetailTxtAndImg}>
                <View>
                  <Text style={[styles.heading, {color: Theme.primary}]}>
                    My Details
                  </Text>
                  <Text style={[styles.subHeading, {marginTop: hp('1%')}]}>
                    Robin Blader
                  </Text>
                  <Text
                    style={[styles.subHeading, {color: Theme.subSecondary}]}>
                    Aug 5, 2021
                  </Text>
                </View>
                <View style={styles.imgSty}>
                  <Image
                    style={styles.imgSty}
                    source={require('../../../assets/images/camera.jpg')}
                  />
                </View>
              </View>
              <View style={styles.bottomLine} />
              <View style={styles.rowOfTxtInput}>
                <View>
                  <Text>Product Description</Text>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      width: wp('35%'),
                      borderColor: Theme.placeHolderColor,
                    }}
                    placeholder={'Nike (Air Max)'}
                  />
                </View>
                <View>
                  <Text>Price</Text>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      width: wp('35%'),
                      borderColor: Theme.placeHolderColor,
                    }}
                    placeholder={'$100'}
                  />
                </View>
              </View>
              <View style={[styles.rowOfTxtInput, {marginTop: hp('2%')}]}>
                <View>
                  <Text>Brand</Text>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      width: wp('35%'),
                      borderColor: Theme.placeHolderColor,
                    }}
                    placeholder={'Stylo Shoes'}
                  />
                </View>
                <View>
                  <Text>Status</Text>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      width: wp('35%'),
                      borderColor: Theme.placeHolderColor,
                    }}
                    placeholder={'Delivered'}
                  />
                </View>
              </View>

              <View style={styles.rowBtns}>
                <SmallButton
                  height={hp('4%')}
                  bgColor={'#6495ED'}
                  radius={20}
                  color={Theme.secondary}
                  width={wp('30%')}
                  txt={'Review'}
                  elevation={3}
                  //   onPress={() => this.props.navigation.navigate('Home')}
                />
                <SmallButton
                  height={hp('4%')}
                  bgColor={Theme.secondary}
                  radius={20}
                  color={Theme.primary}
                  width={wp('30%')}
                  txt={'Refund'}
                  elevation={3}
                  onPress={() => this.props.navigation.navigate('Refund')}
                />
              </View>
              <SmallButton
                height={hp('4%')}
                bgColor={Theme.primary}
                radius={20}
                color={Theme.secondary}
                width={wp('75%')}
                txt={'Back'}
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainerOfModal: {
    height: hp('40%'),
    width: wp('90%'),
    borderRadius: 30,
    backgroundColor: Theme.secondary,
    alignSelf: 'center',
  },
  modalHeading: {
    alignSelf: 'center',
    margin: wp('10%'),
    fontSize: Theme.fontNormalBoldHeadings,
    color: Theme.subPrimary,
    fontFamily: 'Gilroy-ExtraBold',
  },
  mainContentView: {padding: wp('5%')},
  touchableBtn: {
    backgroundColor: '#D1DEE5',
    width: '85%',
    alignSelf: 'center',
    height: hp('5.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 2,
  },
  txtOfTouchableBtn: {
    color: '#232F3F',
    fontSize: Theme.fontNormal,
    fontFamily: 'Gilroy-SemiBold',
  },
  containerOfHeadingAndBackIcon: {
    flexDirection: 'row',
    margin: wp('10%'),
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeadingForRow: {
    // alignSelf: 'center',

    fontSize: hp('2%'),
    color: '#232F3F',
    fontFamily: 'Gilroy-Light',
  },
  touchableForSubscrptionBtn: {
    backgroundColor: '#D1DEE5',
    width: '100%',
    alignSelf: 'center',
    height: hp('5.5%'),
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtPricing: {
    color: Theme.subPrimary,
    fontSize: Theme.fontSmall,
  },
  txtOfPricingDuration: {
    color: Theme.placeHolderColor,
    fontSize: Theme.fontSmall,
    marginStart: 5,
  },
  containerOfPricingAndDuration: {flexDirection: 'row', alignItems: 'center'},
  containerOfLogo: {alignSelf: 'center', marginBottom: hp('2%')},
  mainContainerOfSignUpForm: {
    backgroundColor: Theme.secondary,
    flex: 1,
    width: wp('100%'),
    alignSelf: 'center',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    padding: wp('2%'),
  },
  formHeading: {
    alignSelf: 'center',
    margin: hp('4%'),
    fontSize: 20,
    color: '#707070',
    fontFamily: 'Montserrat-SemiBold',
  },
  containerOfCityAndState: {
    flexDirection: 'row',
    width: '90%',

    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  containerOfDropDown: {
    backgroundColor: '#ffffff',
    elevation: 5,
    borderRadius: 15,
    // paddingLeft: 10,
    marginBottom: '5%',
    width: '35%',
    height: hp('5%'),
    justifyContent: 'center',
    //   height: '10%',
  },
  containerOfAgreeStatementAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90%'),
    alignSelf: 'center',
    // backgroundColor: 'red',
    marginTop: '5%',
  },
  txtOfAgree: {
    fontSize: Theme.fontNormal,
    marginStart: 10,
    color: Theme.subSecondary,
  },
  rootContainerOfSignUp: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  heading: {
    color: Theme.secondary,
    fontFamily: Theme.montserratSemiBold,
    fontSize: Theme.fontBoldHeadings,
  },
  rowBtns: {
    flexDirection: 'row',
    width: wp('75%'),
    justifyContent: 'space-around',
    alignSelf: 'center',
    top: hp('2%'),
  },
  subHeading: {
    color: Theme.placeHolderColor,
  },
  rowOfDetailTxtAndImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgSty: {
    width: wp('35%'),
    height: hp('10%'),
    borderRadius: 15,
    backgroundColor: Theme.secondary,
    elevation: 5,
  },
  bottomLine: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.placeHolderColor,
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
  rowOfTxtInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
