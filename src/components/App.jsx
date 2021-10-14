import React, { useEffect, useState, render } from 'react';
import Greeter from './Greeter';

const App = () => {

    const [username, setUsername] = useState('');
    const [hasLoaded, setLoaded] = useState(false);


    

    const handleClick=() => {
        setLoaded(!hasLoaded);
    };

     

        if (hasLoaded === true) {
            return (
                <>
            
                    <Greeter phrase="Hi there" name="Garrett!" />
                    <Greeter phrase="Like my code" name="Josh?" />
                    <Greeter phrase="Sing for everyone" name="Jake!" />
                    <input value={username} onChange={e => setUsername(e.target.value)} />
                    <p>You are logging in as: {username}</p>
                </>
            );
        } else {
            return (
                
                <>
                    <h1> Loading...</h1>
                    <button
                        value={hasLoaded}
                        onClick={handleClick}>Click to load</button>
                        

                </>

                
            )
        }
    



}

export default App;