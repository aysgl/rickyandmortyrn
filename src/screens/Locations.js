import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {screenStyles} from '../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLocations} from '../redux/locationSlice';
import Card from '../components/Card';

export default function Locations() {
  const {locations, loading, error} = useSelector(state => state.locations);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  console.log(locations);
  return (
    <View style={screenStyles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={locations}
        numColumns={2}
        renderItem={({item}) => <Card data={item} />}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});
