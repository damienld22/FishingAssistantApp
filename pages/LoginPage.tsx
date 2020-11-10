import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Text, Input, Button, colors} from 'react-native-elements';

const LoginPage = ({
  isLoading,
  error,
  handleAuthentication,
}: {
  isLoading: boolean;
  error: number | null;
  handleAuthentication: Function;
}) => {
  const {t} = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{...styles.container, opacity: isLoading ? 0.5 : 1}}>
      <Text style={styles.title}>{t('authenticationTitle')}</Text>

      <Input
        placeholder={t('placeholderUsername')}
        onChangeText={setUsername}
        autoCapitalize={'none'}
        leftIcon={{
          type: 'material',
          name: 'account-circle',
          color: colors.primary,
        }}
      />

      <Input
        placeholder={t('placeholderPassword')}
        errorStyle={{color: 'red'}}
        secureTextEntry={true}
        onChangeText={setPassword}
        errorMessage={error ? t('authenticationError') : ''}
        autoCapitalize={'none'}
        leftIcon={{type: 'material', name: 'lock', color: colors.primary}}
      />

      <Button
        buttonStyle={styles.button}
        title={t('authenticationLoginButton')}
        onPress={() => handleAuthentication({username, password})}
      />

      {isLoading && (
        <ActivityIndicator
          style={styles.loader}
          size="large"
          color={colors.primary}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    color: colors.primary,
  },
  button: {
    borderWidth: 2,
    marginTop: 30,
  },
  loader: {
    position: 'absolute',
    top: '50%',
  },
});

export default LoginPage;
