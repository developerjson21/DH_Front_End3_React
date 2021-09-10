import React from 'react';

class Aventura extends React.Component{

    render(){
        return( <p className='historia'>{this.props.historia}</p> )
    }
}

export default Aventura;