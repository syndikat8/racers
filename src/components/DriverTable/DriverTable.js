import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getDrivers} from '../../redux/racers-reducer';
import Driver from './Driver/Driver';
import HeaderTable from './HeaderTable/HeaderTable';
import PlaceholderContainer from '../Placeholder/PlaceholderContainer';
import Preloader from '../common/Preloader/Preloader';

const DriverTable = ({navigation}) => {
  const dispatch = useDispatch();
  const {drivers, isLoading} = useSelector((store) => store.racers);

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
            ListHeaderComponent={<HeaderTable navigation={navigation}/>}
          />
          <PlaceholderContainer/>
        </>
      }
    </View>
  );
};

export default DriverTable;
