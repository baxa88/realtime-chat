 import {useState} from 'react';
import axios from 'axios';

const projectID = "70ff8743-1568-4d55-9900-aceda6480ab9";


const LoginForm=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const authObject={'Project-ID' : projectID,'User-Name' : username,'User-Secret' : password}

        try {
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
        
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
            setError('');
        } catch (error) {
            setError(`Foydalanuvchi malumotlari noto'g'ri.`)
        }
    }

    return(
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}
                     className='input' placeholder='Foydalanuvchi nomi' required />
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} 
                    className='input' placeholder='Parol' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Chatni boshlang</span>
                        </button>
                    </div>
                   
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}
export default LoginForm;