import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Theme from '../../../Utils/Theme';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from 'react-native-modal';
import {borderRadius} from 'styled-system';
export default class Raffles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: [],
      visible: true,
      entries: [
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/iphoneRaff.jpg'),
        },
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/iphoneRaff1.jpg'),
        },
      ],
      activeSlide: '',
      sizes: [
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
        'M 3.5/W 5',
      ],
    };
  }
  // for selecting each item
  selectItem = index => {
    if (this.state.selectedIndex.indexOf(index) > -1) {
      const newArray = this.state.selectedIndex.filter(indexObject => {
        if (indexObject == index) {
          return false;
        }
        return true;
      });
      // alert('click');
      this.setState({selectedIndex: newArray});
    } else {
      if (this.state.selectedIndex.length < 1) {
        // alert(index);
        this.setState({selectedIndex: [...this.state.selectedIndex, index]});
      }
    }
  };
  // for selecting each item

  _renderItem = ({item, index}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          style={{
            height: hp('25%'),
            width: wp('70%'),
            resizeMode: 'cover',
            borderRadius: 50,
          }}
          source={item.img}
        />
      </View>
    );
  };
  //   get pagination() {
  //     // const {entries, activeSlide} = this.state;
  //     return (
  //       <Pagination
  //         dotsLength={this.state.entries.length}
  //         activeDotIndex={this.state.activeSlide}
  //         // containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
  //         dotStyle={{
  //           width: 10,
  //           height: 10,
  //           borderRadius: 5,
  //           //   marginHorizontal: 8,
  //           backgroundColor: Theme.primary,
  //         }}
  //         inactiveDotStyle={
  //           {
  //             // Define styles for inactive dots here
  //           }
  //         }
  //         inactiveDotOpacity={0.4}
  //         inactiveDotScale={0.6}
  //       />
  //     );
  //   }
  renderProduct = ({item, index}) => {
    return (
      <View style={{marginEnd: 10}}>
        <TouchableOpacity
          onPress={() =>
            this._carousel.snapToItem(
              index,
              //   (animated = true),
              //   (fireCallback = true),
            )
          }>
          <Image
            style={{
              width: wp('12%'),
              height: hp('6%'),
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            source={item.img}
          />
        </TouchableOpacity>
      </View>
    );
  };
  //   renderSizes = ({item, index}) => (
  //     <View>
  //       <TouchableOpacity
  //         onPress={() => this.selectItem(index)}
  //         style={{
  //           width: wp('20%'),
  //           height: hp('4%'),
  //           backgroundColor:
  //             this.state.selectedIndex.indexOf(index) > -1
  //               ? Theme.placeHolderColor
  //               : Theme.secondary,
  //           marginEnd: 10,
  //           marginTop: 10,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           borderRadius: 20,
  //           elevation: 5,
  //           marginBottom: 5,
  //         }}>
  //         <Text style={{fontSize: Theme.fontSmall}}>{item}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <RBSheet
          ref={ref => {
            this.RBSheet = ref;
            // this.state.selectedIndex = ref;
          }}
          height={hp('50%')}
          openDuration={250}
          closeOnDragDown={true}
          customStyles={{
            container: {
              //   justifyContent: 'center',
              //   alignItems: 'center',
              borderTopStartRadius: 40,
              borderTopEndRadius: 40,
            },
          }}>
          <View style={{width: wp('100%'), padding: '5%'}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: Theme.fontBoldHeadings,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Select Size
            </Text>
            <FlatList
              data={this.state.sizes}
              renderItem={this.renderSizes}
              numColumns={4}
              extraData={this.state.selectedIndex}
            />
            <SmallButton
              txt={'Continue'}
              bgColor={Theme.primary}
              width={'50%'}
              height={hp('4%')}
              radius={20}
              color={Theme.secondary}
              onPress={() => this.props.navigation.navigate('ProductDesc')}
            />
          </View>
        </RBSheet> */}
        {/* HEader */}
        <View style={styles.headerView}>
          <AntDesign
            name={'arrowleft'}
            size={20}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingTxt}>IPhone</Text>
          <View style={styles.containerOfCaraousalAndBtns}>
            <TouchableOpacity
              onPress={() => {
                this._carousel.snapToPrev();
              }}
              style={styles.nextAndPrevBtn}>
              <IonIcon name="chevron-back" color={Theme.secondary} />
            </TouchableOpacity>
            <View>
              <Carousel
                ref={c => {
                  this._carousel = c;
                }}
                // layout={'stack'}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={wp('70%')}
                //   sliderHeight={wp('60%')}
                itemWidth={wp('70%')}
                scrollEnabled={false}
                // style={{alignSelf: 'center'}}
                onSnapToItem={index => this.setState({activeSlide: index})}
              />
              {this.pagination}
            </View>
            <TouchableOpacity
              onPress={() => {
                this._carousel.snapToNext();
              }}
              style={styles.nextAndPrevBtn}>
              <IonIcon name="chevron-forward" color={Theme.secondary} />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: hp('5%')}}>
            <FlatList
              data={this.state.entries}
              renderItem={this.renderProduct}
              horizontal
            />
          </View>
          <View style={{padding: '5%', marginTop: hp('1%')}}>
            <Text
              style={{
                // fontWeight: 'bold',
                fontSize: Theme.fontBoldHeadings,
                marginBottom: hp('3%'),
                fontFamily: Theme.gilRoyExtraBold,
              }}>
              iPhone 12 pro ($1500)
            </Text>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={{
                fontSize: Theme.fontSmall,
                fontFamily: Theme.gilRoyRegular,
              }}>
              {`Nike will forever change the way you use headphones. Whenever you pull your AirPods out of the charging case, they instantly turn on and connect to your iPhone, Apple Watch, iPad, or Mac. ... Driven by the custom Apple W1 chip, AirPods use optical sensors and a motion accelerometer to detect when they're in your ears`}
            </Text>
            <View style={styles.drawFeeView}>
              <Text
                style={{
                  // fontWeight: 'bold',
                  fontSize: Theme.fontNormalBoldHeadings,
                  // marginBottom: hp('3%'),
                  fontFamily: Theme.gilRoyExtraBold,
                }}>
                Draw Fee*
              </Text>
              <Text>$10</Text>
            </View>
            <Text
              style={{
                fontSize: Theme.fontSmall,
                fontFamily: Theme.gilRoyRegular,
                marginTop: hp('1%'),
              }}>
              {`*In order to win Air pod you have to pay small fee and you added in lucky draw*`}
            </Text>
            <SmallButton
              txt={'Enter Draw'}
              bgColor={Theme.primary}
              width={wp('50%')}
              height={hp('4%')}
              radius={20}
              color={Theme.secondary}
              onPress={() =>
                this.props.navigation.navigate('Payment', {luckyDraw: true})
              }
            />
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
  headerView: {
    paddingStart: '5%',
    paddingTop: '5%',
  },
  drawFeeView: {
    backgroundColor: Theme.lightBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    marginTop: hp('2%'),
  },
  headingTxt: {
    fontSize: Theme.fontBoldHeadings,
    textAlign: 'center',
    fontFamily: Theme.gilRoyExtraBold,
  },
  nextAndPrevBtn: {
    backgroundColor: Theme.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOfCaraousalAndBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: hp('5%'),
    // height: hp('50%'),
    // backgroundColor: 'red',

    // backgroundColor: 'red',
  },
});
