import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../components/common/Preloader/Preloader';
import DriverInfo from '../components/DriverInfo/DriverInfo';
import {getDriver} from '../redux/reducers/drivers-reducer';

const DriverInfoScreen = ({navigation}) => {
  const driverId = navigation.getParam('driverId');

  const dispatch = useDispatch();
  const {driver, isLoading} = useSelector((store) => store.drivers);

  useEffect(() => {
    dispatch(getDriver(driverId));
  }, [dispatch]);

  return (
    <>
      {isLoading
        ? <Preloader/>
        : <DriverInfo driverId={driverId} driver={driver}/>
      }
    </>
  );
};

export default DriverInfoScreen;
