import React from 'react'
import './main.css';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <aside className='certs'>Aside</aside>
                <aside className='main'>Main 
                    <nav>
                        <ul id='links'>
                            <li><a>1</a></li>
                            <li><a>2</a></li>
                            <li><a>3</a></li>
                        </ul>
                    </nav>
                </aside>
                <footer className='sites'>Footer</footer>
            </div>
        )
    }
}

export default App;