import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BigButton} from '../../components/Form';
import {cTitle} from '../../components/styles/color';
import Axios from 'axios';
import {baseURL} from '../../components/config';

const AboutScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get(baseURL + 'company')
      .then(result => {
        setData(result.data);
        setLoaded(!loaded);
      })
      .catch(err => {
        console.log('err', err);
        setLoaded(false);
      });
  };
  return (
    <View>
      <Text>AboutScreen</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      <BigButton bgColor={cTitle} onPress={() => navigation.navigate('Home')}>
        Home
      </BigButton>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
