import React, {Component} from 'react';

class Filter extends Component {

    render(){
        return(
        <div>
            <div>
                <label>
                    Greased Only?:
                    <input name="greasedOnly"
                    type="checkbox"
                    checked={this.props.greasedOnly}
                    onChange={this.props.handleCheck} />
                </label>
            </div>
            <div>
                <label>
                    Sort By:
                    <select value={this.props.sort} onChange={this.props.handleSelect}>
                        <option value="none">None</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </label>
            </div>
        </div>

        )
    }
}
export default Filter
