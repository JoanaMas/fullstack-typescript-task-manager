import React, {FC, ReactElement} from 'react';
// MUI components
import { Alert, AlertTitle } from '@mui/material';
// Interfaces
import { AlertMessageProps } from './interfaces/AlertMessage';
// Styles
import * as Styled from './style';

const AlertMessage: FC<AlertMessageProps> = (props): ReactElement => {

    const {severity, messageTitle, messageText} = props;

  return (
    <Alert
        severity={severity}
        sx={Styled.taskFormAlert}
      >
        <AlertTitle>{messageTitle}</AlertTitle>
        {messageText}
      </Alert>
  );
};

export default AlertMessage;