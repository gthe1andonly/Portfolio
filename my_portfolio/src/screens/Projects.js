import React from 'react';


function Projects(){
    return(
        <div className='body'>
            
        <div className='projectArea'>
            
            <div className='projectName'>Get Your Mojo Back Together(GYM-BT)</div>
            <div className='projectSlides'>
                {/* <!-- Full-width images with number and caption text --> */}
                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="gymbt1.jpg" style="width:100%"></img>
                
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src="gymbt2.jpg" style="width:100%"></img>
                    
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="gymbt3.jpg" style="width:100%"></img>
                </div>

                {/* <!-- Next and previous buttons --> */}
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                            </div>
            <div className='projectObjective'></div>            
            <div className='projectDev'></div>
        </div>

        </div>
    )
}

export default Projects;