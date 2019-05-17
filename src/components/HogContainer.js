import React, {Component} from 'react';
import Hog from './Hog';
import {Grid} from 'semantic-ui-react';

class HogContainer extends Component {
    
    render(){
        return(
            <div className="hog-container">
                <Grid>
                    {this.props.hogs.map((hog) => <Hog hog={hog} />)}
                </Grid>
            </div>
        )
    }
}
export default HogContainer