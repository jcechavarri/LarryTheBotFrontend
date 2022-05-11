import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';

import './Chat.css';

function Chat() {
  

  const styleSet = useMemo(
    () =>
      createStyleSet({
        backgroundColor: 'rgba(150,111,145,.05)',
        bubbleBackground: 'rgba(0, 0, 255, .1)',
        bubbleFromUserBackground: 'rgba(0, 255, 0, .1)'
      }),
    []
  );

  const directLine = useMemo(() => createDirectLine({ token: process.env.REACT_APP_AZ_TOKEN }), []);

  return <ReactWebChat directLine={directLine} userID={process.env.BOT_ID} styleSet={styleSet} />
}
  
export default Chat;