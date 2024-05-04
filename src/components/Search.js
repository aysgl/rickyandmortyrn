import {SearchNormal} from 'iconsax-react-native';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = ({placeholder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <SearchNormal size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3CACA',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default Search;
