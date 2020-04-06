import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
render(){
    return (
    <div>
        <div className="jumbotron header" style={{backgroundImage: "url('assets/codeskillsBKG.png')"}}>
            <div className="row">
                <div className="col">
                    <h3>Simon Hunt</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src="./assets/SimonHunt.jpg" className="img-fluid simon" alt="Simon Hunt"/>
                </div>
                <div className="col">
                    <h6><ul className="list-group">
                        <li className="list-group-item">Insurance Agent</li>  
                        <li className="list-group-item">Entrepreneuer</li>
                        <li className="list-group-item web"><a href="http://freshcoconut.solutions">Web Developer</a></li>
                        </ul>
                        <br/>
                    </h6>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>How can I serve you?</h4>
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
            <hr />
            <div className="row">
                <div className="col" />
                <div className="col">
                    <a href="mailto:freshcoconutsoluions@gmail.com"><i class="far fa-envelope fa-lg"></i></a>
                </div>
                <div className="col">
                    <a href="https://www.facebook.com/SimonHuntInc/"><i class="fab fa-facebook-f fa-lg"></i></a>
                </div>
                <div className="col" />
            </div>
        </div>        
    </div>                
    )}
  }
  
  export default Header;