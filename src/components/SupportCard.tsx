import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusCard = () => {
  return (
    <View>
      <View style={styles.status1}>
        <View style={styles.statusGroup}>
          <MaterialCommunityIcons
            name="book-open-outline"
            size={48}
            color="purple"
          />
          <Title style={styles.fontSmall}>Aligner Guide</Title>
        </View>
        <View style={styles.statusGroup}>
          <MaterialCommunityIcons
            name="comment-question-outline"
            size={48}
            color="purple"
          />
          <Title style={styles.fontSmall}>FAQs</Title>
        </View>
      </View>
      <View style={styles.status2}>
        <View>
          <Title style={styles.fontSmall}>Need 24hr assistance?</Title>
        </View>
        <View style={styles.liveChat}>
          <MaterialCommunityIcons
            name="map"
            size={24}
            style={[styles.fontPurple, styles.fontSmall]}
          />
          <Title style={[styles.fontPurple, styles.fontSmall]}>Live Chat</Title>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    padding: 20,
    fontWeight: 'bold',
  },
  status1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  statusGroup: {
    alignItems: 'center',
  },
  status2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  liveChat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontPurple: {
    color: 'purple',
  },
  fontSmall: {
    fontSize: 16,
  },
});

export default StatusCard;
