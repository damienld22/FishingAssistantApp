import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Button, colors} from 'react-native-elements';
import {Icon} from 'react-native-elements';

const SessionHomePage = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View testID="sessionHomePage">
        <Button
          titleStyle={styles.buttonTitle}
          iconRight
          type="clear"
          icon={
            <Icon name="add" size={50} type="material" color={colors.primary} />
          }
          title={t('createSession')}
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
