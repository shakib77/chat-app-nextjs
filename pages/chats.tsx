import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {useContext, useEffect, useState} from 'react';
import {Context} from '../context';

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then((module) => module.ChatEngine),
);

const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then((module) => module.MessageFormSocial),
);

const Chats = () => {
  const {userName, secret} = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) setShowChat(true);
  }, []);

  useEffect(() => {
    if ((userName && userName.length === 0) || (secret && secret.length === 0))
      router.push('/');

    if (userName === undefined || secret === undefined) router.push('/');
  }, []);

  return (
    <div className='background'>
      <div className='shadow'>
        {showChat ? (
          <ChatEngine
            // @ts-ignore
            projectID='43011817-0ffd-425d-b2a8-4c1bedbd32cb'
            userName={userName}
            userSecret={secret}
            renderNewMessageForm={() => <MessageFormSocial />}
          />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Chats;
