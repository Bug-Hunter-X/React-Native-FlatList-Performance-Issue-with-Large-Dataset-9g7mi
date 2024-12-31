```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const MyComponentSolution = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      windowSize={10} // Optimize rendering window
      ItemSeparatorComponent={() => <View style={styles.separator} />} // Add separators for better performance
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  }
});

export default MyComponentSolution;
```