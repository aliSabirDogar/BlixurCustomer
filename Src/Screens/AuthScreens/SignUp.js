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
import TxtInput from '../../components/TxtInputs/TxtInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SmallButton from '../../components/SmallBtn/SmallBtn';
import Modal from 'react-native-modal';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const countries = ['ICT', 'PB', 'KP', 'SD', 'GB', 'BA', 'AJK'];
import Logo from '../../assets/svgs/logo';
import SmallCircle from '../../assets/svgs/smallCircle';
// import styles from './Style';
import Theme from '../../Utils/Theme';
// import {alignItems} from 'styled-system';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
// import {
//   WheelPicker,
//   TimePicker,
//   DatePicker,
// } from 'react-native-wheel-picker-android';
import {Picker, DatePicker} from 'react-native-wheel-pick';

const wheelPickerData = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
];
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continue: false,
      isVisible: false,
      agree: false,
      premium: true,
      selected: false,
      forService: false,
      selectedItem: 'Select Country',
      openPicker: false,
    };
  }

  onItemSelected = selectedItem => {
    this.setState({selectedItem});
  };

  onPress = () => {
    this.setState({selectedItem: 3});
  };
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

        <View style={styles.containerOfLogo}>
          <Logo />
        </View>
        <View style={styles.mainContainerOfSignUpForm}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.formHeading}>Start Selling</Text>
            <View style={{alignItems: 'center'}}>
              <TxtInput
                height={hp('5%')}
                placeHolder={'Your Shop Name:'}
                radius={12}
                bottom={hp('1.5%')}
                width={'90%'}
                onPressIn={() => this.setState({openPicker: false})}
              />
              
              <TxtInput
                height={hp('5%')}
                placeHolder={'Password'}
                radius={12}
                // bottom={'5%'}
                bottom={hp('1.5%')}
                width={'90%'}
                onPressIn={() => this.setState({openPicker: false})}
              />
              <TxtInput
                height={hp('5%')}
                placeHolder={'Confirm Password'}
                radius={12}
                // bottom={'5%'}
                bottom={hp('1.5%')}
                width={'90%'}
                onPressIn={() => this.setState({openPicker: false})}
              />
              <TxtInput
                height={hp('5%')}
                placeHolder={'Business Address (Optional)'}
                radius={12}
                // bottom={'5%'}
                bottom={hp('1.5%')}
                width={'90%'}
                onPressIn={() => this.setState({openPicker: false})}
              />
              <View style={styles.containerOfCityAndState}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({openPicker: !this.state.openPicker})
                  }
                  style={styles.containerOfDropDown}>
                  <Text style={{textAlign: 'center'}}>
                    {this.state.selectedItem}
                  </Text>
                  {/* <SelectDropdown
                    data={countries}
                    buttonTextStyle={{
                      fontSize: 10,
                      color: '#BABABA',
                    }}
                    defaultButtonText="Country:"
                    renderDropdownIcon={this.renderIcon}
                    buttonStyle={{
                      width: 80,
                      height: hp('5%'),
                      backgroundColor: 'transparent',
                    }}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item;
                    }}
                  /> */}
                </TouchableOpacity>
                <TxtInput
                  height={hp('5%')}
                  placeHolder={'(777)-777-777'}
                  width={'60%'}
                  radius={12}
                  bottom={'5%'}
                  onPressIn={() => this.setState({openPicker: false})}
                  keyboardType={'numeric'}

                  // bottom={hp('1.5%')}
                  // top={'5%'}
                />
                {/* <TxtInput placeHolder={'State:'} width={'30%'} /> */}
              </View>
              <TxtInput
                height={hp('5%')}
                placeHolder={'Email'}
                radius={12}
                // bottom={'5%'}
                bottom={hp('1.5%')}
                onPressIn={() => this.setState({openPicker: false})}
                width={'90%'}
              />
              <TxtInput
                height={hp('5%')}
                placeHolder={'Confirm Email'}
                radius={12}
                // bottom={'5%'}
                bottom={hp('1.5%')}
                width={'90%'}
                onPressIn={() => this.setState({openPicker: false})}
              />
            </View>
            <View style={styles.containerOfAgreeStatementAndIcon}>
              {/* <AntDesign name="checkcircle" color="#000000" size={11.5} /> */}
              <TouchableOpacity
                onPress={() => this.setState({agree: !this.state.agree})}>
                {this.state.agree == false ? (
                  <SmallCircle />
                ) : (
                  <AntDesign name="checkcircle" color="#000000" size={15} />
                )}
              </TouchableOpacity>
              <Text style={styles.txtOfAgree}>
                {'Agreeing the BLIXUR terms and condition and privacy policy'}{' '}
              </Text>
            </View>
            <SmallButton
              height={hp('3%')}
              bgColor={Theme.primary}
              radius={12}
              color={Theme.secondary}
              width={'35%'}
              txt={'Submit'}
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Text
              onPress={() => this.props.navigation.navigate('SignIn')}
              style={{
                alignSelf: 'center',
                marginTop: '5%',
                fontSize: Theme.fontNormal,
              }}>
              {'Already have an Account....? Sign In'}
            </Text>
          </KeyboardAwareScrollView>
          {this.state.openPicker == true && (
            <Picker
              style={{
                backgroundColor: Theme.primary,
                width: wp('100%'),
                height: hp('20%'),
                borderRadius: 10,
                zIndex: 999,
                position: 'absolute',
                bottom: 0,
                // opacity: 0.5,
              }}
              textSize={16}
              itemStyle={{backgroundColor: 'white'}}
              textColor={'white'}
              selectedValue={this.state.selectedItem}
              pickerData={[
                'PK',
                'IN',
                'CHI',
                'item4',
                'item5',
                'item6',
                'item7',
              ]}
              // onLayout={}
              // onMagicTap={()=>this.setState({openPicker:false})}
              onTouchCancel={() => this.setState({openPicker: false})}
              // onResponderRelease={}
              onValueChange={value => {
                this.setState({selectedItem: value});
                console.log('seleccted', this.state.selectedItem);
              }}
              itemSpace={30} // this only support in android
            />
          )}
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
  containerOfLogo: {alignSelf: 'center', margin: hp('2%')},
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
    // elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
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
  rootContainerOfSignUp: {flex: 1, backgroundColor: Theme.primary},
});
