import {useContext} from 'react';
import {Context} from '../context';
import axios from 'axios';
import {useRouter} from 'next/router';

const Auth = () => {
  const {userName, setUserName, secret, setSecret} = useContext(Context);
  const router = useRouter();

  const onSubmit = (event: any) => {
    event.preventDefault();

    if ((userName && userName.length === 0) || (secret && secret.length === 0))
      router.push('/');

    if (
      (userName && userName.length !== 0) ||
      (secret && secret.length !== 0)
    ) {
      axios
        .put(
          'https://api.chatengine.io/users/',
          {username: userName, secret: secret},
          {
            headers: {
              'Private-key': '42901cf7-db8f-4e88-89aa-3dcf925f8e8a',
            },
          },
        )
        .then((r) => {
          router.push('/chats');
        })
        .catch((error) => console.log('error=>', error));
    }
  };

  return (
    <div className='background'>
      <div className='auth-container'>
        <form className='auth-form' onSubmit={(event) => onSubmit(event)}>
          <div className='auth-title'>Next js Chat App</div>

          <div className='input-container'>
            <input
              type='email'
              placeholder='Email'
              className='text-input'
              onChange={(event: any) => setUserName(event.target.value)}
            />
          </div>

          <div className='input-container'>
            <input
              type='password'
              placeholder='Password'
              className='text-input'
              onChange={(event: any) => setSecret(event.target.value)}
            />
          </div>

          <button type='submit' className='submit-button'>
            Login / Sing Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default Auth;
