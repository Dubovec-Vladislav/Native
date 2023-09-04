import { StatusBar, View, FlatList } from 'react-native'
import { PostItem } from './src/entities/post'

export default function App() {
  return (
    <View>
      <FlatList />
      <PostItem title={"Tittle1"} data={"12.08.2023"} />
      <PostItem title={"Tittle2"} data={"26.07.2023"} />
      <PostItem title={"Tittle3"} data={"14.02.2023"} />
      <StatusBar barStyle="auto" />
    </View>
  );
}