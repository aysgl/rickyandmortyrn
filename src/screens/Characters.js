import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenStyles} from '../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCharacters,
  loadMoreCharacters,
  searchCharacter,
} from '../redux/charachtersSlice';
import CharachterCard from '../components/CharachterCard';
import Search from '../components/Search';

export default function Characters() {
  const {characters, loading, error} = useSelector(state => state.characters);
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreCharacters());
  };

  const handleSearch = text => {
    setQuery(text);
    dispatch(searchCharacter(text));
  };

  return (
    <View style={screenStyles.container}>
      {loading && (
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Loading...</Text>
        </View>
      )}
      {error && <Text>Error: {error}</Text>}
      <Search value={query} onChangeText={handleSearch} />
      <FlatList
        data={characters}
        numColumns={2}
        renderItem={({item, index}) => (
          <CharachterCard key={index} data={item} />
        )}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.container}
        onEndReached={handleLoadMore}
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
