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

export class BrandsOfTheWeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandsOfTheWeek: [
        {
          name: 'IPHONE',
          img: require('../../assets/images/logo8.png'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/logo2.png'),
        },
        {
          name: 'IPHONE',
          img: require('../../assets/images/logo5.png'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/logo3.png'),
        },
        {
          name: 'IPHONE',
          img: require('../../assets/images/logo8.png'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/logo9.png'),
        },
      ],
    };
  }
  renderBrands = ({item, index}) => {
    const {navigation} = this.props.navigation;
    return (
      <View style={{marginEnd: 10}}>
        <Card elevation={3}
          style={{
            width: wp('60%'),
            height: hp('20%'),
            // elevation: 5,
            borderRadius: 10,
            // backgroundColor: Theme.secondary,
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Products', {
                profilesProduct: false,
                data: 'Brands of the Week',
              })
            }
            style={{
              width: wp('60%'),
              height: hp('20%'),
              // elevation: 5,
              borderRadius: 10,
              // backgroundColor: Theme.secondary,
              // alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ImageBackground
              imageStyle={{
                width: wp('60%'),
                height: hp('20%'),
                borderRadius: 10,
                // opacity: 0.5,
                backgroundColor: Theme.primary,
              }}
              style={{
                width: wp('60%'),
                height: hp('20%'),
                borderRadius: 10,
                justifyContent: 'center',
                paddingStart: '10%',
                // opacity: 0.8,
                // backgroundColor: 'black',
              }}
              source={item.img}></ImageBackground>
            {/* <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              position: 'absolute',
              marginStart: '10%',
            }}>
            {item.name}
          </Text> */}
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
          data={this.state.brandsOfTheWeek}
          renderItem={this.renderBrands}
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
