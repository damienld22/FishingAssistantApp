import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, colors, Icon, Overlay, Text} from 'react-native-elements';

const DisconnectionButton = ({
  handleDisconnection,
}: {
  handleDisconnection: Function;
}) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);

  const validateDisconnection = () => {
    setOpen(false);
    handleDisconnection();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Icon size={30} name="exit-to-app" color={colors.primary} />
      </TouchableOpacity>
      <Overlay
        overlayStyle={styles.modal}
        isVisible={open}
        onBackdropPress={() => setOpen(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            {t('authenticationValidateDisconnection')}
          </Text>
          <View style={styles.buttonsContainer}>
            <Button title={t('yes')} onPress={validateDisconnection} />
            <Button title={t('no')} onPress={() => setOpen(false)} />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modal: {
    margin: 20,
  },
  modalContainer: {
    padding: 20,
  },
  modalText: {
    color: colors.primary,
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default DisconnectionButton;
