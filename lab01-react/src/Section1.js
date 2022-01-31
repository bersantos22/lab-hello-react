import React from "react";
import './Section1.css';

function Section1(){
    return(
        <section class='section1-div'>
            <div class='container1'>
                <h1>Say Hello to ReactJS</h1>
            </div>

            <div class='container1'>
                <p>You will learn how to use <br></br>the most popular frontend library,<br></br>and become a super Ninja developer. </p>
            </div>
            <div class='container1'>
                <button class='button' id="button1">Awesome!</button>
            </div>
        </section>
    )
};
export default Section1;