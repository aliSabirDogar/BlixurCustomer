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

export class MostPopular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostPopular: [
        {
          name: 'IPHONE',
          img: require('../../assets/images/logo5.png'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/logo1.png'),
        },
        {
          name: 'IPHONE',
          img: require('../../assets/images/logo5.png'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/logo1.png'),
        },
      ],
    };
  }

  renderMostPopular = ({item, index}) => {
    const {navigation} = this.props.navigation;
    return (
      <View style={{marginEnd: 10, marginBottom: 10}}>
        <Card
          elevation={3}
          style={{
            width: wp('44%'),
            height: hp('20%'),
            // elevation: 5,
            borderRadius: 15,
            backgroundColor: Theme.secondary,
            // justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewProfile')}
            // onPress={() =>
            //   navigation.navigate('Products', {
            //     profilesProduct: false,
            //     data: 'Most Popular',
            //   })
            // }
            style={{
              width: wp('44%'),
              height: hp('20%'),
              // elevation: 5,
              borderRadius: 15,
              backgroundColor: Theme.secondary,
              justifyContent: 'center',
            }}>
            <ImageBackground
              imageStyle={{
                width: wp('44%'),
                height: hp('20%'),
                borderRadius: 15,
                // opacity: 0.5,
                // backgroundColor: Theme.primary,
              }}
              style={{
                width: wp('44%'),
                height: hp('20%'),
                borderRadius: 15,
                justifyContent: 'center',
                paddingStart: '10%',

                backgroundColor: 'black',
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
          data={this.state.mostPopular}
          renderItem={this.renderMostPopular}
          horizontal
          // numColumns={2}
          contentContainerStyle={{
            paddingStart: '5%',
            paddingTop: '5%',
            paddingEnd: '5%',
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
