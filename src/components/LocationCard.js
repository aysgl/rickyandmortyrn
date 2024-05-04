/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function LocationCard({data}) {
  const [resident, setResident] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const fetchedResidents = await Promise.all(
        data.residents.map(async residentUrl => {
          const response = await fetch(residentUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const res = await response.json();
          return res.image;
        }),
      );
      setResident(fetchedResidents);
    };

    fetchResidents();
  }, [data.residents]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.text, {fontSize: 18}]}>{data.name}</Text>
        <Text style={[styles.text, {fontSize: 12}]}>{data.dimension}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '80%',
          }}>
          {resident.map((image, index) => (
            <Image
              key={`resident-${index}`}
              source={{uri: image}}
              style={styles.image}
            />
          ))}
        </View>
      </View>
    </View>
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
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});
