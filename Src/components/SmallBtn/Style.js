import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  touchableContainer: {
    marginTop: '10%',
    borderRadius: 20,

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Theme.primary,
    // height: 25,
  },
});
export default styles;
