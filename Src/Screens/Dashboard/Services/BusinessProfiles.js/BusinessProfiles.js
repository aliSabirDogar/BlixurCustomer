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
import Theme from '../../../../Utils/Theme';
import Logo from '../../../../assets/svgs/logo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TxtInput from '../../../../components/TxtInputs/TxtInput';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-paper';
export default class BusinessProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          name: 'Olivia',
          img: 'https://i.pinimg.com/originals/ac/aa/cc/acaacc0e1dd9fdfca03ab16a02b91918.jpg',
        },
        {
          name: 'Omer',
          img: 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
        },
        {
          name: 'Isabella',
          img: 'http://img-cdn.tid.al/o/4858a4b2723b7d0c7d05584ff57701f7b0c54ce3.jpg',
        },
        {
          name: 'Cosmetolist',
          img: 'http://img-cdn.tid.al/o/d1174163f0ba990fef11336f448e2656efa57e8c.jpg',
        },
        {
          name: 'Tutor',
          img: 'https://images.theconversation.com/files/66794/original/image-20141209-32156-7fef5i.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        },
        {
          name: 'Home Maintainance',
          img: 'https://thumbs.dreamstime.com/b/home-maintenance-some-tools-used-works-digital-illustration-64595831.jpg',
        },
        {
          name: 'Yummy Air',
          img: 'https://media.istockphoto.com/photos/one-pair-of-yellow-shoes-on-yellow-background-picture-id969878700?k=20&m=969878700&s=170667a&w=0&h=DDaRV1UPeFby8tLfTwwpMJIroOkWz3gp71K9A3a6nzk=',
        },
      ],
    };
  }
  renderProfiles = ({item, index}) => {
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
            onPress={() => this.props.navigation.navigate('EachProfile')}
            activeOpacity={0.9}
            style={{
              width: wp('40%'),
              height: hp('25%'),
              backgroundColor: Theme.secondary,
              borderRadius: 10,
              // elevation: 5,
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
              source={{uri: item.img}}
            />
            <View
              style={{
                backgroundColor: Theme.secondary,
                elevation: 2,
                height: hp('5%'),
                width: '100%',
                borderBottomStartRadius: 10,
                borderBottomEndRadius: 10,
                position: 'absolute',
                bottom: 0,
                paddingStart: wp('5%'),
                //   alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Theme.gilRoySemiBold,
                  fontSize: Theme.fontNormal,
                }}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: Theme.fontVerySmall,
                  color: Theme.subSecondary,
                }}>
                {'Fashion Products'}
              </Text>
            </View>
          </TouchableOpacity>
        </Card>
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
        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={styles.heading}>{'Business Profile'}</Text>
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
            data={this.state.profiles}
            renderItem={this.renderProfiles}
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
