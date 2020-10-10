import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import NewItem from './pages/NewItem';
import Historico from './pages/Historico';
import Evolucao from './pages/Evolucao';
import SemanaAtual from './pages/SemanaAtual';
import Settings from './pages/Settings';
import VerDia from './pages/VerDia';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
		<Stack.Navigator 	
      headerMode='none' 
			screenOptions={{ 
				cardStyle: {
				backgroundColor: '#4C29A3'
				}
			}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewItem" component={NewItem} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Evolucao" component={Evolucao} />
        <Stack.Screen name="SemanaAtual" component={SemanaAtual} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="VerDia" component={VerDia} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default Routes;