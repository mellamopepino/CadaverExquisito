import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 5000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <div>
            {loading &&
                <div class="loading-app">
                    <img src="https://i.giphy.com/gFhSNeQ1Tca65woJbc.gif"/>
                    <p>Loading parrot...</p>
                </div>
            }
        </div>
    );
}

export default App;
