import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, colors, Text} from 'react-native-elements';

const SIZE_ICON = 60;

const IconWithBottomText = ({icon, text}: {icon: string; text: string}) => (
  <View style={styles.container}>
    <Button
      type="clear"
      icon={
        <Icon
          name={icon}
          size={SIZE_ICON}
          type="material"
          color={colors.primary}
        />
      }
    />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: colors.primary,
  },
});

export default IconWithBottomText;
