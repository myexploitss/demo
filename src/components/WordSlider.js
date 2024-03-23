import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../screens/Home/styles';
import Slider from '@react-native-community/slider';
import slider from '../../src/utils/images/slider.png';
import {number_details} from '../utils/images/constants/constant';

export default function WordSlider() {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <>
      <Text style={[styles.heading, {paddingTop: 24}]}>{number_details} </Text>
      <View style={styles.slider}>
        <Text style={[styles.text, styles.fontWeight]}>100</Text>
        <Slider
          onValueChange={value => setSliderValue(value)}
          style={{flex: 1}}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor="#FF7DFF"
          minimumTrackTintColor="#FF7DFF"
          maximumTrackTintColor="#3A3940"
          thumbImage={slider}
        />
        <View
          style={{
            position: 'absolute',
            left:
              Math.round(sliderValue * 900 + 100) > 500
                ? `${sliderValue * 65}%`
                : `${sliderValue * 65}%`,
            bottom: 50,
            paddingLeft: 48,
          }}>
          <View style={styles.alphabetLimiter}>
            <Text style={styles.text}>
              {Math.round(sliderValue * 900 + 100)}
            </Text>
          </View>
        </View>
        <Text style={[styles.text, styles.fontWeight]}>1000</Text>
      </View>
    </>
  );
}
