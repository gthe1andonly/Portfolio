import React from 'react';
import './homescreen.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import tiley from './rileysRumble.jpg';


function HomeScreen(){
    return (<div className='home_layout' style={{marginTop:"60px"}}>
            

            <div className='home_right_layout'>
                <div><h1>Hello There! My name is Giresse</h1></div>
                {/* Top button */}
                <div><div><button className="pageButtons">Butt1</button>Star</div></div>
                {/* Middle button */}
                <div className="middleButtons"><div><button className="pageButtons">Butt1</button>Star</div> <div><button className="pageButtons">Butt1</button>Star</div></div>
                {/* Bottom button */}
                <div><div> <button className="pageButtons">Butt2</button></div></div>
                
            </div>
        </div>)
}

export default HomeScreen;