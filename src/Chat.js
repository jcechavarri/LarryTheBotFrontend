import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';

function Chat() {
  
  const styleSet = useMemo(
    () =>
      createStyleSet({
        backgroundColor: 'rgba(150,111,145,.05)',
        bubbleBackground: 'rgba(0, 0, 255, .1)',
        bubbleFromUserBackground: 'rgba(0, 255, 0, .1)',
        rootHeight: '100%',
        rootWidth: '600px',
        bubbleBorderRadius: 20,
        bubbleFromUserBorderRadius: 20,
        sendBoxBackground: 'rgba(100,111,145,.1)',
        sendBoxBorderBottom: 'solid 1px #E6E6E6',
        suggestedActionBorderRadius: 25,
      }),
    []
  );

  // Set the avatar options. 
  const avatarOptions = {
    botAvatarImage: 'https://previews.123rf.com/images/goodzone95/goodzone951803/goodzone95180300023/96668201-icono-de-chatbot-lindo-robot-trabajando-detr%C3%A1s-de-la-computadora-port%C3%A1til-dise%C3%B1o-moderno-de-signo-bo.jpg?fj=1',
    botAvatarInitials: 'LA',
    userAvatarImage: 'https://user-images.githubusercontent.com/42159312/167985075-631cda99-98cc-4eb2-95dd-8fa1fb8cc8e1.jpg',
    userAvatarInitials: 'US'
    };

  const directLine = useMemo(() => createDirectLine({ token: process.env.REACT_APP_AZ_TOKEN }), []);

  return <ReactWebChat directLine={directLine} userID={process.env.BOT_ID} styleSet={styleSet} styleOptions={avatarOptions} />
}
  
export default Chat;