import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  investmentItems,
  contentType,
  educationalItems,
  factsItems,
  funItems,
  newsItems,
  sportsItems,
} from './services';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import ContentTypeDropDown from '../../components/ContentTypeDropDown';
import GradientText from '../../components/GradientText';
import WordSlider from '../../components/WordSlider';
import {
  content,
  content_details,
  content_option,
  draft,
  media,
  next,
} from '../../utils/images/constants/constant';

export default function Home() {
  const [activeContentType, setActiveContentType] = useState(0);
  const [dropDownData, setDropDownData] = useState(funItems);
  const [selectedType, setSelectedType] = useState(undefined);

  const Content = index => {
    setSelectedType(undefined);
    setActiveContentType(index);
    if (index === 0) setDropDownData(funItems);
    if (index === 1) setDropDownData(educationalItems);
    if (index === 2) setDropDownData(sportsItems);
    if (index === 3) setDropDownData(newsItems);
    if (index === 4) setDropDownData(investmentItems);
    if (index === 5) setDropDownData(factsItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* done the basic things */}
      <ScrollView style={{padding: 24, backgroundColor: '#12111A'}}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <Entypo name="chevron-small-left" size={30} color="#ffff" />
          </View>
          <View style={{}}>
            <Text style={[styles.heading, {textAlign: 'center'}]}>{media}</Text>
            <Text style={[styles.text, {textAlign: 'center'}]}>{draft}</Text>
          </View>
          <View style={[styles.icon, {borderWidth: 1, borderColor: '#523FD7'}]}>
            <View style={styles.profileImageView}>
              <Image
                style={styles.profile}
                source={require('../../../src/utils/images/userProfile.png')}
              />
            </View>
            <View style={styles.profileEditIcon}>
              <Entypo style={{}} name="triangle-down" size={0} color="#ffff" />
            </View>
          </View>
        </View>
        <View style={styles.contentTypeView}>
          <Text style={[styles.heading, {lineHeight: 31}]}>{content}</Text>
          <Text style={styles.text}>{content_details} </Text>
        </View>
        <View style={{paddingVertical: 32}}>
          <Text style={styles.heading}>{content_option}</Text>
          <View style={styles.contentType}>
            {contentType.map((item, index) => (
              <TouchableOpacity
                key={item?.id}
                onPress={() => Content(index)}
                style={[
                  styles.content,
                  {
                    backgroundColor:
                      activeContentType == index ? '#523FD7' : '#12111A',
                  },
                ]}>
                <Text style={styles.text}>{item?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{zIndex: 999}}>
          <ContentTypeDropDown
            dropDownData={dropDownData}
            activeContentType={activeContentType}
            setSelectContent={data => setSelectedType(data)}
            selectContent={selectedType}
          />
        </View>
        <WordSlider />
        <View style={[styles.next]}>
          <GradientText style={styles.text}>{next}</GradientText>
          <Entypo name="chevron-small-right" size={30} color="#523FD7" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
