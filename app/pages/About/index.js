import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
    <ScrollView style={{flex: 1, padding: 10}}>
      <Text>AboutScreen</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      <View style={{marginTop: 10}}>
        <BigButton bgColor={cTitle} onPress={() => navigation.navigate('Home')}>
          Home
        </BigButton>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
