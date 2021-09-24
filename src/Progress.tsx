import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Caption, Headline, Title} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Progress = () => {
  return (
    <View style={styles.mainView}>
      <ScrollView>
        <View style={styles.sectionHeadline}>
          <MaterialCommunityIcons name="calendar" size={30} />
          <Headline style={styles.headline}>Your Aligner Schedule</Headline>
        </View>
        <View style={styles.sectionContent}>
          <Title>Next aligner switch</Title>
          <Caption>7 days</Caption>
          <Title>Current aligner set</Title>
          <Caption>Month 1 Week 1 started on Thursday.{'\n'}March 12th</Caption>
          <Title>Next aligner set</Title>
          <Caption>Month 1 Week 2 started on Thursday.{'\n'}March 19th</Caption>
        </View>
        <View style={styles.sectionHeadline}>
          <MaterialCommunityIcons name="heart-outline" size={30} />
          <Headline style={styles.headline}>Your Smile Journey</Headline>
        </View>
        <View style={styles.sectionContent}>
          <Title>New smile ETA</Title>
          <Caption>11/29/20</Caption>
          <Title>Treatment time remaining</Title>
          <Caption>150 days</Caption>
          <Title>Aligner remaining</Title>
          <Caption>20</Caption>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },
  headline: {
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  sectionHeadline: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionContent: {
    paddingHorizontal: 20,
  },
});
export default Progress;
