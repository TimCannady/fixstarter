var FilterBar = React.createClass({

	submitSearch: function(e){
		e.preventDefault();
		console.log('saerch')
		var category = $('select').val();
		var keyword = React.findDOMNode(this.refs.keyword).value.trim();
		var location = React.findDOMNode(this.refs.location).value.trim();

		this.props.onSearchSubmit({category: category, keyword: keyword, location: location});
	},

  render: function(){
    return (
      <div className="filter_bar_wrapper">

       <form className="ui form discover_form" onSubmit={this.submitSearch} >
        <div className="field">
          <label htmlFor="di_keyword">Keyword</label>
          <input id="di_keyword" ref="keyword" type="search" name="search[keyword]" placeholder="e.g. hammer, lawn, broken"/>
          <br/>
        </div>

        <div className="field">
          <label htmlFor="di_location">Location</label>
          <input id="di_location" ref="location" type="search" name="search[location]" placeholder="e.g. San Francisco, CA; 94122; Alabama"/>
          <br/>
        </div>

        <div className="field">
          <label>Category</label>
          <select>
          <option value="None">All</option>
          <option value="Heavy">Heavy</option>
          <option value="Very Heavy">Very Heavy</option>
          <option value="Dirty">Dirty</option>
          <option value="Tools">Tools</option>
          <option value="Yard Work & Removal">Yard Work & Removal</option>
          <option value="General Handyman">General Handyman</option>
          <option value="Escalate">Escalate</option>
          <option value="Uncategorized">Uncategorized</option>
          </select>


        </div>

          <button className="ui primary button" type="submit"><a id="search_button">Search</a></button>
	       
       </ form>
       <br/>

      </div>
      )
  }
})
