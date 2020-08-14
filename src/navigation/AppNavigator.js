import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DriverTable from '../components/DriverTable/DriverTable';
import DriverInfoContainer from '../components/DriverInfo/DriverInfoContainer';
import Schedule from '../components/Schedule/Schedule';

const Main = createStackNavigator({
  Drivers: {
    screen: DriverTable,
  },
  DriverInfo: {
    screen: DriverInfoContainer,
  },
  Schedule: {
    screen: Schedule,
  },
});

export default AppNavigator = createAppContainer(Main);
