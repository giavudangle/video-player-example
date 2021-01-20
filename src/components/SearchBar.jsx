import React,{useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
  const[term,setTerm] = useState('');

  const _onSubmit = e => {
    e.preventDefault();
    onFormSubmit(term);
  }

  return(
    <div className="search-bar ui segment">
      <form onSubmit={_onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input 
          onChange={e => setTerm(e.target.value)}
          value={term} 
          type="text"/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
