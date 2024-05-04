/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {filterCharacters, setFilterParams} from '../redux/charachtersSlice';

export default function FilterScreen() {
  const {params} = useSelector(state => state.characters);
  const [selectedGender, setSelectedGender] = useState(params.gender);
  const [selectedStatus, setSelectedStatus] = useState(params.status);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const genders = ['Male', 'Female'];
  const status = ['Alive', 'Dead'];

  useEffect(() => {
    setSelectedGender(params.gender);
    setSelectedStatus(params.status);
  }, [params]);

  const handleSearch = () => {
    dispatch(
      filterCharacters({gender: selectedGender, status: selectedStatus}),
    );
    dispatch(setFilterParams({gender: selectedGender, status: selectedStatus}));
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft style={{marginStart: 15}} size="32" color="tomato" />
      </TouchableOpacity>
      <View style={{padding: 15}}>
        <View style={{flexDirection: 'row', gap: 10, marginBottom: 20}}>
          {genders.map(g => (
            <TouchableOpacity
              key={g}
              onPress={() => setSelectedGender(g)}
              style={{
                backgroundColor: selectedGender === g ? 'tomato' : 'lightgray',
                flex: 1,
                borderRadius: 10,
                padding: 10,
                alignItems: 'center',
              }}>
              <Text>{g}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          {status.map(s => (
            <TouchableOpacity
              key={s}
              onPress={() => setSelectedStatus(s)}
              style={{
                backgroundColor: selectedStatus === s ? 'tomato' : 'lightgray',
                flex: 1,
                borderRadius: 10,
                padding: 10,
                alignItems: 'center',
              }}>
              <Text>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleSearch();
        }}
        style={{
          backgroundColor: 'tomato',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <Text style={{color: 'white'}}>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
