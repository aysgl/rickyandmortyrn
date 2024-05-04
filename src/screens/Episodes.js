import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {screenStyles} from '../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEpisodes} from '../redux/episodesSlice';
import EpisodeCard from '../components/EpisodeCard';

export default function Episodes() {
  const {episodes, loading, error} = useSelector(state => state.episodes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  return (
    <View style={screenStyles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={episodes}
        numColumns={2}
        renderItem={({item}) => <EpisodeCard data={item} />}
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
