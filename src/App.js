import LoginButton from './components/LoginButton'
import './App.css';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {isLodaing} = useAuth0();
  if(isLodaing) return <div>Loading...</div>
  return (<>
    <LoginButton />
    <LogoutButton />
    <Profile />
    </>
  );
}

export default App;
