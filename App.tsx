import React from 'react';
import { StatusBar, Text } from 'react-native';

import {Ubuntu_500Medium ,useFonts} from '@expo-google-fonts/ubuntu';
import {UbuntuCondensed_400Regular } from '@expo-google-fonts/ubuntu-condensed';

import {MyProvider} from './src/contexts/database'
import Routes from './src/routes';

export default function App() {

	const [fontsLoaded] = useFonts({
		Ubuntu_500Medium,
		UbuntuCondensed_400Regular
	});

	if(!fontsLoaded){

		return <Text>Carregando...</Text>

	}

  return (
    <MyProvider>
		<StatusBar barStyle="default" backgroundColor="transparent" translucent/>
		<Routes/>
    </MyProvider>
  );
}