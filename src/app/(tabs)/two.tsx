import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/src/components/Themed';
import { Stack } from 'expo-router';
import StockListItem from '@/src/components/StockListItem';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  query MyQuery($user_id: String!) {
    favoritesByUser_id(user_id: $user_id) {
      id
      quote {
        name
        symbol
        close
        percent_change
      }
    }
  }
`;

export default function TabTwoScreen() {
  const { loading, error, data } = useQuery(query, {
    variables: { user_id: 'vadim' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  const stocks = data.favoritesByUser_id.map((fav) => fav.quote);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Favorites' }} />

      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
        contentContainerStyle={{ gap: 20, padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
