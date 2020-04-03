import React, {Component} from 'react';

class Button extends Component {
render(){
return (
<div>
<a href={this.props.link}>
   <button type="button"
      className="btn btn-dark">
   {this.props.name}
   </button>
</a>
</div>
)} 
}
export default Button;