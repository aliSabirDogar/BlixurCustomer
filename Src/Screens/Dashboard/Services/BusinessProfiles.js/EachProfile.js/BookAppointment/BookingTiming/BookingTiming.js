// import { FlatList } from 'native-base';
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SmallButton from '../../../../../../../components/SmallBtn/SmallBtn';
import TxtInputs from '../../../../../../../components/TxtInputs/TxtInput';
import Theme from '../../../../../../../Utils/Theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Card} from 'react-native-paper';

var month = new Array();
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';
export default class BookingTiming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: [],
      selectedIndexForSub: [],
      timimg: [
        '10:00 PM',
        '10:00 PM',
        '10:00 PM',
        '10:00 PM',
        '10:00 PM',
        '10:00 PM',
        '10:00 PM',
        '10:00 PM',
        '10:00 PM',
      ],
      subCategories: [
        {
          name: 'Hair Cut',
          price: '35 $',
        },
        {
          name: 'Shave',
          price: '35 $',
        },
        {
          name: 'hair Cut',
          price: '35 $',
        },
        {
          name: 'hair Cut',
          price: '35 $',
        },
        {
          name: 'hair Cut',
          price: '35 $',
        },
      ],
      markedDates: ['2021-09-21', '2021-09-8', '2021-09-17'],
      selected_date: ['2021-09-21', '2021-09-8'],
      month: month[new Date().getMonth()],
      selectedDay: '',
    };
  }
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
      // alert(index);
      this.setState({selectedIndex: [...this.state.selectedIndex, index]});
    }
  };

  selectItemForSub = index => {
    if (this.state.selectedIndexForSub.indexOf(index) > -1) {
      const newArray = this.state.selectedIndexForSub.filter(indexObject => {
        if (indexObject == index) {
          return false;
        }
        return true;
      });
      // alert('click');
      this.setState({selectedIndexForSub: newArray});
    } else {
      // alert(index);
      this.setState({
        selectedIndexForSub: [...this.state.selectedIndexForSub, index],
      });
    }
  };
  renderTiming = ({item, index}) => {
    return (
      <View>
        <Card
          style={{
            backgroundColor:
              this.state.selectedIndex.indexOf(index) > -1
                ? Theme.primary
                : Theme.secondary,
            // padding: wp('1%'),
            marginEnd: wp('5%'),
            marginBottom: 5,
            borderRadius: 10,
            width: wp('20%'),
            height: hp('2.5%'),

            // elevation: 2,
          }}>
          <TouchableOpacity
            onPress={() => this.selectItem(index)}
            style={[
              styles.itemTime,
              {
                backgroundColor:
                  this.state.selectedIndex.indexOf(index) > -1
                    ? Theme.primary
                    : Theme.secondary,
                width: wp('20%'),
                height: hp('2.5%'),
              },
            ]}>
            <Text
              style={{
                fontSize: Theme.fontSmall,
                textAlign: 'center',
                color:
                  this.state.selectedIndex.indexOf(index) > -1
                    ? Theme.secondary
                    : Theme.primary,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };
  renderSubCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => this.selectItemForSub(index)}
        style={[
          styles.itemSubCate,
          {
            backgroundColor:
              this.state.selectedIndexForSub.indexOf(index) > -1
                ? Theme.subSecondary
                : Theme.secondary,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Text
          style={{
            fontSize: Theme.fontNormalBoldHeadings,
            fontFamily: Theme.gilRoySemiBold,
            marginBottom: hp('1%'),
            color:
              this.state.selectedIndexForSub.indexOf(index) > -1
                ? Theme.primary
                : Theme.primary,
          }}>
          {item.name}
        </Text>
        <Text>{item.price}</Text>
      </TouchableOpacity>
    );
  };
  getMonthName = monthInt => {
    switch (monthInt) {
      case 1:
        this.setState({month: 'January'});
        break;
      case 2:
        this.setState({month: 'Febraury'});
        break;
      case 3:
        this.setState({month: 'March'});
        break;
      case 4:
        this.setState({month: 'April'});
        break;
      case 5:
        this.setState({month: 'May'});
        break;
      case 6:
        this.setState({month: 'June'});
        break;
      case 7:
        this.setState({month: 'July'});
        break;
      case 8:
        this.setState({month: 'August'});
        break;
      case 9:
        this.setState({month: 'September'});
        break;
      case 10:
        this.setState({month: 'October'});
        break;
      case 11:
        this.setState({month: 'November'});
        break;
      case 12:
        this.setState({month: 'December'});
        break;
    }
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <AntDesign
              name="arrowleft"
              color={Theme.secondary}
              size={20}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          {/* Calender */}

          <View style={styles.calanderView}>
            <View style={{marginTop: hp('5%')}}>
              <Text style={{color: Theme.secondary, alignSelf: 'center'}}>
                {this.state.month}
              </Text>
              <CalendarList
                // Specify style for calendar container element. Default = {}
                style={{
                  width: wp('90%'),
                  alignSelf: 'center',
                  height: hp('35%'),
                }}
                calendarWidth={wp('90%')}
                // calendarHeight={hp('20%')}
                // Specify theme properties to override specific styles for calendar parts. Default = {}
                // onVisibleMonthsChange={months => {
                //   console.log('now these months are visible', months.month);
                // }}
                theme={{
                  backgroundColor: 'transparent',
                  calendarBackground: 'transparent',
                  textSectionTitleColor: '#b6c1cd',
                  textSectionTitleDisabledColor: Theme.placeHolderColor,
                  selectedDayBackgroundColor: Theme.secondary,
                  selectedDayTextColor: Theme.secondary,
                  todayTextColor: Theme.selectedColor,
                  dayTextColor: Theme.secondary,
                  textDisabledColor: '#d9e1e8',
                  dotColor: '#00adf5',
                  selectedDotColor: '#ffffff',
                  arrowColor: 'orange',
                  disabledArrowColor: '#d9e1e8',
                  monthTextColor: 'blue',
                  indicatorColor: 'green',
                  textDayFontFamily: Theme.gilRoyLight,
                  textMonthFontFamily: Theme.gilRoyLight,
                  textDayHeaderFontFamily: Theme.gilRoyLight,
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: Theme.fontSmall,
                  textMonthFontSize: Theme.fontSmall,
                  textDayHeaderFontSize: Theme.fontSmall,
                }}
                markedDates={{
                  '2021-09-16': {
                    selected: true,
                    // marked: true,
                    disabled: true,
                    selectedColor: Theme.selectedColor,
                  },
                  '2021-09-13': {
                    selected: true,
                    // marked: true,
                    selectedColor: Theme.selectedColor,
                  },
                  '2021-09-07': {
                    selected: true,
                    // marked: true,

                    selectedColor: Theme.selectedColor,
                  },
                  '2021-09-15': {
                    selected: true,
                    // marked: true,
                    selectedColor: Theme.selectedColor,
                  },
                }}
                // Initially visible month. Default = Date()
                current={new Date()}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                // minDate={'2012-05-10'}
                // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                // maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                  this.setState({
                    selectedDay: this.state.month + ` ${day.day}, ${day.year}`,
                  });
                  // alert(day.timestamp);
                }}
                disabledDaysIndexes={[13, 6]}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                  console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                  console.log('month changed', month.month);
                  this.getMonthName(month.month);
                }}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={direction => <Arrow />}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                firstDay={1}
                // horizontal={true}
                // Hide day names. Default = false
                // hideDayNames={true}
                // Show week numbers to the left. Default = false
                // showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Disable left arrow. Default = false
                disableArrowLeft={true}
                // Disable right arrow. Default = false
                disableArrowRight={true}
                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                // disableAllTouchEventsForDisabledDays={true}
                // Replace default month and year title with custom one. the function receive a date as parameter
                renderHeader={date => {
                  /*Return JSX*/
                }}
                // Enable the option to swipe between months. Default = false
                enableSwipeMonths={true}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    color: Theme.secondary,
                    paddingStart: wp('5%'),
                    fontSize: Theme.fontSmall,
                  }}>
                  {'Days Available for service'}
                </Text>
                <View
                  style={{
                    width: wp('10%'),
                    height: hp('1%'),
                    backgroundColor: Theme.selectedColor,
                    borderRadius: 10,
                    marginStart: 10,
                  }}
                />
              </View>
            </View>
          </View>
          {/* Calender */}
          <View style={styles.secondContainer}>
            <View style={{paddingStart: wp('5%')}}>
              <Text style={styles.headings}>Your selected Appointment Day</Text>
              <View style={styles.appointedDayContainer}>
                <Text style={{textAlign: 'center', fontSize: Theme.fontNormal}}>
                  {this.state.selectedDay}
                </Text>
              </View>
              <Text style={styles.headings}>Select Appointment Time</Text>
            </View>

            <View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.state.timimg}
                renderItem={this.renderTiming}
                extraData={this.state.selectedIndex}
                horizontal
                contentContainerStyle={{
                  paddingStart: '5%',
                  paddingTop: '5%',
                  paddingEnd: '5%',
                }}
              />
            </View>
            <View style={{paddingStart: wp('5%'), marginTop: '1%'}}>
              <Text style={styles.headings}>What are you looking for?</Text>
            </View>
            <View
              style={{
                backgroundColor: Theme.lightBackground,
                //   height: hp('20%'),
                //   padding: wp('5%'),
                justifyContent: 'center',
                paddingTop: '5%',
                paddingBottom: '5%',
                marginTop: hp('2%'),
                borderTopStartRadius: 20,
                borderBottomStartRadius: 20,
                //   alignItems: 'center',
              }}>
              <FlatList
                extraData={this.state.selectedIndexForSub}
                showsHorizontalScrollIndicator={false}
                data={this.state.subCategories}
                renderItem={this.renderSubCategories}
                horizontal
                contentContainerStyle={{
                  paddingStart: '5%',
                  // paddingTop: '5%',
                  paddingEnd: '5%',
                }}
              />
            </View>
            <View
              style={{
                paddingStart: wp('5%'),
                paddingEnd: wp('5%'),
                paddingTop: hp('1%'),
              }}>
              <Text style={styles.headings}>Questions/Comments/Conscerns?</Text>
              <TxtInputs
                placeHolder={'Notify the seller'}
                radius={5}
                top={hp('1%')}
              />
            </View>
            <SmallButton
              onPress={() => this.props.navigation.navigate('ProceedDone')}
              txt={'Proceed'}
              bgColor={Theme.primary}
              width={wp('30%')}
              height={hp('3.5%')}
              radius={20}
              color={Theme.secondary}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.secondary,
  },
  header: {
    position: 'absolute',
    padding: wp('5%'),
    zIndex: 999999,
  },
  calanderView: {
    height: hp('48٪'),
    width: wp('100%'),
    backgroundColor: Theme.primary,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    // elevation: 5,
  },
  secondContainer: {
    paddingTop: wp('5%'),
    flex: 1,
    backgroundColor: Theme.secondary,
  },
  appointedDayContainer: {
    width: wp('50%'),
    height: hp('3%'),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.secondary,
    elevation: 5,
    margin: hp('1%'),
    borderRadius: 5,
  },
  itemTime: {
    // width: wp('10%'),

    padding: wp('1%'),
    marginEnd: wp('5%'),
    marginBottom: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 2,
    // alignItems: 'center',
  },
  itemSubCate: {
    height: hp('12%'),
    marginEnd: wp('5%'),
    width: wp('25%'),
    borderRadius: 20,
  },
  headings: {
    fontSize: Theme.fontSubNormal,
    fontFamily: Theme.gilRoySemiBold,
  },
});
