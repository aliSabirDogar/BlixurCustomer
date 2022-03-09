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
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TxtInput from '../../../components/TxtInputs/TxtInput';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import RBSheet from 'react-native-raw-bottom-sheet';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import {Card} from 'react-native-paper';
export default class ShopBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopBrands: [
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/log1.jpeg'),
        },
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/log2.jpeg'),
        },
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/log3.jpeg'),
        },
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/log4.jpeg'),
        },
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/log5.jpeg'),
        },
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/log6.jpeg'),
        },
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/log1.jpeg'),
        },
        {
          name: 'Yummy Air',
          img: require('../../../assets/images/log4.jpeg'),
        },
      ],
      sizes: [
        'Bags And Travel',
        'Skin Care',
        'Fashion',
        'Bags And Travel',
        'Bags And Travel',
        'Bags And Travel',

        // 'M 3.5/W 5',
        // 'M 3.5/W 5',
      ],
      selectedIndex: [],
    };
  }

  // for selecting each item
  selectItem = async index => {
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
      // alert(index);
      // if (this.state.selectedIndex.length > 0) {
      //   await this.setStates();
      //   await this.setStates1(index);
      // } else {
      this.setState({selectedIndex: [...this.state.selectedIndex, index]});
      // }
    }
  };
  // setStates = async () => {
  //   this.setState({selectedIndex: []});
  // };
  // setStates1 = async index => {
  //   this.setState({selectedIndex: [...this.state.selectedIndex, index]});
  // };
  renderFilterCate = ({item, index}) => (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => this.selectItem(index)}
        style={{
          width: wp('40%'),
          height: hp('4%'),
          backgroundColor:
            this.state.selectedIndex.indexOf(index) > -1
              ? Theme.placeHolderColor
              : Theme.secondary,
          marginEnd: wp('1%'),
          marginStart: wp('1%'),
          marginTop: hp('1%'),
          // alignItems: 'center',
          paddingStart: 5,
          justifyContent: 'center',
          borderRadius: 20,
          // elevation: 2,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
          marginBottom: 5,
        }}>
        <Text style={{fontSize: Theme.fontSmall}}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
  renderShopBrands = ({item, index}) => {
    return (
      <View
        style={{
          marginEnd: 10,
          marginStart: 10,
          marginBottom: 20,
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
            onPress={() => this.props.navigation.navigate('ViewProfile')}
            activeOpacity={0.9}
            style={{
              width: wp('40%'),
              height: hp('25%'),
              backgroundColor: Theme.secondary,
              borderRadius: 10,
              elevation: 5,
            }}>
            <Image
              style={{
                width: wp('40%'),
                height: hp('22%'),
                // backgroundColor: Theme.secondary,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,

                // elevation: 10,
              }}
              source={item.img}
            />
            <Card
              elevation={3}
              style={{
                backgroundColor: Theme.secondary,
                // elevation: 2,
                height: hp('5%'),
                width: '100%',
                borderRadius: 10,
                position: 'absolute',
                bottom: 0,
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: Theme.secondary,
                  // elevation: 2,
                  height: hp('5%'),
                  width: '100%',
                  borderRadius: 10,
                  position: 'absolute',
                  bottom: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: Theme.fontNormal}}>Yummy Air</Text>
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
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
            // this.state.selectedIndex = ref;
          }}
          // height={hp('60%')}
          openDuration={250}
          closeOnDragDown={true}
          // closeOnPressMask={false}
          customStyles={{
            container: {
              flex: 1,
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
                // backgroundColor: 'red',
              }}>
              Categories
            </Text>
            <View style={{alignItems: 'center'}}>
              <FlatList
                data={this.state.sizes}
                renderItem={this.renderFilterCate}
                numColumns={2}
                extraData={this.state.selectedIndex}
              />
            </View>
            <SmallButton
              txt={'Search'}
              bgColor={Theme.primary}
              width={'50%'}
              height={hp('4%')}
              radius={20}
              color={Theme.secondary}
              // onPress={() => this.props.navigation.navigate('ProductDesc')}
            />
          </View>
        </RBSheet>
        <View style={styles.containerOfDrawerAndCart}>
          <AntDesign
            // style={{marginStart: '5%'}}
            size={20}
            name={'arrowleft'}
            color={'#ffffff'}
            onPress={() => this.props.navigation.goBack()}
          />
          <FontAwesome
            style={{marginStart: '5%'}}
            size={20}
            name={'filter'}
            color={'#ffffff'}
            onPress={() => this.RBSheet.open()}
          />
        </View>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={styles.heading}>Shop Brands</Text>
          <TxtInput
            height={hp('5%')}
            placeHolder={'What are you looking for'}
            radius={20}
            bottom={'5%'}
            width={'90%'}
            top={'2%'}
          />
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
  },
});
