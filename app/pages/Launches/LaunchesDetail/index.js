import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

const index = ({navigation, item, props}) => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log('Detail', navigation.getState().routes[1]?.params?.item);
    setData(navigation.getState().routes[1]?.params?.item);
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
