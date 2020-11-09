import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import IconWithBottomText from '../components/shared/IconWithBottomText';

const JournalHomePage = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View testID="journalHomePage" style={styles.containerLine}>
        <View style={styles.line}>
          <IconWithBottomText
            icon="fish"
            text={t('caughtFish')}
            type="font-awesome-5"
          />
        </View>
        <View style={styles.line}>
          <IconWithBottomText icon="event" text={t('mySessions')} />
          <IconWithBottomText icon="location-on" text={t('myLocations')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLine: {
    flex: 1,
    padding: 40,
    paddingTop: 100,
    paddingBottom: 100,
    justifyContent: 'space-evenly',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default JournalHomePage;
