import React from "react";
import './Section2.css';
import card1 from '../images/icon1.png';
import card2 from '../images/icon2.png';
import card3 from '../images/icon3.png';
import card4 from '../images/icon4.png';

function Section2(){
    return(
        <section class='section2'>
                <div class='card'>
                    <img class='icon' src={card1} alt='card1'/>
                    <div class="container">
                        <h4><b>Declarative</b></h4>           
                        <p>React make it painless to creat interactive UIs</p>
                    </div>
                </div>

                <div class='card'>
                    <img class='icon' src={card2}alt='card2' />
                    <div class="container">
                        <h4><b>Components</b></h4>                        
                        <p>Build encapsulated components taht manage their state.</p>
                    </div>
                </div>
                <div class='card'>
                    <img class='icon' src={card3} alt='card3'/>
                    <div class="container">
                        <h4><b>Single-Way</b></h4>
                        
                        <p>A set of immulable values are passed to the component's.</p>
                    </div>
                </div>
                <div class='card'>
                    <img class='icon' src={card4} alt='card4' />
                    <div class="container">
                        <h4><b>JSX</b></h4>                   
                        <p>Statically-typed designed to run on modern brownsers.</p>
                    </div>
                </div>
        </section>
    )
};
export default Section2;