var Dashboard = React.createClass({

  getInitialState: function(){
    return {streamIssues: this.props.streamIssues}
  },

  componentDidMount: function() {
    if (this.props.environment == 'development'){
      var socket = io('localhost:5001')
      console.log("DEVELOPMENT")
    }else{
      var socket = io("https://node-fixstart.herokuapp.com")
      console.log("NOT DEVELOPMENT")
    }
    var self = this
    socket.on('stream', function(data) {
      console.log('stream-updated success')
      self.refreshStream(data)
    })
  },

  refreshStream: function(data) {
    this.setState({streamIssues: data})
  },

  render: function(){
    return (
      <div className="dashboard_page">
        <h1> Dashboard </h1>
        < DashboardNav />
        < DashboardMap allOpenIssues={this.props.allOpenIssues} zip={this.props.zip} />
        < Stream streamIssues={this.state.streamIssues} />
      </div>
      )
  }
})
