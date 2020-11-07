import React from 'react';
import {StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {JournalHomePage, PreparationHomePage, SessionHomePage} from './pages';
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
            name="Journal"
            component={JournalHomePage}
            options={{
              tabBarLabel: ({color}) => (
                <Text style={{color}}>{t('tabTitleJournal')}</Text>
              ),
              tabBarIcon: ({size, color}) => (
                <Icon name="library-books" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Session"
            component={SessionHomePage}
            options={{
              tabBarLabel: ({color}) => (
                <Text style={{color}}>{t('tabTitleSession')}</Text>
              ),
              tabBarIcon: ({size, color}) => (
                <Icon name="create" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Preparation"
            component={PreparationHomePage}
            options={{
              tabBarLabel: ({color}) => (
                <Text style={{color}}>{t('tabTitlePreparation')}</Text>
              ),
              tabBarIcon: ({size, color}) => (
                <Icon name="build" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
