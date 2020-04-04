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
                    <h6><ul className="list-group">
                        <li className="list-group-item">Insurance Agent</li>  
                        <li className="list-group-item">Entrepreneuer</li>
                        <li className="list-group-item">Web Developer</li>
                        <li className="list-group-item">Celebrate Recovery Leader</li></ul>
                        <br/>
                        How I can best serve you?
                    </h6>
                    <Button 
                        name="Schedule Consultation"
                        link="#calendly"
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