import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
    render(){
    return (
        <div>
            <div className="jumbotron header row" style={{backgroundImage: "url('assets/codeskillsBKG.png')"}}>
                <div className="col">
                    <img src="./assets/SimonHunt.jpg" className="img-fluid simon" alt="Simon Hunt"/>
                </div>
                <div className="col">
                    <div className="row" style={{height: 10}}></div>
                    <h6><ul>
                        <li>Insurance Agent</li>  
                        <li>Entrepreneuer</li>
                        <li>Web Developer</li>
                        <li>Celebrate Recovery Leader</li>
                        <li>How I can best serve you?</li>
                    </ul></h6>
                    <Button 
                        name="Schedule Consultation"
                        link=""
                    />
                    <Button 
                    name="My Web Portfolio"
                    link="http://freshcoconut.solutions"
                    />
                    <Button 
                    name="Email"
                    link="mailto:freshcoconutsoluions@gmail.com"
                    />
                </div>    
            </div>      
        </div>
            
                
               
    )}
  }
  
  export default Header;