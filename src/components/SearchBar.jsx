import React from 'react';

export default class SearchBar extends React.Component{

  state = {
    term : '',
  }
  _onInputChange = (e) => {
    this.setState({term:e.target.value});
  }

  _onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }
  render(){
    
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this._onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
            onChange={this._onInputChange}
            value={this.state.term} 
            type="text"/>
          </div>
        </form>
      </div>
    )
  }
}