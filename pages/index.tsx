import {useContext} from 'react';
import {Context} from '../context';

const Auth = () => {
  const {setUserName, setSecret} = useContext(Context);

  return (
    <div className='background'>
      <div className='auth-container'>
        <form
          className='auth-form'
          onSubmit={(event) => event.preventDefault()}>
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
