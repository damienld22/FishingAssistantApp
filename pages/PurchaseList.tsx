import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SimpleList from '../components/lists/SimpleList';
import {Button, Icon} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import {KEY_STORAGE_PURCHASE_LIST, SIZE_SMALL_ICON} from '../utils';
import ModalTextInput from '../components/modals/ModalTextInput';

export default function PurchaseList() {
  const {t} = useTranslation();
  const [elements, setElements] = useState<string[]>([]);
  const [addModalVisible, setAddModalVisible] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY_STORAGE_PURCHASE_LIST).then((elts) => {
      if (elts) {
        setElements(JSON.parse(elts));
      }
    });
  }, []);

  useEffect(() => {
    if (elements) {
      AsyncStorage.setItem(KEY_STORAGE_PURCHASE_LIST, JSON.stringify(elements));
    }
  }, [elements]);

  return (
    <View style={styles.container}>
      <SimpleList
        items={elements}
        onDeleteIndex={(index: number) => {
          const updatedElements = [...elements];
          updatedElements.splice(index, 1);
          setElements(updatedElements);
        }}
      />

      <Button
        containerStyle={styles.buttonContainer}
        icon={<Icon name="add" size={SIZE_SMALL_ICON} color="white" />}
        title={t('add')}
        onPress={() => setAddModalVisible(true)}
      />

      <ModalTextInput
        isVisible={addModalVisible}
        title={t('addPurchaseItem')}
        onCancel={() => setAddModalVisible(false)}
        onValidate={(value: string) => {
          setAddModalVisible(false);
          if (value) {
            setElements((prev) => [...prev, value]);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 20,
    width: 200,
  },
});
