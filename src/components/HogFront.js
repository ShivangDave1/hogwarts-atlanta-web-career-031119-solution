import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';


const HogFront = (props) => {
    let {name} = props.hog
    return(
        <div className="hog" onClick={props.handleClick}>
            <Card>
                <Card.Header> 
                    {name} 
                </Card.Header>
                {props.imgSrc()}
            </Card>
        </div>
    )
}

export default HogFront