import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
render(){
    return (
    <div>
        <div className="jumbotron header" style={{backgroundImage: "url('assets/codeskillsBKG.png')"}}>
            <div className="row">
                <div className="col">
                    <img src="./assets/SimonHunt.jpg" className="img-fluid simon" alt="Simon Hunt"/>
                </div>
                <div className="col">
                    <h6><ul className="list-group">
                        <li className="list-group-item">Insurance Agent</li>  
                        <li className="list-group-item">Entrepreneuer</li>
                        <li className="list-group-item web"><a href="http://freshcoconut.solutions">Web Developer</a></li>
                        <li className="list-group-item">Celebrate Recovery Leader</li></ul>
                        <br/>
                    </h6>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>How can I best serve you?</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <Button 
                    name="Schedule Consultation"
                    link="#calendly"
                />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <Button
                name="Email"
                link="mailto:freshcoconutsoluions@gmail.com"
                />
                </div>
            </div>
        </div>        
    </div>                
    )}
  }
  
  export default Header;