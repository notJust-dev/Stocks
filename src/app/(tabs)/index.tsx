import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import { Stack } from 'expo-router';
import top5 from '@/assets/data/top5.json';
import StockListItem from '@/src/components/StockListItem';

export default function TabOneScreen() {
  const stocks = Object.values(top5);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Stocks' }} />

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
