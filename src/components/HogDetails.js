import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

const HogDetails = (props) => {
    let key = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    let {specialty, medal, greased} = props.hog
    let weight = props.hog[key]
   return (
    <Card onClick={props.handleClick}>
        <Card.Content>
                <p>{specialty}</p>
                <p>{medal}</p>
                <p>Weight in terms of refrigerators: {weight}</p>
                <p>Greased: {greased.toString()}</p>
        </Card.Content>
    </Card>
   )
} 


export default HogDetails