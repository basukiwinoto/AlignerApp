import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Headline} from 'react-native-paper';
import ContentCard from './components/ContentCard';
import StatusCard from './components/StatusCard';

const Home = () => {
  return (
    <View style={styles.mainView}>
      <ScrollView>
        <Headline style={styles.headline}>Hi, Morgan!</Headline>
        <StatusCard
          daysRemaining={150}
          percentRemaining={35}
          daysToNextAlignment={7}
          etaDate="11/29/20"
        />
        <ContentCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },
  headline: {
    padding: 20,
    fontWeight: 'bold',
  },
  status1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  status2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});

export default Home;
