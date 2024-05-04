import {Video} from 'iconsax-react-native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function EpisodeCard({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Video
          color="tomato"
          style={{flex: 1, alignSelf: 'flex-end', marginBottom: 20}}
        />
        <Text style={[styles.text, {fontSize: 18}]}>{data.name}</Text>
        <Text style={[styles.text, {fontSize: 12}]}>{data.air_date}</Text>
        <Text style={[styles.text, {fontSize: 12}]}>{data.episode}</Text>
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
    alignItems: 'left',
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
    textAlign: 'left',
    marginBottom: 5,
  },
});
