import React from 'react';
import {useTranslation} from 'react-i18next';
import {GestureResponderEvent, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export default function CancelButton({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void;
}) {
  const {t} = useTranslation();

  return <Button style={styles.button} onPress={onPress} title={t('cancel')} />;
}

const styles = StyleSheet.create({
  button: {
    width: 200,
  },
});
