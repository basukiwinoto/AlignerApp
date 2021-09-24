import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

const ContentCard = () => {
  return (
    <Card>
      <Card.Content>
        <Title>Common Concerns</Title>
        <FlatList
          horizontal
          data={[
            {
              uri: 'https://picsum.photos/id/191/200/200',
              id: 1,
              text: "Clear Aligner Dos and Don'ts",
            },
            {
              uri: 'https://picsum.photos/id/189/200/200',
              id: 2,
              text: 'How To Brush Your Teeth',
            },
            {
              uri: 'https://picsum.photos/id/169/200/200',
              id: 3,
              text: 'Eating With Aligner',
            },
          ]}
          renderItem={({item}) => {
            const {uri, text} = item;
            return (
              <Card style={styles.card}>
                <Card.Content>
                  <Card.Cover source={{uri}} />
                  <Paragraph>{text}</Paragraph>
                </Card.Content>
              </Card>
            );
          }}
          keyExtractor={(item: {id: any}) => item.id}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
  },
});

export default ContentCard;
