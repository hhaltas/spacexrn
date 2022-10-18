import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {center} from '../../components/styles/other';
import {backgroundScreen, cSearch} from '../../components/styles/color';
import {SmallButton} from '../../components/Form';

const LaunchesScreen = ({data, navigation, HeaderTitle}) => {
  useEffect(() => {}, []);
  const renderItem = item => {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              item.index % 2 === 1 ? backgroundScreen : '#fdfdfd',
          },
        ]}>
        {item.item.links.patch.large !== null ? (
          <View style={{...center}}>
            <Image
              source={{uri: item.item.links.patch.large}}
              style={{
                ...center,
                width: 250,
                height: 200,
                resizeMode: 'contain',
              }}
            />
          </View>
        ) : (
          <View></View>
        )}
        <View style={{padding: 5}}>
          <Text style={styles.header}> {item.item.name}</Text>
          <Text style={styles.Description}> {item.item.date_utc}</Text>
          {item.item.details !== null && (
            <Text style={styles.Description} numberOfLines={2}>
              Description :{' '}
              {item.item.details.length > 80
                ? item.item.details.split(0, 75) + '...'
                : item.item.details}
            </Text>
          )}
        </View>
        <View style={styles.OpenDetail}>
          <SmallButton
            buttonStyle={{width: 150, height: 50}}
            bgColor={cSearch}
            onPress={() =>
              navigation.navigate('LaunchesDetail', {
                item: item.item,
              })
            }>
            Launches Detail
          </SmallButton>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={[styles.header, {margin: 10}]}>
        {HeaderTitle.toUpperCase()}
      </Text>
      <FlatList
        data={data}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
        }}
      />
    </View>
  );
};

export default LaunchesScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.3)',
    margin: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  ImageView: {
    ...center,
  },
  ImageSize: {},
  Name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  Description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
    paddinfLeft: 5,
    paddingRight: 5,
  },
  OpenDetail: {
    padding: 10,
    bottom: 0,
    width: '100%',
    flexDirection: 'row-reverse',
  },
});
