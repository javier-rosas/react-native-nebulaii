import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`flex-1 bg-red-500 p-5`}>
      <View style={tw`bg-blue-500 p-4 rounded m-10`}>
        <Text style={tw`text-white text-center`}>Hello</Text>
      </View>
      <View style={tw`bg-blue-500 p-4 rounded`}>
        <Text style={tw`text-white text-center`}>Open up App.tsx to start working on your app!</Text>
      </View>
  </View>
  );
}
