var UserWatchingList = React.createClass({
  render: function(){

    var Watches = this.props.watches.map(function(watch) {
      return < UserWatchingItem key={watch.id} issue_id={watch.issue_id} title={watch.issue.title} image_url={watch.issue.image_url} status={watch.issue.status} />
    });

    return (
      <div className="user_watching_list_wrapper">

        <h3 className="ui horizontal divider header"> Watching </h3>

        <div className="ui feed small">
            { this.props.watches.length == 0 ?
              <p> No issues being watched. </p>
            :
              React.addons.createFragment({Watches})
            }
        </div>

      </div>
      )
  }
})
