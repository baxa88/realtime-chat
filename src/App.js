import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '70ff8743-1568-4d55-9900-aceda6480ab9';

const App=()=>{
  if(!localStorage.getItem('username')) return <LoginForm/>
  
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     
    />
  );
};
export default App;
