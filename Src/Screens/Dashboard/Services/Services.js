import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
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
export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outer: this.props.route.params.outer,
      shopBrands: [
        {
          name: 'Photographer',
          img: require('../../../assets/images/photoGrapher.png'),
        },
        {
          name: 'Trainer',
          img: require('../../../assets/images/trainer.png'),
        },
        {
          name: 'Barbering',
          img: require('../../../assets/images/barbering.png'),
        },
        {
          name: 'Cosmetolist',
          img: require('../../../assets/images/cosmetologists.png'),
        },
        {
          name: 'Tutor',
          img: require('../../../assets/images/tutor.png'),
        },
        {
          name: 'Home Maintainance',
          img: require('../../../assets/images/homemaintainence.jpg'),
        },
         {
          name: 'View All',
          img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
         },
      ],
    };
  }
  renderShopBrands = ({item, index}) => {
    return (
      <View
        style={{
          marginEnd: 10,
          marginStart: 10,
          marginBottom: 20,
          marginTop: 5,
        }}>
        <TouchableOpacity
          onPress={() =>
            this.state.outer == true
              ? this.props.navigation.navigate('SignIn')
              : this.props.navigation.navigate('SubCategory')
          }
          activeOpacity={0.9}
          style={{
            width: wp('40%'),
            height: hp('25%'),
            backgroundColor: Theme.secondary,
            borderRadius: 10,
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageBackground
            imageStyle={{
              width: wp('40%'),
              height: hp('25%'),
              borderRadius: 10,
              opacity: 0.6,
              backgroundColor: Theme.primary,
              resizeMode: 'cover',
            }}
            // resizeMode="cover"
            style={{
              width: wp('40%'),
              height: hp('25%'),
              borderRadius: 10,

              //   justifyContent: 'center',
              //   paddingStart: '10%',

              backgroundColor: 'black',
            }}
            source={item.img}></ImageBackground>

          <Text
            style={{
              position: 'absolute',
              color: Theme.secondary,
              fontFamily: Theme.gilRoyExtraBold,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
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
            color={'#ffffff'}
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
        <View style={{alignItems: 'center', width: '100%', marginBottom:15}}>
          <Text style={styles.heading}>{'Services'}</Text>
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
    fontFamily: Theme.gilRoyExtraBold,
  },
});
