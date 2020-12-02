import React from 'react';
import {StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JournalHomePage from './pages/JournalHomePage';
import PreparationHomePage from './pages/PreparationHomePage';
import SessionHomePage from './pages/SessionHomePage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const App = () => {
  const {t} = useTranslation();

  return (
    <>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="journal"
            options={{
              tabBarLabel: ({color}) => (
                <Text style={{color}}>{t('tabTitleJournal')}</Text>
              ),
              tabBarIcon: ({size, color}) => (
                <Icon name="library-books" size={size} color={color} />
              ),
              tabBarTestID: 'tabScreenJournal',
            }}>
            {() => <JournalHomePage />}
          </Tab.Screen>
          <Tab.Screen
            name="session"
            options={{
              tabBarLabel: ({color}) => (
                <Text style={{color}}>{t('tabTitleSession')}</Text>
              ),
              tabBarIcon: ({size, color}) => (
                <Icon name="create" size={size} color={color} />
              ),
              tabBarTestID: 'tabScreenSession',
            }}>
            {() => <SessionHomePage />}
          </Tab.Screen>
          <Tab.Screen
            name="preparation"
            options={{
              tabBarLabel: ({color}) => (
                <Text style={{color}}>{t('tabTitlePreparation')}</Text>
              ),
              tabBarIcon: ({size, color}) => (
                <Icon name="build" size={size} color={color} />
              ),
              tabBarTestID: 'tabScreenPreparation',
            }}>
            {() => <PreparationHomePage />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
