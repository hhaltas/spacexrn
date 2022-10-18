/* eslint-disable indent */
import * as React from 'react';
import {View, ViewStyle, TouchableOpacity, TextStyle, Text} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {centerLeft} from '../styles/other';

export function Datepicker(props) {
  const {
    style,
    label,
    labelStyle,
    labelTx,
    placeholder,
    placeholderTx,
    maximumDate,

    ...rest
  } = props;

  const [show, setShow] = React.useState(false);
  const headerComponent = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#61AAFA', fontSize: 20}}>Time</Text>
      </View>
    );
  };
  const overridePlaceholder = React.useMemo(
    () => (placeholderTx ? 'Select' : placeholder || 'Select'),
    [placeholder, placeholderTx],
  );

  const onChange = (date: Date) => {
    setShow(false);
    if (rest.onChange) {
      rest.onChange(date);
    }
  };

  return (
    <View style={[style]}>
      {(label || labelTx) && (
        <Text tx={labelTx} text={label} style={labelStyle} />
      )}
      <TouchableOpacity
        style={{
          backgroundColor: '#292D3E',
          height: 50,
          paddingHorizontal: 5,
          borderRadius: 4,
          ...centerLeft,
          paddingLeft: 15,
        }}
        activeOpacity={1}
        onPress={() => setShow(true)}>
        {!rest.date ? (
          <Text style={PLACEHOLDER} text={overridePlaceholder} />
        ) : (
          <Text style={{color: 'white', fontSize: 18}}>
            {rest.mode === 'time'
              ? moment(rest.date).format('LT')
              : rest.mode === 'datetime'
              ? moment(rest.date).format('lll')
              : moment(rest.date).format('LL')}
          </Text>
        )}
      </TouchableOpacity>
      <DateTimePicker
        mode={rest.mode}
        customHeaderIOS={headerComponent}
        confirmTextIOS={'Select'}
        cancelTextIOS={'Cancel'}
        isVisible={show}
        onCancel={() => setShow(false)}
        onConfirm={onChange}
        maximumDate={maximumDate}
        date={rest.date || new Date()}
      />
    </View>
  );
}
