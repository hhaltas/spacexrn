import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {center} from '../../components/styles/other';
import {backgroundScreen, cSearch} from '../../components/styles/color';
import {SmallButton} from '../../components/Form';

const Landpads = ({data, navigation, HeaderTitle}) => {
  const [load, setLoad] = useState(false);
  //const [data,setData] = useState(null);
  // React.useEffect(() => {
  //   console.log('props', navigation);
  // }, []);

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
        {item.item.images.large !== null && (
          <View style={{flex: 1, ...center}}>
            <Image source={item.item.images.large} style={styles.ImageSize} />
          </View>
        )}
        <View style={{flex: 1, padding: 5}}>
          <Text style={styles.Name}> {item.item.name}</Text>
          <Text style={styles.Description} numberOfLines={2}>
            Description :{' '}
            {item.item.details.length > 80
              ? item.item.details.split(0, 75) + '...'
              : item.item.details}
          </Text>
        </View>
        <View style={styles.OpenDetail}>
          <SmallButton
            buttonStyle={{width: 150, height: 50}}
            bgColor={cSearch}
            onPress={() =>
              navigation.navigate('Detail', {
                item: item.item,
              })
            }>
            DETAİL
          </SmallButton>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.header}>{HeaderTitle.toUpperCase()}</Text>
      <FlatList
        data={data}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Landpads;

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
    textAlign: 'center',
    marginTop: 10,
  },
  ImageView: {
    ...center,
  },
  ImageSize: {
    ...center,
    width: 300,
    height: 200,
    marginTop: 10,
    resizeMode: 'contain',
  },
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
