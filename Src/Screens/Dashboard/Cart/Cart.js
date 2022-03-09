import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../../../Utils/Theme';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import {Card} from 'react-native-paper';
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
     cart: [
        {
                    
      // img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
         img: require('../../../assets/images/pp1.png'),
      name: 'Mens Sports Shoes',
          price: '$35',
        },
        {
     //   img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
          img: require('../../../assets/images/pp2.png'),
     name: 'Mens Sports Shoes',
          price: '$35',
        },

        {
          
      //   img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
           img: require('../../../assets/images/pp3.png'),
      name: 'Mens Sports Shoes',
          price: '$35',
        },
         {

     //    img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
             img: require('../../../assets/images/pp4.png'),
     name: 'Mens Sports Shoes',
           price: '$35',
         },
      ],
    };
  }
  renderCart = ({item, index}) => {
    return (
      <View style={{}}>
        <Card
          elevation={3}
          style={{
            // flexDirection: 'row',
            width: wp('85%'),
            // alignItems: 'center',
            marginTop: hp('1%'),
            marginBottom: hp('1%'),
            marginStart: '2%',
            marginEnd: '2%',

            // backgroundColor: Theme.secondary,
            // elevation: 5,
            borderRadius: 20,
          }}>
          <View style={styles.itemSty}>
            {/* imageView */}
            <View style={styles.imgView}>
              <Image style={styles.imgSty} source={item.img} />
            </View>
            <View style={styles.txtView}>
              <Text style={{fontSize:15, color:Theme.gray, fontFamily:Theme.gilRoyMedium}}>{item.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // backgroundColor: 'red',
                  width: wp('50%'),
                }}>
                <View style={{flexDirection:'row'}}>
                  <View style={{marginTop:5}}>
                <Text style={{fontSize:15, color:Theme.primary, fontFamily:Theme.gilRoyMedium, fontWeight:'bold'}}>{item.price}</Text>
                </View>
                <View style={{marginTop:5, marginLeft:10}}>
                <Text style={{fontSize:15, color:Theme.gray, fontFamily:Theme.gilRoyMedium, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> {item.price}</Text>
                </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: 'blue',
                    width: wp('15%'),
                    justifyContent: 'space-between',
                  }}>
                  <AntDesign name="minus" />
                  <TouchableOpacity
                    style={{
                      width: wp('5%'),
                      height: wp('5%'),
                      backgroundColor: Theme.secondary,
                      // elevation: 5,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,

                      elevation: 2,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: Theme.fontSmall}}>1</Text>
                  </TouchableOpacity>
                  <AntDesign name="plus" />
                </View>
              </View>
            </View>
          </View>
        </Card>
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
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{alignItems: 'center', width: '100%', padding: 10}}>
          <Text
            style={{
              color: Theme.secondary,
              fontSize: Theme.fontBoldHeadings,
              fontFamily: Theme.gilRoySemiBold,
            }}>
            Your Cart
          </Text>
        </View>
        <View style={styles.secondMain}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: Theme.gilRoySemiBold,
                color: Theme.gray,
                fontSize:18
              }}>
              4 Products
            </Text>
            <FlatList data={this.state.cart} renderItem={this.renderCart} />
            <View
              style={{
                flexDirection: 'row',
                width: wp('70%'),
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                marginBottom: 10,
                marginTop: hp('1%'),
                borderBottomWidth: 0.5,
                borderBottomColor: Theme.subSecondary,
              }}>
              <Text
                style={{
                 color: Theme.gray,
                fontFamily: Theme.gilRoyRegular,
              fontSize:16,
            fontWeight:'bold',
                  opacity:0.955555,
                }}>
                SubTotal
              </Text>
              <Text
                style={{
                  color: Theme.gray,
                fontFamily: Theme.gilRoyRegular,
              fontSize:16,
            fontWeight:'bold',
                  opacity:0.955555,
                }}>
                $455
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: wp('70%'),
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                marginBottom: hp('1%'),
                borderBottomWidth: 0.5,
                borderBottomColor: Theme.subSecondary,
              }}>
              <Text
                style={{
                  color: Theme.gray,
                fontFamily: Theme.gilRoyRegular,
              fontSize:16,
            fontWeight:'bold',
                  opacity:0.955555,
                }}>
                Shipping
              </Text>
              <Text
                style={{
                  color: Theme.gray,
                fontFamily: Theme.gilRoyRegular,
              fontSize:16,
            fontWeight:'bold',
                  opacity:0.955555,
                }}>
                $455
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: wp('80%'),
                justifyContent: 'space-between',
                marginTop: hp('2%'),
                borderBottomWidth: 0.5,
                borderBottomColor: Theme.subSecondary,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Theme.subSecondary,
                  fontFamily: Theme.gilRoySemiBold,
                  fontWeight:'bold',
                  fontSize:Theme.fontSubNormal,
                }}>
                Total
              </Text>
              <Text
                style={{
                  // color: Theme.subSecondary,
                  fontFamily: Theme.gilRoyRegular,
                  fontSize: Theme.fontBoldHeadings,
                  fontWeight:'bold'
                }}>
                $455
              </Text>
            </View>
            <SmallButton
              txt={'Check Out'}
              bgColor={Theme.primary}
              width={wp('40%')}
              height={hp('4%')}
              radius={15}
              color={Theme.secondary}
              onPress={() => this.props.navigation.navigate('CheckOut')}
            />
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
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    alignItems: 'center',
    paddingTop: '5%',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  itemSty: {
    flexDirection: 'row',
    width: wp('85%'),
    alignItems: 'center',
    // marginTop: hp('1%'),
    // marginBottom: hp('1%'),
    // marginRight: '2%',
    // marginLeft: '2%',

    backgroundColor: Theme.secondary,
    // elevation: 5,
    borderRadius: 20,
  },
  imgView: {
    width: wp('25%'),
    height: hp('10%'),
    backgroundColor: Theme.secondary,
    elevation: 5,
    borderRadius: 20,
  },
  imgSty: {
    width: wp('25%'),
    height: hp('10%'),
    borderRadius: 20,
  },
  txtView: {
    marginStart: '5%',
  },
});
