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

export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArrival: [
        {
          name: 'IPHONE',
          img: require('../../assets/images/na1.jpg'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/na2.jpg'),
        },
        {
          name: 'IPHONE',
          img: require('../../assets/images/na3.png'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/na4.jpg'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/na5.jpg'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/na6.jpg'),
        },
        {
          name: 'Consoles',
          img: require('../../assets/images/na7.jpg'),
        },
      ],
    };
  }
  renderNewArrival = ({item, index}) => {
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
            onPress={() =>
              navigation.navigate('Products', {
                profilesProduct: false,
                data: 'New Arrival',
              })
            }
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
          data={this.state.newArrival}
          renderItem={this.renderNewArrival}
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
