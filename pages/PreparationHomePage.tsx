import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import IconWithBottomText from '../components/shared/IconWithBottomText';

const PreparationHomePage = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View testID="preparationHomePage" style={styles.containerLine}>
        <View style={styles.line}>
          <IconWithBottomText icon="shopping-cart" text={t('shoppingList')} />
          <IconWithBottomText icon="list" text={t('fishingList')} />
        </View>
        <View style={styles.line}>
          <IconWithBottomText icon="anchor" text={t('fishingRigs')} />
          <IconWithBottomText icon="bookmark" text={t('bookmarks')} />
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

export default PreparationHomePage;
