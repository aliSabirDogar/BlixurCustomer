import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const colors = [
  require('../../../../../assets/images/shoePng.png'),
  require('../../../../../assets/images/shoe1Png.png'),
  require('../../../../../assets/images/shoePng.png'),
];
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Theme from '../../../../../Utils/Theme';
import Feather from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SmallBtn from '../../../../../components/SmallBtn/SmallBtn';
import {theme} from 'native-base';
export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 1,
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <AntDesign
            // style={{marginStart: '5%'}}
            size={20}
            name={'arrowleft'}
            color={Theme.primary}
            onPress={() => this.props.navigation.goBack()}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}
            style={{
              width: 30,
              height: 30,
              backgroundColor: Theme.placeHolderColor,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign
              name={'shoppingcart'}
              color={Theme.secondary}
              size={15}
            />
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
                {this.state.cart}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{}}>
            <SwiperFlatList
              // autoplay
              // autoplayDelay={2}
              // autoplayLoop
              // index={2}
              showPagination
              paginationStyle={{bottom: hp('-5%')}}
              paginationStyleItem={{
                width: 5,
                height: 5,
                backgroundColor: Theme.primary,
              }}
              paginationActiveColor={Theme.primary}
              data={colors}
              renderItem={({item}) => (
                <View style={[styles.child, {backgroundColor: item}]}>
                  <Image style={styles.image} source={item} />
                </View>
              )}
            />
          </View>
          <View style={[styles.containerOfNameAndPrice]}>
            <Text style={{fontSize: Theme.fontBoldHeadings}}>
              Nike (Air Max)
            </Text>
            <Text
              style={{fontSize: Theme.fontSubBoldHeadings, fontWeight: 'bold'}}>
              $150
            </Text>
          </View>
          <View style={[styles.containerOfNameAndPrice, {marginTop: '1%'}]}>
            <Text style={{fontFamily: Theme.gilRoySemiBold}}>
              Delivery Option
            </Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.blixurBtn}>
                <Text style={{color: '#ffffff', fontSize: Theme.fontVerySmall}}>
                  Blixur +
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: Theme.fontVerySmall,
                  color: Theme.subSecondary,
                }}>
                Coming soon
              </Text>
            </View>
          </View>
          <View style={styles.containerOfAddress}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather name="map-pin" size={20} color={Theme.subSecondary} />
              <Text
                style={{
                  width: wp('50%'),
                  marginStart: '5%',
                  fontFamily: Theme.gilRoyRegular,
                  fontSize: Theme.fontSmall,
                  color: Theme.subSecondary,
                }}>
                Deliver to Lahore, Civil Lines, Johar Town 208001
              </Text>
            </View>
            <TouchableOpacity style={styles.changeBtn}>
              <Text style={{color: Theme.secondary, fontSize: Theme.fontSmall}}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: wp('5%'),
              // backgroundColor: 'yellow',
              height: hp('30%'),
            }}>
            <Text style={{fontFamily: Theme.gilRoySemiBold}}>
              Product Description
            </Text>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={{
                marginTop: '5%',
                color: Theme.subSecondary,
                fontSize: Theme.fontSmall,
              }}>
              {`I have the skills and qualifications to provide the  selected services. This statement apply to future services you may add. I have the skills and qualifications to provide the  selected services. This statement apply to future services you may add. I have the skills and qualifications to provide the  selected services.`}
            </Text>
            <View style={styles.BuyNowAndAdtoCartBtn}>
              <SmallBtn
                txt={'Buy Now'}
                width={wp('40%')}
                bgColor={Theme.primary}
                height={hp('5%')}
                elevation={5}
                radius={10}
                color={Theme.secondary}
                onPress={() => this.props.navigation.navigate('Cart')}
              />
              <SmallBtn
                txt={'Add to Cart'}
                width={wp('40%')}
                bgColor={Theme.secondary}
                height={hp('5%')}
                elevation={5}
                radius={10}
                onPress={() => this.setState({cart: this.state.cart + 1})}
              />
            </View>
            <SmallBtn
              txt={'View Profile'}
              width={wp('35%')}
              bgColor={Theme.primary}
              height={hp('3.5%')}
              elevation={5}
              radius={20}
              color={Theme.secondary}
              onPress={() => this.props.navigation.navigate('ViewProfile')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    height: hp('8%'),
  },
  child: {
    width,
    height: hp('20%'),
    // backgroundColor: 'blue',
  },
  image: {
    width: wp('100%'),
    resizeMode: 'contain',
    height: hp('20%'),
  },
  containerOfNameAndPrice: {
    // backgroundColor: 'red',
    marginTop: '5%',
    paddingStart: '5%',
    paddingEnd: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
    height: hp('8%'),
  },
  containerOfAddress: {
    marginStart: wp('5%'),
    marginEnd: wp('5%'),
    padding: wp('5%'),
    backgroundColor: Theme.lightBackground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    height: hp('10%'),
  },
  BuyNowAndAdtoCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  changeBtn: {
    width: wp('20%'),
    height: hp('4%'),
    backgroundColor: Theme.placeHolderColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  blixurBtn: {
    width: wp('15%'),

    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
});
