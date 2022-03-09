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
import Theme from '../../../../../../Utils/Theme.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SmallButton from '../../../../../../components/SmallBtn/SmallBtn.js';
import {padding} from 'styled-system';
import {Card} from 'react-native-paper';
export default class BookAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: [],
      subServices: [
        {
          name: 'Hair cut',
          price: '10',
          img: 'https://uploads-ssl.webflow.com/5cac67740ca8b550d4e98db6/5e33deee6902d6ddc14821f5_Roselands-Hero-02.jpg',
        },
        {
          name: 'Shave',
          price: '5',
          img: 'https://uploads-ssl.webflow.com/5cac67740ca8b550d4e98db6/5e33deee6902d6ddc14821f5_Roselands-Hero-02.jpg',
        },
        {
          name: 'Hair Style',
          price: '8',
          img: 'https://uploads-ssl.webflow.com/5cac67740ca8b550d4e98db6/5e33deee6902d6ddc14821f5_Roselands-Hero-02.jpg',
        },
        {
          name: 'Hair Color',
          price: '8',
          img: 'https://uploads-ssl.webflow.com/5cac67740ca8b550d4e98db6/5e33deee6902d6ddc14821f5_Roselands-Hero-02.jpg',
        },
      ],
    };
  }
  // for selecting each item
  selectItem = async index => {
    if (this.state.selectedIndex.indexOf(index) > -1) {
      let newArray = this.state.selectedIndex.filter(indexObject => {
        if (indexObject == index) {
          return false;
        }
        return true;
      });
      //   alert('click');
      this.setState({selectedIndex: newArray});
    } else {
      //   alert(index);
      this.setState({selectedIndex: [...this.state.selectedIndex, index]});
    }
  };
  // for selecting each item
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  renderSubServices = ({item, index}) => {
    return (
      <View>
        <Card
          elevation={3}
          style={{
            backgroundColor:
              this.state.selectedIndex.indexOf(index) > -1
                ? Theme.placeHolderColor
                : Theme.secondary,
            // padding: 0,
            width: wp('88%'),
            // height: hp('5%'),
            flexDirection: 'row',
            borderRadius: 20,
            alignSelf: 'center',
            // justifyContent: 'space-between',
            backgroundColor: Theme.secondary,
            // padding: wp('3%'),
            marginBottom: hp('1%'),
            // elevation: 5,
          }}>
          <TouchableOpacity
            onPress={() => this.selectItem(index)}
            style={[
              styles.itemView,
              {
                backgroundColor:
                  this.state.selectedIndex.indexOf(index) > -1
                    ? Theme.placeHolderColor
                    : Theme.secondary,
              },
            ]}>
            <Text>{item.name}</Text>
            <Text>{`${item.price}$`}</Text>
          </TouchableOpacity>
        </Card>
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
            {/* <Image
              style={styles.imgView}
              source={{
                uri: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
              }}
            /> */}
            <View style={styles.card}>
              <View>
                <Text style={styles.nameTxt}>{`Cut & Shave Saloon`}</Text>
                <View style={styles.bottomLine} />
                <Text style={[styles.subTxt, {marginTop: hp('2%')}]}>
                  Phone No:+1(646)-555-3911
                </Text>
                <Text style={styles.subTxt}>nonutho@gmail.com</Text>
                <SmallButton
                  onPress={() => this.props.navigation.navigate('BookTiming')}
                  txt={'Book Appointment'}
                  width={wp('40%')}
                  bgColor={Theme.primary}
                  height={hp('3%')}
                  color={Theme.secondary}
                  radius={20}
                  elevation={5}
                />
              </View>
            </View>
          </View>
          <View style={styles.secondMain}>
            <Text style={styles.heading}>Services Providing</Text>
            <View style={{marginTop: hp('2%')}}>
              <FlatList
                data={this.state.subServices}
                renderItem={this.renderSubServices}
                extraData={this.state.selectedIndex}
              />
              <SmallButton
                onPress={() => this.props.navigation.navigate('BookTiming')}
                txt={'Next'}
                bgColor={Theme.primary}
                width={wp('40%')}
                height={hp('3.5%')}
                radius={20}
                color={Theme.secondary}
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
    paddingTop: '5%',
    // flexDirection: 'row',
    // alignItems: 'center',
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
    alignSelf: 'center',
  },
  itemView: {
    width: wp('88%'),
    // height: hp('5%'),
    flexDirection: 'row',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.secondary,
    padding: wp('3%'),
    // marginBottom: hp('1%'),
    elevation: 5,
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
    elevation: 5,
  },
  subTxt: {
    marginStart: wp('3%'),
    color: Theme.subSecondary,
    fontSize: Theme.fontSmall,
  },
  bottomLine: {
    // marginStart: wp('3%'),
    height: 0.5,
    backgroundColor: Theme.placeHolderColor,
    width: wp('80%'),
  },
  viewOfTwoBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: wp('3%'),
    marginTop: hp('1%'),
  },
  eachBtn: {
    width: wp('19%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.secondary,
    elevation: 5,
    padding: wp('1%'),
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: Theme.fontVerySmall,
  },
});
