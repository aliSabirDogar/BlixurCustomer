import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SmallButton from '../../components/SmallBtn/SmallBtn';
import TxtInput from '../../components/TxtInputs/TxtInput';
import Logo from '../../assets/svgs/logo';
import Theme from '../../Utils/Theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class SignIn extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        {/* <StatusBar translucent barStyle="dark-content" /> */}

        <View style={{alignSelf: 'center', margin: '5%'}}>
          <Logo />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            flex: 1,
            marginTop: '40%',
            width: '100%',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
          }}></View>
        <View
          style={{
            backgroundColor: '#ffffff',
            position: 'absolute',
            height: '85%',
            bottom: 0,
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            alignSelf: 'center',
            width: '85%',
            // zIndex: 9999,
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 40,
              height: '70%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              width: '100%',
              overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
            }}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <Text
                style={{
                  alignSelf: 'center',
                  margin: '10%',
                  fontSize: Theme.fontBoldHeadings,
                  color: '#707070',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Sign In
              </Text>
              <View style={{paddingStart: 10, paddingEnd: 10}}>
                <TxtInput
                  height={hp('5%')}
                  placeHolder={'Email ID:'}
                  radius={12}
                  // bottom={'10%'}
                />
                <TxtInput
                  height={hp('5%')}
                  placeHolder={'Password:'}
                  radius={12}
                  // bottom={'10%'}
                  top={'10%'}
                />

                <View
                  style={{
                    alignSelf: 'flex-end',
                    width: '30%',
                  }}>
                  <TouchableOpacity
                    style={{
                      height: 25,
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
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '10%',
                    }}>
                    <Text style={{fontSize: Theme.fontSmall, fontWeight:'bold', opacity:0.65555}}>
                      Forgot Password
                    </Text>
                  </TouchableOpacity>
                </View>
                <SmallButton
                  width={'35%'}
                  height={hp('3%')}
                  bgColor={Theme.primary}
                  color={Theme.secondary}
                  radius={12}
                  txt={'Sign In'}
                  onPress={() => this.props.navigation.navigate('Home')}
                />
                <Text
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  style={{
                    alignSelf: 'center',
                    marginTop: '5%',
                    fontSize: Theme.fontNormal,
                                      }}>
                  {'Already have an Account....? Sign Up'}
                </Text>
              </View>
            </KeyboardAwareScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '10%',
            }}>
            <View
              style={{width: '35%', height: 1, backgroundColor: '#707070'}}
            />
            <Text style={{color: '#707070', fontSize: hp('1.5%')}}>
              Sign In with
            </Text>
            <View
              style={{width: '35%', height: 1, backgroundColor: '#707070'}}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              width: wp('80%'),
              // backgroundColor: 'red',

              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: Theme.primary,
              marginTop: '5%',
              borderRadius: 5,
              height: hp('4%'),
            }}>
            <Image
              style={{height: 10, width: 10, marginEnd: 5}}
              source={require('../../assets/images/apple.png')}
            />
            <Text
              style={{
                fontFamily: Theme.gilRoySemiBold,
                fontSize: Theme.fontSmall,
              }}>
              Sign in with Apple
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: wp('80%'),
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                // alignSelf: 'center',
                alignItems: 'center',
                width: wp('35%'),
                backgroundColor: '#244C97',

                justifyContent: 'center',
                // borderWidth: 1,
                // borderColor: Theme.primary,
                marginTop: '5%',
                borderRadius: 5,
                height: hp('4%'),
              }}>
              {/* <Image
                style={{height: 10, width: 10, marginEnd: 5}}
                source={require('../../assets/images/apple.png')}
              /> */}
              <Text
                style={{
                  fontFamily: Theme.gilRoySemiBold,
                  color: Theme.secondary,
                  fontSize: Theme.fontSmall,
                }}>
                Phone Number
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                // alignSelf: 'center',
                alignItems: 'center',
                width: wp('35%'),
                backgroundColor: '#4285F4',

                justifyContent: 'center',
                // borderWidth: 1,
                // borderColor: Theme.primary,
                marginTop: '5%',
                borderRadius: 5,
                height: hp('4%'),
              }}>
              <Text
                style={{
                  fontFamily: Theme.gilRoySemiBold,
                  color: Theme.secondary,
                  fontSize: Theme.fontSmall,
                }}>
                Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
