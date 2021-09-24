import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ConcernsCard from './components/ConcernsCard';
import SupportCard from './components/SupportCard';
import TipsTricksCard from './components/TipsTricksCard';

const Home = () => {
  return (
    <View style={styles.mainView}>
      <ScrollView>
        <SupportCard />
        <TipsTricksCard />
        <ConcernsCard />
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
