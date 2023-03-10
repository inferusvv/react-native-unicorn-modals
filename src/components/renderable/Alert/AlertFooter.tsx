import React, { useMemo } from 'react';
import { View } from 'react-native';
import type { GestureResponderEvent } from 'react-native';

import AlertButton from './AlertButton';
import styles from './AlertFooter.styles';
import type { AlertButtonT, CreateActionCallback, DefaultTheme } from '../../../types';

interface AlertFooterProps {
  buttons: AlertButtonT[];
  createActionCallback: CreateActionCallback<GestureResponderEvent>;
  theme: DefaultTheme;
}

function splitButtons(buttons: AlertButtonT[]): [AlertButtonT[], AlertButtonT[]] {
  return buttons.reduce<[AlertButtonT[], AlertButtonT[]]>(
    ([l, r], button) => (button.secondary ? [[...l, button], r] : [l, [...r, button]]),
    [[], []],
  );
}

const AlertFooter: React.FC<AlertFooterProps> = ({ buttons, createActionCallback, theme }) => {
  const [left, right] = useMemo(() => splitButtons(buttons), [buttons]);

  const renderButton = (button: AlertButtonT) => (
    <AlertButton
      key={button.text}
      onPress={createActionCallback(button.onPress)}
      theme={theme}
      variant={button.variant}
    >
      {button.text}
    </AlertButton>
  );

  return (
    <View style={styles.buttons}>
      <View style={styles.left}>{left.map(renderButton)}</View>
      <View style={styles.right}>{right.map(renderButton)}</View>
    </View>
  );
};

export default AlertFooter;
