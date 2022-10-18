import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {backgroundScreen} from '../../../components/styles/color';
import {center} from '../../../components/styles/other';
import MapView from 'react-native-maps';

const Detail = ({props, item, navigation, route}) => {
  useEffect(() => {
    //console.log('data', route.params.item);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>
        {route.params.item.full_name} - ({route.params.item.name})
      </Text>
      <View style={styles.title}>
        <Image source={route.params.item.images.large} style={styles.Image} />

        <Text style={styles.detail}>{route.params.item.details}</Text>
      </View>
      <View style={styles.Description}>
        <View style={{flexDirection: 'column', width: '20%'}}>
          <Text>TYPE</Text>
          <Text>REGİON</Text>
          <Text>LOCALİTY</Text>
          <Text>STATUS</Text>
        </View>
        <View style={{flexDirection: 'column', width: '5%'}}>
          <Text> : </Text>
          <Text> : </Text>
          <Text> : </Text>
          <Text> : </Text>
        </View>
        <View style={{flexDirection: 'column', width: '75%'}}>
          <Text>{route.params.item.type}</Text>
          <Text>{route.params.item.region}</Text>
          <Text>{route.params.item.locality}</Text>
          <Text>{route.params.item.status}</Text>
        </View>
      </View>
      <View>
        {/*
        MAP ADD
        */}
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: backgroundScreen,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    ...center,
  },
  Image: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
  },
  detail: {
    fontSize: 14,
    fontWeight: '400',
  },
  Description: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
  },
});
