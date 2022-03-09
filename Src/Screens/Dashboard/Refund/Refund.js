import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
import TxtInputs from '../../../components/TxtInputs/TxtInput';
import Theme from '../../../Utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
export class Refund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {name: 'Missing Items'},
        {name: 'Damaged'},
        {name: 'Not what I ordered'},
        {name: 'No longer need'},
        {name: 'Others'},
      ],
      selectedIndex: [],
    };
  }
  renderCategories = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          //   alignSelf: 'center',
          //   backgroundColor: '#ffffff',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => this.selectItem(index)}
          //   onPress={() =>
          //     product == true
          //       ? navigation.navigate('AddProduct', {selectedName: item.name})
          //       : navigation.navigate('AddService', {selectedName: item.name})
          //   }
          style={{
            width: '95%',
            // height: hp('5%'),
            backgroundColor:
              this.state.selectedIndex.indexOf(index) > -1
                ? Theme.placeHolderColor
                : Theme.secondary,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            padding: wp('3%'),
            elevation: 3,
            marginTop: hp('1%'),
            marginBottom: hp('1%'),
            // alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
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
      if (this.state.selectedIndex.length > 0) {
        await this.setStates();
        await this.setStates1(index);
      } else {
        this.setState({selectedIndex: [...this.state.selectedIndex, index]});
      }
    }
  };
  // for selecting each item
  setStates = async () => {
    this.setState({selectedIndex: []});
  };
  setStates1 = async index => {
    this.setState({selectedIndex: [...this.state.selectedIndex, index]});
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <AntDesign name={'arrowleft'} size={Theme.fontBoldHeadings} />
        </View>
        <View style={styles.headingView}>
          <Text style={styles.heading}> {`What's Wrong?`} </Text>
        </View>
        <View>
          <FlatList
            //   style={{marginTop: '30%'}}
            contentContainerStyle={{
              //   paddingStart: '5%',
              //   paddingBottom: '5%',
              paddingTop: '5%',
            }}
            data={this.state.categories}
            renderItem={this.renderCategories}
            // numColumns={2}
            // onScroll={this.props.onScroll}
            // horizontal
            showsHorizontalScrollIndicator={false}
            extraData={this.state.selectedIndex}
          />
        </View>
        <SmallButton
          txt={'Continue'}
          width={wp('70%')}
          bgColor={Theme.primary}
          color={Theme.secondary}
          height={'5%'}
          radius={20}
          onPress={() => this.props.navigation.navigate('RefundLabel')}
        />
      </View>
    );
  }
}

export default Refund;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: wp('5%'),
  },
  heading: {
    fontFamily: Theme.gilRoyExtraBold,
    fontSize: Theme.fontBoldHeadings,
  },
  headingView: {
    // backgroundColor: 'red',
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
