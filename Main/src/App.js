import React from 'react'
import person from'../assets/person_placeholder.png';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <aside className='certs'>Aside</aside>
                <aside className='main'>
                    <img src={person} className='person'/>
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