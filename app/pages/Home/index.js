import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BigButton} from '../../components/Form';
import {backgroundScreen, cSearch, cTitle} from '../../components/styles/color';
import {center} from '../../components/styles/other';
import DropDownPicker from 'react-native-dropdown-picker';
import {baseURL} from '../../components/config';
import LandpadsScreen from '../Landpads';
import LaunchesScreen from '../Launches';
import Axios from 'axios';
import moment from 'moment';
import {Datepicker} from '../../components/datetimepicker/datepicker';
const HomeScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([
    // {label: 'Capsules', value: 'capsules'},
    // {label: 'Cores', value: 'cores'},
    {label: 'Landpads', value: 'landpads'},
    {label: 'Launches', value: 'launches'},

    // {label: 'Rockets', value: 'rockets'},
  ]);
  const [variable, setVariable] = useState([]);

  // useEffect(() => {
  //   if (value !== null) {
  //     getListData();
  //   }
  // }, [setValue, value]);

  useEffect(() => {
    !open ? setOpenDate(true) : setOpenDate(false);
  }, [open]);

  const getListData = async () => {
    console.log('getList', value, open);
    const result = await Axios.get(baseURL + value);
    const temp = [];

    if (value === 'launches' && date !== Date()) {
      result.data.map((a, index) => {
        var startDate = moment(a.date_utc);
        var endDate = moment(date);
        var diff = startDate.diff(endDate, 'days');
        if (diff > 0) temp.push(a);
      });
      setVariable(
        temp.sort((a, b) => {
          return new Date(b.date_utc) - new Date(a.date_utc);
        }),
      );
      setShow(true);
    } else if (value === 'launches' && date === Date()) {
      setVariable(
        result.data.sort((a, b) => {
          return new Date(b.date_utc) - new Date(a.date_utc);
        }),
      );
      setShow(true);
    } else if (value === 'landpads' && date) {
      console.log('*-* girdi');
      setVariable(result.data);
      setShow(true);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.searches,
          {
            height: 130,
            position: 'relative',
          },
        ]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            padding: 10,
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, width: '100%'}}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                theme="DARK"
                multiple={false}
                mode="BADGE"
              />
            </View>
            {openDate && (
              <View>
                <Datepicker
                  labelTx="date"
                  labelStyle={styles.TEXTINPUT_LABEL}
                  placeholder="Select Time"
                  placeholderTx="10.10.2000 ..."
                  mode="date"
                  style={{}}
                  date={moment(date).toDate()}
                  onChange={v => {
                    setDate(v);
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <BigButton bgColor={cSearch} onPress={() => getListData()}>
          Search
        </BigButton>
      </View>
      <View style={{flex: 1}}>
        {!show && value === 'landpads' && (
          <LandpadsScreen
            data={variable}
            navigation={navigation}
            HeaderTitle={value}
          />
        )}
        {show && value === 'launches' && (
          <LaunchesScreen
            data={variable}
            navigation={navigation}
            HeaderTitle={value}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundScreen,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  searches: {
    borderWidth: 0.3,
    borderRadius: 4,
    backgroundColor: '#fff',
    flexFirection: 'column',
  },
  serachesTitle: {
    flex: 1,
    ...center,
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontColor: cTitle,
    fontWeight: '400',
  },
});
