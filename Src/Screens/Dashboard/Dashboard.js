import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image
} from 'react-native';
import Theme from '../../Utils/Theme';
import Logo from '../../assets/svgs/logo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TxtInput from '../../components/TxtInputs/TxtInput';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SliderBox} from 'react-native-image-slider-box';
import SmallButton from '../../components/SmallBtn/SmallBtn';
import {BrandsOfTheWeek} from '../../components/BrandsOfTheWeek/BrandsOfTheWeek';
import {Raffles} from '../../components/Raffles/Raffles';
import {Recommended} from '../../components/Recommended/Recommended';
import {MostPopular} from '../../components/MostPopular/MostPopular';
import {NewArrival} from '../../components/NewArrival/NewArrival';
import {RecentlyViewed} from '../../components/RecentlyViewed/RecntlyViewed';
// import {StatusBar} from 'native-base';
export default class Dashboard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     images: [
  //       require('../../assets/images/logo11.png'),
  //      // require('../../assets/images/logo8.png'),
  //      // require('../../assets/images/logo9.png'),
  //       // Network image
  //     ],
  //   };
  // }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />

        {/* <StatusBar backgroundColor={'#000000'} barStyle={'dark-content'} /> */}
        <View style={styles.containerOfDrawerAndCart}>
          <IonIcon
            // style={{marginStart: '5%'}}
            size={20}
            name={'menu'}
            color={'#ffffff'}
            onPress={() => this.props.navigation.openDrawer()}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}
            style={{
              width: 30,
              height: 30,
              backgroundColor: Theme.secondary,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign name={'shoppingcart'} color={Theme.primary} size={15} />
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 15,
                backgroundColor: 'red',
                position: 'absolute',
                bottom: -5,
                left: -5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: Theme.fontVerySmall, color: Theme.secondary}}>
                {1}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{alignItems: 'center', width: '100%', marginBottom: hp('1%')}}>
          <Logo />
          {/* <TxtInput
            height={hp('5%')}
            placeHolder={'What are you looking for'}
            radius={20}
            bottom={'5%'}
            width={'90%'}
            top={'2%'}
          /> */}
        </View>
        <View style={styles.secondMain}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                borderRadius: 50,
                height: hp('20%'),
                backgroundColor: Theme.secondary,
                width: wp('90%'),
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                 elevation: 3,
                alignSelf: 'center',
                marginTop: hp('2%'),
                alignItems: 'center',
              }}>
                <Image source = { require('../../assets/images/newLogo.jpeg')}
   style = {{ width: 80, height: 110, alignItems:'center', justifyContent:'center', marginTop:15 }}
   /> 
              {/* <SliderBox
                images={this.state.images}
                circleLoop
                autoplay
                onCurrentImagePressed={index =>
                  console.warn(`image ${index} pressed`)
                }
                dotColor={Theme.primary}
                inactiveDotColor={Theme.placeHolderColor}
                paginationBoxVerticalPadding={20}
                resizeMethod={'resize'}
                sliderBoxHeight={hp('20%')}
                resizeMode={'cover'}
                paginationBoxStyle={styles.pagintionBox}
                ImageComponentStyle={styles.imageComponent}

                // imageLoadingColor={Theme.imageloadingColor}
              /> */}
              
            </View>
            <View style={[styles.recommended, {paddingTop: hp('3%')}]}>
              <Text
                style={{
                  color: Theme.primary,
                  fontFamily: Theme.gilRoySemiBold,
                  fontWeight:'bold',
                  fontSize:Theme.fontSubNormal,
                }}>
                Recommended for you 
              </Text>
            </View>
            <View
              style={{
                height: hp('15%'),
                // backgroundColor: 'blue',
                // justifyContent: 'center',
              }}>
              <Recommended navigation={this.props} />
            </View>
            <View
              style={[
                styles.recommended,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <Text
                style={{
                  color: Theme.primary,
                  fontFamily: Theme.gilRoySemiBold,
                  color: Theme.primary,
                  fontFamily: Theme.gilRoySemiBold,
                  fontWeight:'bold',
                  fontSize:Theme.fontSubNormal,
                }}>
                {`Raffles`}
              </Text>
              <TouchableOpacity>
              <Image
              source={require('../../assets/images/aerow.png')}
              />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: hp('15%'),
                // backgroundColor: 'blue',
                // justifyContent: 'center',
              }}>
              <Raffles navigation={this.props} />
            </View>
            <View
              style={[
                styles.recommended,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <Text
                style={{
                  color: Theme.primary,
                  fontFamily: Theme.gilRoySemiBold,
                  fontWeight:'bold',
                  fontSize:Theme.fontSubNormal,
                }}>
                Brands Of The Week
              </Text>
              <TouchableOpacity>
                <Image
              source={require('../../assets/images/aerow.png')}
              />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: hp('25%'),
                // marginBottom: 5,

                // backgroundColor: 'blue',
                // justifyContent: 'center',
              }}>
              <BrandsOfTheWeek navigation={this.props} />
              {/* <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.state.brandsOfTheWeek}
                renderItem={this.renderBrands}
                horizontal
                contentContainerStyle={{
                  paddingStart: '5%',
                  paddingTop: '5%',
                  paddingEnd: '5%',
                }}
              /> */}
            </View>
            <View
              style={[
                styles.recommended,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <Text
                style={{
                  color: Theme.primary,
                  fontFamily: Theme.gilRoySemiBold,
                  fontWeight:'bold',
                  fontSize:Theme.fontSubNormal,
               
                }}>
                Most Popular
              </Text>
              <TouchableOpacity>
                <Image
              source={require('../../assets/images/aerow.png')}
              />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: hp('25%'),
                // backgroundColor: 'blue',
                // justifyContent: 'center',
              }}>
              <MostPopular navigation={this.props} />
            </View>
            <View
              style={[
                styles.recommended,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <Text
                style={{
                  
                  color: Theme.primary,
                  fontFamily: Theme.gilRoySemiBold,
                  fontWeight:'bold',
                  fontSize:Theme.fontSubNormal,
               
                }}>
                New Arrival
              </Text>
              <TouchableOpacity>
                <Image
              source={require('../../assets/images/aerow.png')}
              />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: hp('25%'),
                // backgroundColor: 'blue',
                // justifyContent: 'center',
              }}>
              <NewArrival navigation={this.props} />
            </View>
            <View
              style={[
                styles.recommended,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <Text
                style={{
                  
                  color: Theme.primary,
                  fontFamily: Theme.gilRoySemiBold,
                  fontWeight:'bold',
                  fontSize:Theme.fontSubNormal,
               
                }}>
                Recently Viewed
              </Text>
              <TouchableOpacity>
                <Image
              source={require('../../assets/images/aerow.png')}
              />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: hp('25%'),
                // backgroundColor: 'blue',
                // justifyContent: 'center',
              }}>
              <RecentlyViewed navigation={this.props} />
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
  secondMain: {
    backgroundColor: '#ffffff',
    flex: 1,
    // marginTop: '15%',
    width: '100%',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    overflow: 'hidden',
  },
  containerOfDrawerAndCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
  },
  pagintionBox: {
    position: 'absolute',
    bottom: hp('-3%'),
    padding: 0,
    // alignItems: Theme.align,
    // alignSelf: Theme.align,
    // justifyContent: Theme.align,
    paddingVertical: 10,
  },
  imageComponent: {
    borderRadius: 30,
    height: hp('20%'),
    backgroundColor: Theme.secondary,
    width: wp('90%'),
    // marginTop: '2%',
    elevation: 10,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
  },
  recommended: {
    paddingStart: '5%',
    paddingTop: hp('1%'),
    width: '90%',
    // height: hp('13%'),
    // backgroundColor: 'blue',
  },
});
