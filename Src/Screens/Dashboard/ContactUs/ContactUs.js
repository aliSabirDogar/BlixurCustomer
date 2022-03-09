import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Theme from '../../../Utils/Theme';
import Logo from '../../../assets/svgs/logo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TxtInputs from '../../../components/TxtInputs/TxtInput';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import {fontSize} from 'styled-system';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Modal from 'react-native-modal';
import ContactUsLogo from '../../../assets/svgs/contactUsLogo';
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({isVisible: false})}
          animationIn={'bounceIn'}
          animationOut={'bounceOut'}>
          <View style={styles.mainContainerOfModal}>
            <ContactUsLogo />
            <Text
              style={{
                width: wp('50%'),
                textAlign: 'center',
                fontFamily: Theme.gilRoyLight,
                marginTop: hp('2%'),
              }}>{`We have received your query we'll get back to you soon. `}</Text>
            <SmallButton
              onPress={() => this.setState({isVisible: false})}
              txt={'Done'}
              width={wp('35%')}
              height={hp('3.5%')}
              bgColor={Theme.primary}
              color={Theme.secondary}
              radius={20}
            />
          </View>
        </Modal>
        <View>
          <View style={{margin: '10%', alignSelf: 'center'}}>
            <Logo />
          </View>
        </View>
        <View style={styles.secondMain}>
          <KeyboardAwareScrollView>
            <Text style={styles.heading}>Contact Us</Text>
            <View style={{margin: '9%', alignSelf: 'center'}}>
             
              <Text style={styles.subHeadingTxt}>Name</Text>
               <View style={styles.textalignment}>
              <TxtInputs
                placeHolder={'Name'}
                radius={10}
                width={wp('85%')}
                height={hp('4%')}
              />
              </View>
              
                <View style={styles.textalignment}>
              <Text style={styles.subHeadingTxt}>Email</Text></View>
              <View style={styles.textinputalignment}>
              <TxtInputs
                placeHolder={'Email'}
                radius={10}
                width={wp('85%')}
                height={hp('4%')}
              />
              </View>
              
                <View style={styles.textalignment}>
              <Text style={styles.subHeadingTxt}>Subject</Text></View>
              <View style={styles.textinputalignment}>
              <TxtInputs
                placeHolder={'Subject'}
                radius={10}
                width={wp('85%')}
                height={hp('4%')}
              />
              </View>
             
                <View style={styles.textalignment}>
              <Text style={styles.subHeadingTxt}>Send us a message</Text></View>
               <View style={styles.textinputalignment}>
              <TxtInputs
                placeHolder={'Send us a message'}
                radius={15}
                height={hp('15%')}
                align={'top'}
                width={wp('85%')}
              />
              </View>
              <SmallButton
                onPress={() => this.setState({isVisible: true})}
                txt={'Send'}
                bgColor={Theme.primary}
                width={wp('30%')}
                height={hp('4%')}
                color={Theme.secondary}
                radius={20}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomViewTxt}>Help</Text>
          <Text style={styles.bottomViewTxt}>Reviews</Text>
          <Text style={styles.bottomViewTxt}>Blog</Text>
          <Text style={styles.bottomViewTxt}>How it works</Text>
          <Text style={styles.bottomViewTxt}>Currency:$USD</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.primary,
    // alignItems: 'center',
  },
  secondMain: {
    flex: 1,
    backgroundColor: Theme.secondary,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    padding: wp('5%'),
  },
  heading: {
    alignSelf: 'center',
    fontSize: Theme.bold,
    fontFamily: Theme.gilRoyExtraBold,
   // fontWeight:'bold'
  },
  subHeadingTxt: {
    marginTop: wp('2%'),
    marginBottom: wp('2%'),
    fontFamily: Theme.gilRoySemiBold,
    fontWeight: 'bold',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: hp('1%'),
    // top: hp('2%'),
    width: wp('80%'),
    alignSelf: 'center',
  },
  bottomViewTxt: {
    fontSize: Theme.fontNormal,
    color: Theme.placeHolderColor,
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
  textalignment:{
    marginTop:8
  },
  textinputalignment:{
    marginTop:11
  }
});
