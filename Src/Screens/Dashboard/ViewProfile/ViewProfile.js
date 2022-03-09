import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from 'styled-system';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import Theme from '../../../Utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
       // require('../../../assets/images/logo5.png'),
       // require('../../../assets/images/logo8.png'),
       // require('../../../assets/images/logo9.png'),
        // Network image
      ],
    };
  }
  renderProduct = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          this.props.navigation.navigate('Products', {data: `Yammy's Viewed`})
        }>
        <View
          style={{
            backgroundColor: Theme.secondary,
            elevation: 10,
            marginBottom: 10,
          }}>
          <Image style={{width: wp('90%'), height: hp('60%')}} source={item} />
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <AntDesign
          style={styles.header}
          name={'arrowleft'}
          size={Theme.fontBoldHeadings}
          onPress={() => this.props.navigation.goBack()}
        />
       
          <Image
            style={{height: hp('100%'), alignItems:'center', justifyContent:'center', width:'100%'}}
            resizeMode={'cover'}
            source={
               require('../../../assets/images/Shopping.jpg')
             // uri: 'https://images.unsplash.com/photo-1581841064838-a470c740e8ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            }
          />

          <View style={{padding: '5%'}}>
            <FlatList
              data={this.state.product}
              renderItem={this.renderProduct}
            />
          </View>
        
        <View style={styles.cardView}>
          <View
            style={{
              width: 80,
              height: 100,
              backgroundColor: '#ffffff',
              position: 'absolute',
              top: -20,
              left: 20,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}>
            <Image
              style={{width: 80, height: 100, borderRadius: 10}}
              source={
                require('../../../assets/images/log1.jpeg')
              //  uri: 'https://images.unsplash.com/photo-1581841064838-a470c740e8ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
              }
            />
          </View>
          <View style={{marginStart: 115, marginEnd: 10, marginTop:10}}>
            <Text style={{fontSize: Theme.fontBoldHeadings, fontWeight:'bold'}}>Crown Rags </Text>
            <View style={{marginTop:5}}> 
            <Text style={{fontSize: 12, opacity:0.4555555, fontWeight:'700'}}>Clothing (Brand)</Text>
            </View>     
            <View style={{marginTop:3,  opacity:0.4555555}}> 
            <Text style={{fontSize:12,  fontWeight:'bold'}}>Founded 2021 </Text>
            </View>
            <View style={{borderBottomWidth: 0.5, marginTop: 5, opacity:0.5555555}} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={hp('1.5%')}
                ratingBackgroundColor={'transparent'}
                readonly={true}
                style={{alignSelf: 'flex-start'}}
                // showRating
                // onFinishRating={this.ratingCompleted}
              />
              <View style={{marginLeft:5}}>
                 <Text style={{fontSize: Theme.fontVerySmall, color:Theme.gray}}>Rating 4.9</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <SmallButton
              onPress={() =>
                this.props.navigation.navigate('Products', {
                  profilesProduct: true,
                  data: `Yammy's Product`,
                })
              }
              txt={'Shop'}
              width={wp('30%')}
              bgColor={Theme.primary}
              color={Theme.secondary}
              height={hp('3.5%')}
              elevation={10}
              radius={15}
            />
            <SmallButton
              onPress={() => this.props.navigation.navigate('Messages')}
              txt={'Message'}
              width={wp('30%')}
              bgColor={Theme.secondary}
              height={hp('3.5%')}
              elevation={10}
              radius={15}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    color: Theme.secondary,
    zIndex: 9999999,
    margin: wp('5%'),
    elevation: 5,
    // opacity: 0.9,
    // backgroundColor: Theme.secondary,
  },
  mainContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  cardView: {
    backgroundColor: Theme.secondary,
    position: 'absolute',
    // padding: wp('10%'),
    width: wp('85%'),
    // height: hp('20%'),
    bottom: hp('10%'),
    borderRadius: 15,
    alignSelf: 'center',
    // alignItems: 'center',
    // zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    // opacity: 0.8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: wp('70%'),
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: '5%',
    // marginTop: '10%',
  },
});
