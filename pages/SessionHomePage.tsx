import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import IconWithBottomText from '../components/shared/IconWithBottomText';

const SessionHomePage = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View testID="sessionHomePage">
        <IconWithBottomText
          icon="plus-circle"
          type="font-awesome-5"
          text={t('createSession')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 20,
  },
});

export default SessionHomePage;
