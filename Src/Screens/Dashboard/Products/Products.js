import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Theme from '../../../Utils/Theme';
import Logo from '../../../assets/svgs/logo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TxtInput from '../../../components/TxtInputs/TxtInput';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-paper';
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopBrands: [
        {
          name: 'Yummy Air',
          img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
        },
        {
          name: 'Yummy Air',
          img: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-11-red-back.png',
        },
        {
          name: 'Yummy Air',
          img: 'http://cdn.mos.cms.futurecdn.net/svT379G8WNZsjn6cFabxsC.jpg',
        },
        {
          name: 'Yummy Air',
          img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
        },
        {
          name: 'Yummy Air',
          img: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-11-red-back.png',
        },
        {
          name: 'Yummy Air',
          img: 'http://cdn.mos.cms.futurecdn.net/svT379G8WNZsjn6cFabxsC.jpg',
        },
        {
          name: 'Yummy Air',
          img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
        },
      ],
      profilesProduct: this.props.route.params.profilesProduct,
      data: this.props.route.params.data,
    };
  }
  renderShopBrands = ({item, index}) => {
    return (
      <View
        style={{
          marginEnd: 10,
          marginStart: 10,
          marginBottom: hp('5%'),
          marginTop: 5,
        }}>
        <Card
          elevation={3}
          style={{
            width: wp('40%'),
            height: hp('25%'),
            backgroundColor: Theme.secondary,
            borderRadius: 10,
            // elevation: 5,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('EachProductDesc')}
            activeOpacity={0.9}
            style={{
              width: wp('40%'),
              height: hp('25%'),
              backgroundColor: Theme.secondary,
              borderRadius: 10,
              // elevation: 5,
            }}>
            <Image
              style={{
                width: wp('40%'),
                height: hp('25%'),
                // backgroundColor: Theme.secondary,
                borderRadius: 10,
                //   borderTopLeftRadius: 10,

                // elevation: 10,
              }}
              source={{uri: item.img}}
            />
            <Card
              elevation={3}
              style={{
                backgroundColor: Theme.secondary,
                // elevation: 2,
                height: hp('5%'),
                width: wp('30%'),
                borderRadius: 5,
                position: 'absolute',
                bottom: hp('-2%'),
                // alignItems: 'center',
                // justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  backgroundColor: Theme.secondary,
                  // elevation: 2,
                  height: hp('5%'),
                  width: wp('30%'),
                  borderRadius: 5,
                  position: 'absolute',
                  // bottom: hp('-2%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text>Yummy Air</Text>
              </View>
            </Card>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerOfDrawerAndCart}>
          <AntDesign
            // style={{marginStart: '5%'}}
            size={20}
            name={'arrowleft'}
            color={Theme.secondary}
            onPress={() => this.props.navigation.goBack()}
          />
          {/* <IonIcon
            style={{marginStart: '5%'}}
            size={20}
            name={'menu'}
            color={'#ffffff'}
            onPress={() => this.props.navigation.openDrawer()}
          /> */}
        </View>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={styles.heading}>{this.state.data}</Text>
          {/* <TxtInput
            height={hp('5%')}
            placeHolder={'What are you loossking for'}
            radius={20}
            bottom={'5%'}
            width={'90%'}
            top={'2%'}
          /> */}
        </View>
        <View style={styles.secondMain}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.shopBrands}
            renderItem={this.renderShopBrands}
            // horizontal
            contentContainerStyle={{marginTop: '10%'}}
            numColumns={2}
          />
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
    paddingStart: '5%',
    paddingEnd: '5%',
    // paddingTop: '10%',
    alignItems: 'center',
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
  heading: {
    color: Theme.secondary,
    fontSize: Theme.fontBoldHeadings,
    marginBottom:15
  },
});
