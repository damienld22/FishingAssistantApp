import React from 'react';
import {StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  JournalHomePage,
  PreparationHomePage,
  SessionHomePage,
  LoginPage,
} from './pages';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import useAuthentication from './hooks/AuthenticationHandler';
import DisconnectionButton from './components/shared/DisconnectionButton';

const Tab = createBottomTabNavigator();

const App = () => {
  const {t} = useTranslation();
  const {
    token,
    error,
    isLoading,
    handleAuthentication,
    handleDisconnection,
  } = useAuthentication();

  return (
    <>
      <StatusBar barStyle="default" />
      {isAuthenticated(token) ? (
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
              {() => (
                <>
                  <DisconnectionButton
                    handleDisconnection={handleDisconnection}
                  />
                  <JournalHomePage />
                </>
              )}
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
              {() => (
                <>
                  <DisconnectionButton
                    handleDisconnection={handleDisconnection}
                  />
                  <SessionHomePage />
                </>
              )}
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
              {() => (
                <>
                  <DisconnectionButton
                    handleDisconnection={handleDisconnection}
                  />
                  <PreparationHomePage />
                </>
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <LoginPage
          error={error}
          isLoading={isLoading}
          handleAuthentication={handleAuthentication}
        />
      )}
    </>
  );
};

function isAuthenticated(token: string | null) {
  return token && token.length > 0;
}

export default App;
