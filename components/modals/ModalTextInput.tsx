import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, StyleSheet, View} from 'react-native';
import {Text, Input} from 'react-native-elements';
import CancelButton from '../buttons/CancelButton';
import ValidateButton from '../buttons/ValidateButton';

export default function ModalTextInput({
  title,
  isVisible,
  onValidate,
  onCancel,
}: {
  title: string;
  isVisible: boolean;
  onValidate: Function;
  onCancel: Function;
}) {
  const {t} = useTranslation();
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalView}>
          <Text h4>{title}</Text>
          <Input
            placeholder={t('element')}
            style={styles.input}
            onChangeText={setValue}
          />
          <View style={styles.buttons}>
            <ValidateButton onPress={() => onValidate(value)} />
            <CancelButton onPress={() => onCancel()} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    marginTop: 20,
  },
  modalView: {
    marginTop: 'auto',
    marginBottom: 'auto',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  buttons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
