import React from 'react';
import '../projects.css';
import img1 from '../images/gymbt1.jpg';
import img2 from '../images/gymbt2.jpg';
import img3 from '../images/gymbt3.jpg';
import img4 from '../images/gymbt4.jpg';
import img5 from '../images/gymbt3.jpg';
import img6 from '../images/gymbt6.jpg';
import { Link } from 'react-router-dom';

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
 
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  
  
} 

function Projects(){
    
    return(
        
        <div className='body'>
            
        <div className='projectArea'>
            
            <div className='projectName'>Get Your Mojo Back Together(GYM-BT)</div>
            <div className='slideshow-container'>
                {/* <!-- Full-width images with number and caption text --> */}
                <div className="mySlides">
                    <div className="numbertext">1 / 3</div>
                    <img src={img1} style={{width:'100%'}} alt=""></img> 
                </div>

                <div className="mySlides">
                    <div className="numbertext">2 / 3</div>
                    <img src={img2} style={{width:'100%'}} alt=""></img>    
                </div>
                <div className="mySlides">
                    <div className="numbertext">1 / 3</div>
                    <img src={img3} style={{width:'100%'}} alt=""></img> 
                </div>
                <div className="mySlides">
                    <div className="numbertext">1 / 3</div>
                    <img src={img4} style={{width:'100%'}} alt=""></img> 
                </div>
                <div className="mySlides">
                    <div className="numbertext">1 / 3</div>
                    <img src={img5} style={{width:'100%'}} alt=""></img> 
                </div> <div className="mySlides">
                    <div className="numbertext">1 / 3</div>
                    <img src={img6} style={{width:'100%'}} alt=""></img> 
                </div>

                {/* <!-- Next and previous buttons --> */}
                <Link className="prev" onclick={plusSlides(-1)}>&#10094;</Link>
                <Link className="next" onclick={plusSlides(1)}>&#10095;</Link>
                            </div>
                        <br></br>
                {/* <!-- The dots/circles --> */}
                <div style={{textAlign:"center"}}>
                <span className="dot" onclick={currentSlide(1)}>&nbsp;</span>
                <span className="dot" onclick={currentSlide(2)}>&nbsp;</span>
                <span className="dot" onclick={currentSlide(3)}>&nbsp;</span>
                </div>
            <div className='projectObjective'></div>            
            <div className='projectDev'></div>
        </div>

        </div>
    )
}

export default Projects;