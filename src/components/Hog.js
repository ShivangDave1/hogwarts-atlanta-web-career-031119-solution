import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import HogContainer from './HogContainer';
import HogDetails from './HogDetails';
import HogFront from './HogFront'

class Hog extends Component{
    constructor(){
        super()
        this.state = {
            showDetails: false
        }
    }

    //FUNCTION THAT RETURNS IMG JSX WITH URL
    imgSrc = () => {
        let slug = this.props.hog.name.toLowerCase().split(" ").join("_")
        //return `../hogs-imgs/${slug}.jpg`
        return (<img src={require(`../hog-imgs/${slug}.jpg`)} alt="" />)
    }

    handleClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    //RENDER A CARD
    render(){
        console.log(this.state, "state from hog")
        let name = this.props.hog.name
        return (
         this.state.showDetails ? <HogDetails handleClick={this.handleClick} hog={this.props.hog}/> : <HogFront hog={this.props.hog} imgSrc={this.imgSrc} handleClick={this.handleClick}/> 
        )
    }
}

export default Hog