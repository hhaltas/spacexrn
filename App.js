import RootNavigator from './app/index';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar hidden={false} />
    </>
  );
}
