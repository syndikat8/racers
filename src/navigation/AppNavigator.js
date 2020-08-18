import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DriverInfoScreen from '../screens/DriverInfoScreen';
import RaceScheduleScreen from '../screens/RaceScheduleScreen';
import DriversScreen from '../screens/DriwersScreen';

const Main = createStackNavigator({
  Drivers: {
    screen: DriversScreen,
  },
  DriverInfo: {
    screen: DriverInfoScreen,
  },
  Schedule: {
    screen: RaceScheduleScreen,
  },
});

export default AppNavigator = createAppContainer(Main);
