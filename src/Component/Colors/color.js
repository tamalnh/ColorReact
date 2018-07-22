import React, {Component} from 'react';
import './color.css'
class Color extends Component {

    state = {
        color: null,
        isColor: false
    }

    boxClickHandler = () => {

        this.setState({
            color: this.props.color
        })
    }
    
    render(){
        return(
            <div className="color">
                <div style={{backgroundColor: this.props.color}} onClick={this.boxClickHandler}> {this.state.color} </div>
            </div>
        )
    }
}

export default Color;