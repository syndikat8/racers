import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDriver} from '../../redux/racers-reducer';
import DriverInfo from './DriverInfo';
import Preloader from '../common/Preloader/Preloader';

const DriverInfoContainer = ({navigation}) => {
  const driverId = navigation.getParam('driverId');

  const dispatch = useDispatch();
  const {driver, isLoading} = useSelector((store) => store.racers);

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

export default DriverInfoContainer;
