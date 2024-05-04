/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ArrowLeft, ChartCircle, Man, Woman} from 'iconsax-react-native';

export default function CharacterDetail({route, navigation}) {
  const {data} = route.params;

  console.log(data);
  return (
    <ScrollView>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <ArrowLeft size="32" color="#fff" />
      </TouchableOpacity>
      <Image source={{uri: data.image}} style={styles.image} />

      <View style={styles.indicator}>
        {data.status === 'Alive' ? (
          <View style={styles.alive}>
            <Text style={{fontSize: 12}}>{data.status}</Text>
          </View>
        ) : data.status === 'Dead' ? (
          <View style={styles.dead}>
            <Text style={{fontSize: 12}}>{data.status}</Text>
          </View>
        ) : (
          <View style={styles.unknown}>
            <Text style={{fontSize: 12}}>{data.status}</Text>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <Text style={[styles.text, {fontSize: 50}]}>{data.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.genderIcon}>
              {data.gender === 'Female' ? (
                <Woman size={20} color="#FF8A65" />
              ) : data.gender === 'Male' ? (
                <Man size={20} color="#FF8A65" />
              ) : (
                <ChartCircle size="18" color="#FF8A65" />
              )}
            </View>
            <Text style={[styles.text, {fontSize: 20}]}> {data.gender}</Text>
          </View>
          <Text style={[styles.text, {fontSize: 14}]}>
            This is a {data.species}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text>Origin</Text>
        <Text style={{marginBottom: 20}}>{data.origin.name}</Text>

        <Text>Location</Text>
        <Text>{data.location.name}</Text>
      </View>
      {/* <View style={styles.container}>
        <Text>{data.episode}</Text>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  btn: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 30,
  },
  text: {
    color: 'black',
    marginBottom: 5,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '96%',
    marginTop: 20,
    marginRight: 30,
  },
  alive: {
    borderRadius: 100,
    backgroundColor: '#23D7BC',
    padding: 4,
    paddingHorizontal: 8,
  },
  dead: {
    borderRadius: 100,
    backgroundColor: '#FF8A65',
    padding: 4,
    paddingHorizontal: 8,
  },
  unknown: {
    borderRadius: 100,
    backgroundColor: '#000000',
    padding: 4,
    paddingHorizontal: 8,
  },
});
