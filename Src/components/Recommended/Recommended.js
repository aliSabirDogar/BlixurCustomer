import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../Utils/Theme';
import {Card} from 'react-native-paper';

export class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendedList: [
        {
          name: 'Shop Brands',
          img: require('../../assets/images/business.jpg'),
        },
        {
          name: 'Services',
          img: require('../../assets/images/services.jpeg'),
        },
      ],
    };
  }
  renderRecommended = ({item, index}) => {
    const {navigation} = this.props.navigation;
    return (
      <View style={{}}>
        <Card
          elevation={3}
          // activeOpacity={0.6}
          style={{
            width: wp('55%'),
            height: hp('12%'),
            // elevation: 5,
            borderRadius: 15,
            backgroundColor: Theme.secondary,
            // justifyContent: 'center',
            marginEnd: 10,
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              item.name == 'Shop Brand'
                ? navigation.navigate('ShopBrands')
                : navigation.navigate('Services', {outer: false})
            }
            style={{
              width: wp('55%'),
              height: hp('12%'),
              // elevation: 5,
              borderRadius: 15,
              backgroundColor: Theme.secondary,
              justifyContent: 'center',
              marginEnd: 10,
            }}>
            <ImageBackground
              resizeMode="cover"
              imageStyle={{
                width: wp('55%'),
                height: hp('12%'),
                borderRadius: 15,
                opacity: 0.6,
                backgroundColor: Theme.primary,
              }}
              style={{
                width: wp('55%'),
                height: hp('12%'),
                borderRadius: 15,
                justifyContent: 'center',
                paddingStart: '10%',

                backgroundColor: 'black',
              }}
              source={item.img}></ImageBackground>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                position: 'absolute',
                marginStart: '10%',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };
  render() {
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.recommendedList}
          renderItem={this.renderRecommended}
          horizontal
          contentContainerStyle={{
            paddingStart: '5%',
            paddingTop: '5%',
            paddingEnd: '5%',
            paddingBottom: '2%',
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
