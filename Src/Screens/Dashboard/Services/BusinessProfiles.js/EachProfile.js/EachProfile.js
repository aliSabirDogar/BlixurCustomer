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
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../../../../Utils/Theme.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class EachProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          name: 'Baba Hair cut',
          rating: '4.9',
          img: 'https://uploads-ssl.webflow.com/5cac67740ca8b550d4e98db6/5e33deee6902d6ddc14821f5_Roselands-Hero-02.jpg',
        },
        {
          name: 'Baba Hair cut',
          rating: '4.9',
          img: 'https://uploads-ssl.webflow.com/5cac67740ca8b550d4e98db6/5e33deee6902d6ddc14821f5_Roselands-Hero-02.jpg',
        },
        {
          name: 'Baba Hair cut',
          rating: '4.9',
          img: 'https://uploads-ssl.webflow.com/5cac67740ca8b550d4e98db6/5e33deee6902d6ddc14821f5_Roselands-Hero-02.jpg',
        },
      ],
    };
  }
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  renderServices = ({item, index}) => {
    return (
      <View>
        <View
          style={[
            styles.itemView,
            {
              backgroundColor: Theme.secondary,
              elevation: 5,
              marginBottom: hp('2%'),
            },
          ]}>
          <Image
            style={[
              styles.itemView,
              {
                height: hp('18%'),
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              },
            ]}
            source={{uri: item.img}}
          />
          <View
            style={{
              paddingStart: 10,
              paddingEnd: 10,
              paddingTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: Theme.fontSmall,
                    color: Theme.subSecondary,
                  }}>
                  Rating
                </Text>
                <Text
                  style={{
                    fontSize: Theme.fontNormal,
                    marginStart: 5,
                    color: Theme.primary,
                  }}>
                  {item.rating}
                </Text>
              </View>
            </View>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={hp('1.5%')}
              ratingBackgroundColor={'transparent'}
              readonly={true}
              // showRating
              // onFinishRating={this.ratingCompleted}
            />
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <AntDesign
            name={'arrowleft'}
            size={20}
            onPress={() => this.props.navigation.goBack()}
          />
          {/* <View style={styles.cameraView}>
            <AntDesign name={'camerao'} />
          </View> */}
        </View>
        {/* Header */}
        <ScrollView>
          <View style={[styles.imgView, {backgroundColor: Theme.secondary}]}>
            <Image
              style={styles.imgView}
              source={{
                uri: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
              }}
            />
            <View style={styles.card}>
              <TouchableOpacity
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
              <View>
                <Text style={styles.nameTxt}>Nonu Tho</Text>
                <Text style={styles.subTxt}>Phone No:+1(646)-555</Text>
                <Text style={styles.subTxt}>nonutho@gmail.coms</Text>
                <View style={styles.bottomLine} />
                <View style={styles.viewOfTwoBtns}>
                  <TouchableOpacity
                    style={styles.eachBtn}
                    onPress={() =>
                      this.props.navigation.navigate('BookAppointment')
                    }>
                    <Text style={styles.btnTxt}>Book Appointment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.eachBtn}
                    onPress={() => this.props.navigation.navigate('Messages')}>
                    <Text style={styles.btnTxt}>Message</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondMain}>
            {/* <Text style={styles.heading}>Your Order And Services</Text> */}
            <View style={{marginTop: hp('2%')}}>
              <FlatList
                data={this.state.services}
                renderItem={this.renderServices}
              />
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
  },
  imgView: {
    height: hp('40%'),
    width: wp('100%'),
    // borderBottomWidth: 5,
    // borderRightWidth: 75,
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
  },
  itemView: {
    width: wp('88%'),
    height: hp('25%'),

    borderRadius: 20,
    alignSelf: 'center',
  },
  itemName: {
    color: Theme.subSecondary,
    fontFamily: Theme.gilRoyExtraBold,
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
    height: '0.5%',
    backgroundColor: Theme.primary,
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
    elevation: 5,
  },
  subTxt: {
    marginStart: wp('3%'),
    color: Theme.subSecondary,
    fontSize: Theme.fontSmall,
  },
  bottomLine: {
    marginStart: wp('3%'),
    height: 0.5,
    backgroundColor: Theme.placeHolderColor,
    width: wp('45%'),
  },
  viewOfTwoBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: wp('3%'),
    marginTop: hp('1%'),
  },
  eachBtn: {
    width: wp('22%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.secondary,
    elevation: 3,
    padding: wp('1%'),
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: Theme.fontVerySmall,
  },
});
