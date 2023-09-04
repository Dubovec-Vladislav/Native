import React, { FC } from 'react'
import { StatusBar, View, FlatList, ActivityIndicator, Text, Alert, RefreshControl } from 'react-native'
import { PostItem } from './src/entities/post'
import axios from 'axios'
// import newsData from './assets/newsData.json'

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://64de1332825d19d9bfb20329.mockapi.io/news')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <PostItem key={item.id} imageUrl={item.imageUrl} title={item.title} data={item.createdAt} />
        )}
      />
      <StatusBar barStyle="auto" />
    </View>
  );
}