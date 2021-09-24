import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import CircleGauge from './CircleGauge';

const StatusCard = (props: {
  daysRemaining: any;
  percentRemaining: any;
  daysToNextAlignment: any;
  etaDate: any;
}) => {
  const {daysRemaining, percentRemaining, daysToNextAlignment, etaDate} = props;
  return (
    <View>
      <View style={styles.status1}>
        <View>
          <Caption>Treatment time remaining</Caption>
          <Title>{daysRemaining} days</Title>
        </View>
        <View>
          <CircleGauge percent={percentRemaining} />
        </View>
      </View>
      <View style={styles.status2}>
        <View>
          <Caption>Next Aligner Switch</Caption>
          <Title>{daysToNextAlignment} days</Title>
        </View>
        <View>
          <Caption>New Smile ETA</Caption>
          <Title>{etaDate}</Title>
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

export default StatusCard;
