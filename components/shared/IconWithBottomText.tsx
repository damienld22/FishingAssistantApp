import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, colors, Text} from 'react-native-elements';

const SIZE_ICON = 60;

const IconWithBottomText = ({
  icon,
  text,
  type = 'material',
}: {
  icon: string;
  text: string;
  type?: string;
}) => (
  <View style={styles.container}>
    <Button
      type="clear"
      icon={
        <Icon name={icon} size={SIZE_ICON} type={type} color={colors.primary} />
      }
    />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 120,
    height: 120,
  },
  text: {
    color: colors.primary,
    textAlign: 'center',
  },
});

export default IconWithBottomText;
