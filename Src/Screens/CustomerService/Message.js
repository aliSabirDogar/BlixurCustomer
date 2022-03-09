import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Theme from '../../Utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
// import styles from '../../../Components/SmallBtn/Style';
import SendLogo from '../../assets/svgs/sendLogo';
import SmallLogo from '../../assets/svgs/smallLogo';
export default class MessageService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          txt: 'Shoaib',
          msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          id: 2,
          txt: 'Blixur',
          msg: 'Lorem Ipsum is simply dummy text of the printing ',
        },
        {
          id: 1,
          txt: 'Shoaib',
          msg: 'Lorem Ipsum has been the industrys standard dummy text',
        },
        {id: 2, txt: 'Blixur', msg: 'Lorem Ipsum has been'},
      ],
      recieve: '',
    };
  }
  renderMessages = ({item, index}) => {
    return (
      <>
        {item.id == 1 ? (
          <View style={{alignSelf: 'flex-end', marginTop: 20}}>
            <View style={styles.nameAndPic}>
              <Text
                style={{
                  marginEnd: 20,
                  color: '#9DAAAE',
                  fontSize: Theme.fontNormalBoldHeadings,
                  fontFamily: Theme.MonteserratBold,
                }}>
                {item.txt}
              </Text>
              <Image
                style={styles.imgSty}
                source={require('../../assets/images/profilePic.jpg')}
              />
            </View>
            <View style={styles.msgView}>
              <Text style={{color: Theme.subPrimary}}>{item.msg}</Text>
            </View>
          </View>
        ) : (
          <View style={{marginTop: 20, alignSelf: 'flex-start'}}>
            <View style={[styles.nameAndPic, {alignSelf: 'flex-start'}]}>
              {/* <Text
                style={{
                  marginStart: 20,
                  fontSize: Theme.fontNormalBoldHeadings,
                  fontFamily: Theme.MonteserratBold,
                }}>
                {item.txt}
              </Text> */}
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 17.5,
                  backgroundColor: Theme.primary,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginStart: 20,
                }}>
                <SmallLogo />
              </View>
            </View>
            <View style={styles.msgViewReceiver}>
              <Text style={{color: Theme.subPrimary}}>{item.msg}</Text>
            </View>
          </View>
        )}
      </>
    );
  };
  pushText = () => {
    const news = {
      id: 1,
      txt: 'shoaib',
      msg: this.state.recieve,
    };
    this.setState({
      messages: [...this.state.messages, news],
    });
    this.setState({recieve: ''});
  };
  FlatListRef = null;
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View
            style={{
              //   backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <AntDesign
              name="arrowleft"
              color={Theme.secondary}
              size={Theme.fontBoldHeadings}
              onPress={() => this.props.navigation.goBack()}
            />
            {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: wp('35%'),
                  backgroundColor: Theme.secondary,
                  //   height: hp('5%'),
                  top: 20,
                  padding: 5,
                  borderTopStartRadius: 5,
                  borderBottomStartRadius: 5,
                  borderBottomEndRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginEnd: 5,
                }}>
                <Text
                  style={{
                    fontSize: Theme.fontVerySmall,
                    // fontFamily: Theme.gilRoyLight,
                  }}>
                  Keep conversation in Blixur chat. Don't share phone or email
                  in conversation
                </Text>
              </View>
              <AntDesign
                name="exclamationcircleo"
                color={Theme.secondary}
                size={12}
              />
            </View> */}
          </View>
          {/* <Text style={styles.headingTxt}>Message</Text> */}
        </View>
        <FlatList
          data={this.state.messages}
          renderItem={this.renderMessages}
          ref={ref => (this.FlatListRef = ref)} // assign the flatlist's ref to your component's FlatListRef...
          onContentSizeChange={() => this.FlatListRef.scrollToEnd()} // scroll it
          scrollEnabled
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.txtInput}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                //   backgroundColor: Theme.secondary,
                borderWidth: 0.5,
                borderColor: Theme.primary,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => this.pushText()}>
              <Entypo name="attachment" color={Theme.primary} />
            </TouchableOpacity>
            <TextInput
              style={{
                color: Theme.primary,
                paddingStart: 10,
                // backgroundColor: 'red',
                width: wp('75%'),
              }}
              value={this.state.recieve}
              placeholder={'Write something...'}
              placeholderTextColor={Theme.subSecondary}
              onChangeText={text => this.setState({recieve: text})}
              multiline
            />
          </View>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              //   backgroundColor: Theme.secondary,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.pushText()}>
            <SendLogo />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.secondary,
  },
  header: {
    height: hp('10%'),
    backgroundColor: Theme.primary,
    borderBottomStartRadius: 60,
    padding: 20,
  },
  headingTxt: {
    color: Theme.secondary,
    fontSize: hp('4%'),
    marginStart: 50,
    fontFamily: Theme.gilRoyExtraBold,
  },
  nameAndPic: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  imgSty: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginEnd: 20,
  },
  msgView: {
    // backgroundColor: '#9DAAAE',
    marginStart: 20,
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 20,
    paddingTop: 5,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,
  },
  msgViewReceiver: {
    // backgroundColor: Theme.primary,
    marginEnd: 20,
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 20,
    paddingTop: 5,
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
  },
  txtInput: {
    backgroundColor: Theme.secondary,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 10,
    paddingEnd: 10,
    height: hp('6%'),
  },
});
