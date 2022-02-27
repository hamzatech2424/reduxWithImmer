import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';

const AbstractButton = ({
    processing,
    width,
    height,
    bgcolor,
    label,
    txtSize,
    txtColor,
    onPress,
    BorderRad,
    withSadow,
}) => {

    const defaultHeight = height ? height :50 ;
  const defaultWidth = width ? width : 119;
  const defaultColor = bgcolor ? bgcolor : 'pink';
  const defaultLabel = label ? label : 'TextHere';
  const defaultLabelTextSize = txtSize ? txtSize : 17;
  const defaultLabelTextColor = txtColor ? txtColor : 'white';
  const defBorderRad = BorderRad ? BorderRad : 8;

  const buttonStyle = [
    {
      width: defaultWidth,
      height: defaultHeight,
      backgroundColor: defaultColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    withSadow
      ? {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 3.5,
        }
      : {},
  ];

    
  
  
  if(processing){
      return (
        <TouchableOpacity
        onPress={onPress}
        style={[
          ...buttonStyle,
          {justifyContent: 'center', alignItems: 'center'},
        ]}
      >
        <ActivityIndicator size='small' color="white" />
      </TouchableOpacity>
      )
  }   

else {
  return (
    <TouchableOpacity
        onPress={onPress}
        disabled={processing}
        style={buttonStyle}
      >
        <Text
          style={{
            fontSize: defaultLabelTextSize,
            color: defaultLabelTextColor,
            textAlignVertical: 'center',
          }}
        >
          {defaultLabel}
        </Text>
      </TouchableOpacity>
  );

  }  
};

export default AbstractButton;

const styles = StyleSheet.create({});




