import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {Icon, colors, Text} from 'react-native-elements';

const SIZE_ICON = 60;

const IconWithBottomText = ({
  icon,
  text,
  type = 'material',
  onPress = () => {},
}: {
  icon: string;
  text: string;
  type?: string;
  onPress?: (event: GestureResponderEvent) => void;
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Icon name={icon} size={SIZE_ICON} type={type} color={colors.primary} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
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
