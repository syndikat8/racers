import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import HeaderDrawers from '../components/Drivers/HeaderDrawers/HeaderDrawers';
import Driver from '../components/Drivers/Driver/Driver';
import {getDrivers} from '../redux/reducers/drivers-reducer';
import PlaceholderContainer from '../components/Placeholder/PlaceholderContainer';
import Preloader from '../components/common/Preloader/Preloader';

const DriversScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {drivers, isLoading} = useSelector((store) => store.drivers);

  useEffect(() => {
    dispatch(getDrivers(0));
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      {isLoading
        ? <Preloader/>
        : <>
          <FlatList
            keyExtractor={(driver) => driver.driverId}
            data={drivers}
            renderItem={({item}) => (
              <Driver navigation={navigation} driver={item}/>
            )}
            ListHeaderComponent={<HeaderDrawers navigation={navigation}/>}
          />
          <PlaceholderContainer/>
        </>
      }
    </View>
  );
};

export default DriversScreen;
