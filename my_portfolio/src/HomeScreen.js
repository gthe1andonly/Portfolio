import React from 'react';
import './homescreen.css';
import tiley from './rileysRumble.jpg';


function HomeScreen(){
    return (<div className='home_layout'>
            <div className='home_left_layout'>
                <div><h1>Hello There! My name is Giresse</h1></div>
                <div><img className='my_picture' src={tiley} alt="Giresse"></img></div>
            </div>

            <div className='gt'>

            </div>
        </div>)
}

export default HomeScreen