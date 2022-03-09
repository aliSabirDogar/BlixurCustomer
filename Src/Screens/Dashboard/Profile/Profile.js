import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../../Utils/Theme.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-paper';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        {
          name: 'Nike(Air Max)',
          status: 'Delivered',
         // img: 'https://images.unsplash.com/photo-1616258374372-6801d31bdbed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          img: require('../../../assets/images/pp3.png'),
        },
        {
          name: 'Apple  Tv',
          status: 'On Way',
         // img: 'https://d30fs77zq6vq2v.cloudfront.net/product/1000x1000/18022021/73_1613645903-1525591506451.jpg',
         img: require('../../../assets/images/appletv.jpg'),
        },
        {
          name: 'Hair Cut',
          status: 'Delivered',
        //  img: 'https://www.catfootwear.com/on/demandware.static/-/Sites-catfootwear_us-Library/default/dw2b1072c2/content/seasonal-content/homepage/2021/06/women-casual-2.jpg',
        img: require('../../../assets/images/haircut.jpg'),
        },

        {
          name: 'Nike(Air Max)',
          status: 'Delivered',
         // img: 'https://www.catfootwear.com/on/demandware.static/-/Sites-catfootwear_us-Library/default/dw2b1072c2/content/seasonal-content/homepage/2021/06/women-casual-2.jpg',
         img: require('../../../assets/images/cosmetologists.png'),
        },
      ],
    };
  }
  renderCart = ({item, index}) => {
    return (
      <View>
        <View style={styles.itemView}>
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemStatusTxt}>Status</Text>
            <Text
              style={{
                color: item.status == 'Delivered' ? 'green' : 'orange',
                fontSize: Theme.fontNormal,
              }}>
              {item.status}
            </Text>
          </View>

          <Card
            style={[styles.itemImgView, {backgroundColor: Theme.secondary}]}>
            <View
              style={[styles.itemImgView, {backgroundColor: Theme.secondary}]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Refund')}>
                <Image style={styles.itemImgView} source={ item.img} />
              </TouchableOpacity>
            </View>
          </Card>
        </View>
        <View style={styles.bottomLine} />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <AntDesign name={'arrowleft'} size={20} />
          <View style={styles.cameraView}>
            <AntDesign name={'camerao'} />
          </View>
        </View>
        {/* Header */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.imgView, {backgroundColor: Theme.secondary}]}>
            <Image
              style={styles.imgView}
              source={{
               // uri: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                  uri: 'https://i0.wp.com/www.popcreep.com/wp-content/uploads/2021/05/170613339_361876398466072_3521367791228944131_n.jpg?resize=618%2C618&ssl=1',              
              }}
            /> 

            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('OptionalDetails')
                }
                style={[
                  styles.profileImgInCard,
                  {backgroundColor: Theme.secondary, bottom: hp('3%')},
                ]}>
                <Image
                  style={styles.profileImgInCard}
                  source={{
                    uri: 'https://i0.wp.com/www.popcreep.com/wp-content/uploads/2021/05/170613339_361876398466072_3521367791228944131_n.jpg?resize=618%2C618&ssl=1',
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.nameTxt}>Robin Bladimir</Text>
            </View>
          </View>
          <View style={styles.secondMain}>
            <Text style={styles.heading}>Your Order & Services</Text>
            {/* <View style={styles.bottomLine} /> */}
            <View style={{marginTop: hp('5%')}}>
              <FlatList data={this.state.cart} renderItem={this.renderCart} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.secondary,
  },
  imgView: {
    height: hp('40%'),
    width: wp('100%'),

    // transform: [{rotate: '-5deg'}],
  },
  card: {
    width: wp('80%'),
    height: hp('20%'),
    backgroundColor: Theme.secondary,
    position: 'absolute',
    bottom: hp('-5%'),
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 10,
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImgInCard: {
    width: wp('22%'),
    height: hp('18%'),

    borderRadius: 10,
    elevation: 10,
    // position: 'absolute',
  },
  nameTxt: {
    marginStart: wp('3%'),
    fontFamily: Theme.gilRoySemiBold,
    fontSize: Theme.fontBoldHeadings,
  },
  secondMain: {marginTop: hp('5%'), padding: wp('5%')},
  heading: {
    fontFamily: Theme.gilRoyExtraBold,
    fontSize: Theme.fontBoldHeadings,
    fontWeight:'bold'
   // textDecorationLine: 'underline',
  },
  itemView: {
    flexDirection: 'row',
    // marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    color: Theme.subSecondary,
    fontFamily: Theme.gilRoySemiBold,
    fontSize: Theme.fontBoldHeadings,
  },
  itemStatusTxt: {
    color: Theme.subSecondary,
    fontFamily: Theme.gilRoyRegular,
    marginTop: hp('1.5%'),
    fontSize: Theme.fontSmall,
  },
  itemImgView: {
    width: wp('40%'),
    height: hp('10%'),
    marginEnd: wp('1%'),
    borderRadius: 20,
    elevation: 5,
  },
  bottomLine: {
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
    height: 0.5,
    // width: wp('60%'),
    backgroundColor: Theme.placeHolderColor,
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 999999,
    width: wp('100%'),
    padding: wp('5%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cameraView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
