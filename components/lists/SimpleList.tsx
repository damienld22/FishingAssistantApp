import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors, Icon, ListItem} from 'react-native-elements';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {SIZE_SMALL_ICON} from '../../utils';

export default function SimpleList({
  items,
  onDeleteIndex,
}: {
  items: string[];
  onDeleteIndex: Function;
}) {
  return (
    <ScrollView style={styles.container}>
      {items &&
        items.map((value, i) => (
          <ListItem key={i} bottomDivider containerStyle={styles.item}>
            <ListItem.Content style={styles.line}>
              <ListItem.Title>{value}</ListItem.Title>
              <TouchableHighlight onPress={() => onDeleteIndex(i)}>
                <Icon
                  name="trash"
                  size={SIZE_SMALL_ICON}
                  type="font-awesome-5"
                  color={colors.greyOutline}
                />
              </TouchableHighlight>
            </ListItem.Content>
          </ListItem>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  item: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    margin: 5,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
