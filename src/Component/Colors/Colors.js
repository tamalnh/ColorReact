import React, {Component} from 'react';
import Color from './color'

class Colors extends Component {


    render(){
        
        return(
            <div className="colors">
                {this.props.colors.map((color, index) => {
                    return <Color key={index} color={color} />
                })}
                
            </div>
        )
    }
}

export default Colors;