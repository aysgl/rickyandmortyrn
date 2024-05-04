import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChartCircle, Man, Woman} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

export default function CharachterCard({data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('CharacterDetail', {data: data})}>
      <View style={styles.card}>
        <View style={styles.indicator}>
          <Text style={{fontSize: 11, marginRight: 4}}>{data.status}</Text>
          {data.status === 'Alive' ? (
            <View style={styles.alive} />
          ) : data.status === 'Dead' ? (
            <View style={styles.dead} />
          ) : (
            <View style={styles.unknown} />
          )}
        </View>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.genderIcon}>
          {data.gender === 'Female' ? (
            <Woman size={20} color="#FF8A65" />
          ) : data.gender === 'Male' ? (
            <Man size={20} color="#FF8A65" />
          ) : (
            <ChartCircle size="18" color="#FF8A65" />
          )}
        </View>
        <Text style={[styles.text, {fontSize: 18}]}>{data.name}</Text>
        <Text style={[styles.text, {fontSize: 12}]}>{data.gender}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  card: {
    alignItems: 'center',
    padding: 20,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    flex: 1,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginVertical: 10,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  genderIcon: {
    alignItems: 'center',
  },
  alive: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#23D7BC',
  },
  dead: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#FF8A65',
  },
  unknown: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#000000',
  },
});
