import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import IconWithBottomText from '../components/shared/IconWithBottomText';
import FishingListPage from './FishingListPage';
import PurchaseListPage from './PurchaseList';

type PreparationStackParamList = {
  Home: undefined;
  FishingList: undefined;
  PurchaseListPage: undefined;
};

const PreparationStack = createStackNavigator<PreparationStackParamList>();

const HomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<PreparationStackParamList, 'Home'>;
}) => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View testID="preparationHomePage" style={styles.containerLine}>
        <View style={styles.line}>
          <IconWithBottomText
            icon="shopping-cart"
            text={t('shoppingList')}
            onPress={() => navigation.navigate('PurchaseListPage')}
          />
          <IconWithBottomText
            icon="list"
            text={t('fishingList')}
            onPress={() => navigation.navigate('FishingList')}
          />
        </View>
        <View style={styles.line}>
          <IconWithBottomText icon="anchor" text={t('fishingRigs')} />
          <IconWithBottomText icon="bookmark" text={t('bookmarks')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const PreparationHomePage = () => {
  const {t} = useTranslation();

  return (
    <PreparationStack.Navigator>
      <PreparationStack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <PreparationStack.Screen
        name="FishingList"
        component={FishingListPage}
        options={{
          title: t('titlePageFishingList'),
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <PreparationStack.Screen
        name="PurchaseListPage"
        component={PurchaseListPage}
        options={{
          title: t('titlePagePurchaseListPage'),
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
    </PreparationStack.Navigator>
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
