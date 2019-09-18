import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';

//ALL HOGS FROM DATASET
import hogs from '../porkers_data';

//COMPONENTS FOR HOGS
import HogContainer from './HogContainer';
import Filter from './Filter';

class App extends Component {

  //STATES
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      greasedOnly: false,
      sort: "none"
    }
  }


  //FILTER HOGS GREASED OR NOT
  filteredHogs = () => {
    if(this.state.greasedOnly){
      const hogs = [...this.state.hogs]
      return hogs.filter((hog)=> hog.greased)
    }else{
      return [...this.state.hogs]
    }
  }

  //SORT BY NAME OR WEIGHT
  sortedHogs = (hogs) => {
    if(this.state.sort==="none"){
      return [...this.state.hogs]
    }
    else if(this.state.sort==="name"){
      return hogs.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    }else{
      return hogs.sort((a, b)=>{
        let key = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        return a[key] - b[key];
      })
    }
  }

  //RETURN HOGS WITH OR WITHOUT FILTER
  selectedHogs = () => {
    return this.sortedHogs(this.filteredHogs())
  }

  //SET STATE OF CHECKBOX
  handleCheck = (event) => {
    // this.setState({greasedOnly: event.target.checked})
    this.setState(prevState => ({greasedOnly: !prevState.greasedOnly})) //WORKS IN ASYNC TOO
  }

  //SET STATE OF SORT TYPE
  handleSelect = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {

    //CONSOLE LOG
    // console.log('sort:',this.state.sort)

    return (

      // {/* PASSING STATES TO FILTER & HOG CONTAINER COMPONENT */}

      <div className="App">
          <Nav />

          <Filter
            greasedOnly={this.state.greasedOnly}
            handleCheck={this.handleCheck}

            sort={this.state.sort}
            handleSelect={this.handleSelect}
          />

          <HogContainer hogs={this.selectedHogs()}/>
      </div>
    )
  }
}

export default App;
