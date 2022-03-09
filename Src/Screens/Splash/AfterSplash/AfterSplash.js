import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Theme from '../../../Utils/Theme';
import Video from 'react-native-video';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MensArrowLogo from '../../../assets/svgs/menarrowRight';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import SHopBrandsSvg from '../../../assets/svgs/shopBrand';
export default class AfterSplash extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <Video
          source={require('../../../assets/video/2.mp4')} // Can be a URL or a local file.
          //         // ref={ref => {
          //         //   this.player = ref;
          //         // }} // Store reference
          //         // onBuffer={this.onBuffer} // Callback when remote video is buffering
          //         // onError={this.videoError} // Callback when video cannot be loaded
          style={[
            {
              height: hp('80%'),
              position: 'absolute',
              width: wp('100%'),
              top: 0,
            },
            // {opacity: 0.8},
          ]}
          resizeMode="stretch"
          repeat={true}
        />
        {/* <Text style={styles.heading}>Blixur</Text>
        <Text
          style={{
            color: 'white',
            fontSize: Theme.fontBoldHeadings,
            // fontWeight: 'bold',
            marginStart: '5%',
          }}>
          Product and Service on demand
        </Text> */}
        {/* <Text>dsjhj</Text> */}
        <View style={styles.mainBottomView}>
          <View style={styles.RowOfTwoBtns}>



            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignIn')}
              activeOpacity={0.6}
              style={[styles.eachBtn, {}]}>
              {/* <Entypo name="briefcase" color={'orange'} size={hp('2%')} /> */}
              {/* <Image
                style={[styles.eachImg, {}]}
                source={require('../../../assets/images/Shopping.jpg')}
              /> */}
              {/* <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'red',
                  alignItems: 'center',
                }}> */}
                <View style={{width:177, height:130, alignItems:'center', backgroundColor:'#e8e8e8', opacity:0.9000000,borderTopLeftRadius:10, borderTopRightRadius:10, marginBottom:10}}>
              <Image
                style={[
                  styles.eachImg,
                  {
                    // height: hp('15%'),
                  },
                ]}
                source={require('../../../assets/images/shopBrands.png')}
              />
              {/* </View> */}
              </View>
              <Text style={styles.txtSty}>Shop Brands</Text>
              {/* <View style={styles.viewOfSignUpTxt}>
                <Text style={styles.txtSty}>Shop Brands</Text>
              </View> */}
            </TouchableOpacity>




            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OuterServices', {outer: true})
              }
              activeOpacity={0.6}
              style={[styles.eachBtn, {}]}>
              {/* <Zocial name="guest" size={hp('2%')} />  */}
              <View style={{width:177, height:130, alignItems:'center', backgroundColor:'#e8e8e8', borderTopLeftRadius:10, borderTopRightRadius:10, marginBottom:10, opacity:0.9000000}}>
              <Image
                style={[
                  styles.eachImg,
                  {
                    // height: hp('20%'),
                    elevation:5
                  },
                ]}
                source={require('../../../assets/images/Bookservice.png')}
              />
              </View>
              <View style={{}}>
              <Text style={styles.txtSty}>Book Services</Text></View>
              {/* <View style={styles.viewOfSignUpTxt}>
                <Text style={styles.txtSty}>Book Service</Text>
              </View> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
             // flexDirection: 'row',
             alignItems:'center',
              justifyContent: 'space-between',
              bottom: hp('1%'),
              marginStart: wp('3%'),
              marginEnd: wp('3%'),
            }}>
            <TouchableOpacity
              style={styles.eachTxtBtn}
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={styles.signInTxt}>Sign In</Text>
            </TouchableOpacity>
           {/* <TouchableOpacity
              style={styles.eachTxtBtn}
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={styles.signInTxt}>Skip</Text>
            </TouchableOpacity>*/}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBottomView: {
    height: hp('25%'),
    backgroundColor: Theme.secondary,
    position: 'absolute',
    zIndex: 9999,
    width: wp('100%'),
    bottom: 0,
     borderTopStartRadius: 20,
     borderTopEndRadius: 20,
    // padding: '5%',
    // opacity: 0.7,
  },
  eachTxtBtn: {
    // backgroundColor: Theme.secondary,
    // elevation: 5,
    paddingStart: 5,
    paddingEnd: 5,
    borderRadius: 10,
    // fontSize: Theme.fontBoldHeadings,
  },
  RowOfTwoBtns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginStart: '5%',
    // marginEnd: '5%',
    bottom: hp('3%'),
    // opacity: 0.7,
  },
  eachBtn: {
    width: wp('43%'),
    height: hp('20%'),
    backgroundColor: Theme.secondary,
    borderRadius: 10,
    alignItems: 'center',
   // justifyContent: 'space-around',
    flexDirection: 'column',
    // elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    // opacity: 0.5,
  },
  eachImg: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    // backgroundColor: Theme.placeHolderColor,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // elevation: 2,
    // opacity: 0.5,
  },
  txtSty: {
    color: Theme.primary,
    fontSize: Theme.fontSubNormal,
    fontWeight:'bold'
  },
  heading: {
    color: 'white',
    fontSize: Theme.fontExtraBoldHeadings,
    fontWeight: 'bold',
    marginTop: '50%',
    marginStart: '5%',
  },
  viewOfSignUpTxt: {
    height: hp('5%'),
    backgroundColor: Theme.secondary,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInTxt: {
    fontSize: Theme.fontSubNormal,
    fontFamily: Theme.gilRoyExtraBold,
  },
});
