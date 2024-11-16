import {TextInput, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {moderateScale} from '../../utils/helper';
import {Colors} from '../../utils/colors';

type Props = {
  value: string;
  onChangeText: (e: string) => void;
  placeholder: string;
  customStyle?: StyleProp<ViewStyle>;
};

export const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  customStyle,
}: Props) => {
  return (
    <TextInput
      style={[styles.input, customStyle]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    borderColor: Colors.black,
    borderWidth: moderateScale(1),
    padding: moderateScale(8),
    marginBottom: moderateScale(16),
  },
});
