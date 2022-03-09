import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import Theme from '../../../Utils/Theme';
import Modal from 'react-native-modal';
import NoteSvg from '../../../assets/svgs/Note';
export class RefundLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Model */}
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({isVisible: false})}
          animationIn={'bounceIn'}
          animationOut={'bounceOut'}>
          <View style={styles.mainContainerOfModal}>
            {/* <ContactUsLogo /> */}
            <Text style={styles.heading}>Note!</Text>
            <View style={{margin: hp('1%')}}>
              <NoteSvg />
            </View>
            <Text
              style={{
                width: wp('50%'),
                textAlign: 'center',
                fontFamily: Theme.gilRoyLight,
                marginTop: hp('2%'),
              }}>{`Please print and drop off your nearest UPS store orlocal post office`}</Text>
            <SmallButton
              onPress={() => {
                this.setState({isVisible: false}),
                  this.props.navigation.navigate('RefundRequested');
              }}
              txt={'Continue'}
              width={wp('50%')}
              height={hp('3.5%')}
              bgColor={Theme.primary}
              color={Theme.secondary}
              radius={20}
            />
          </View>
        </Modal>
        {/* Model */}
        <View style={styles.header}>
          <AntDesign name={'arrowleft'} />
        </View>
        <Text style={styles.heading}>Refund Label</Text>
        <View style={styles.labelImg}>
          <Image source={require('../../../assets/images/refundLabel.png')} />
        </View>
        <SmallButton
          txt={'Download'}
          width={wp('70%')}
          bgColor={Theme.primary}
          color={Theme.secondary}
          height={'5%'}
          radius={20}
          onPress={() => this.setState({isVisible: true})}
        />
      </View>
    );
  }
}

export default RefundLabel;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: wp('5%'),
  },
  header: {
    alignSelf: 'flex-start',
  },
  heading: {
    fontFamily: Theme.gilRoyExtraBold,
    fontSize: Theme.fontBoldHeadings,
  },
  labelImg: {
    height: hp('70%'),
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'grey',
    marginTop: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainerOfModal: {
    height: hp('40%'),
    width: wp('90%'),
    borderRadius: 50,
    backgroundColor: Theme.secondary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
