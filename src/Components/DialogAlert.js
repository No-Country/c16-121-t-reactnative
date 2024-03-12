import * as React from "react";
import { View, Button } from "react-native";
import { Colors } from "../Constants/Colors";

import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const DialogAlert = () => {

  return (
    <AlertNotificationRoot>
      <View>
        <Button
          title={'dialog box'}
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: 'Congrats! this is dialog box success',
              button: 'close',
            })
          }
        />
        <Button
          title={'toast notification'}
          onPress={() =>
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: 'Congrats! this is toast notification success',
            })
          }
        />
      </View>
    </AlertNotificationRoot>
  );
};


export default DialogAlert;
