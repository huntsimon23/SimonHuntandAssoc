import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
    render(){
    return (
        <div>
            <div className="jumbotron header row" style={{backgroundImage: "url('/shaa/public/assets/CodeskillsBKG.png')"}}>
                <div className="col">
                    <img src="/shaa/public/assets/SimonHunt.jpg" className="img-fluid simon" alt="Simon Hunt"/>
                </div>
                <div className="col">
                    <div className="row" style={{height: 10}}></div>
                    <h6>I am an insurance agent, entrepreneuer, web developer, and Celebrate Recovery leader.  Use calendar below to schedule a 30 minute consultation (via zoom or phone) to discuss how I can best serve you!</h6>
                    <Button 
                    name="Simon's web portfolio"
                    link="http://freshcoconut.solutions"
                    />
                    <Button 
                    name="email Simon"
                    link="mailto:freshcoconutsoluions@gmail.com"
                    />
                </div>    
            </div>      
        </div>
            
                
               
    )}
  }
  
  export default Header;