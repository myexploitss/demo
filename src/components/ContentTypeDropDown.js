import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../screens/Home/styles';
import {contentType} from '../screens/Home/services';
import Entypo from 'react-native-vector-icons/Entypo';

export default function ContentTypeDropDown({
  activeContentType,
  dropDownData,
  selectContent,
  setSelectContent,
}) {
  const [dropDown, setDropDown] = useState(false);
  const [searchQuery, setSearchQuery] = useState(undefined);

  return (
    <View>
      <View style={{position: 'relative'}}>
        <Text style={styles.heading}>
          Which type of "{contentType[activeContentType]?.name}" are you
          creating?
        </Text>
        <LinearGradient
          colors={['#523FD7', '#523FD7', '#FF7DFF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.linearColor}>
          <View style={{overflow: 'hidden'}}>
            <View style={styles.dropDownBox}>
              {dropDown ? (
                <TextInput
                  onChangeText={text => setSearchQuery(text)}
                  style={{color: '#ffff'}}
                  placeholderTextColor="#ffff"
                  placeholder="Search |"
                />
              ) : (
                <Text style={styles.text}>
                  {selectContent?.name ? selectContent?.name : 'Select'}
                </Text>
              )}
              {dropDown ? (
                <Entypo
                  onPress={() => setDropDown(false)}
                  name="chevron-small-down"
                  size={30}
                  color="#ffff"
                />
              ) : (
                <Entypo
                  onPress={() => setDropDown(true)}
                  name="chevron-small-down"
                  size={30}
                  color="#ffff"
                />
              )}
            </View>
          </View>
        </LinearGradient>
      </View>
      {dropDown && (
        <ScrollView style={styles.dropDownList}>
          {dropDownData
            .filter(item =>
              searchQuery ? item.name.includes(searchQuery) : true,
            )
            ?.map(item => (
              <Text
                onPress={() => {
                  setSelectContent(item), setDropDown(false);
                }}
                key={item?.id}
                style={[styles.text, {padding: 24}]}>
                {item.name}
              </Text>
            ))}
        </ScrollView>
      )}
    </View>
  );
}
