import React, {createContext} from 'react';
import {StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JournalHomePage from './pages/JournalHomePage';
import PreparationHomePage from './pages/PreparationHomePage';
import SessionHomePage from './pages/SessionHomePage';
import LoginPage from './pages/LoginPage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import useAuthentication from './hooks/AuthenticationHandler';
import DisconnectionButton from './components/shared/DisconnectionButton';

const Tab = createBottomTabNavigator();
const TokenContext = createContext<string | null>(null);
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
                <TokenContext.Provider value={token}>
                  <DisconnectionButton
                    handleDisconnection={handleDisconnection}
                  />
                  <JournalHomePage />
                </TokenContext.Provider>
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
                <TokenContext.Provider value={token}>
                  <DisconnectionButton
                    handleDisconnection={handleDisconnection}
                  />
                  <SessionHomePage />
                </TokenContext.Provider>
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
                <TokenContext.Provider value={token}>
                  <DisconnectionButton
                    handleDisconnection={handleDisconnection}
                  />
                  <PreparationHomePage />
                </TokenContext.Provider>
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
export {TokenContext};
