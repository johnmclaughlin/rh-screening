import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

require('./assets/stylesheets/styles.scss');


class GetUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

//'http://jsonplaceholder.typicode.com/users';
  //`https://www.reddit.com/r/${this.props.subreddit}.json`

  componentDidMount() {
    axios.get(`users.json`)
      .then(res => {
        console.log(res.data);
        const users = res.data.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
          })
        console.log(users);
        this.setState({ users });
      });
  }

  render() {
    return (
      <div>
        <h1>Exercise {this.props.exercise}</h1>
        <div className="users">
          {this.state.users.map(user =>
            <div className="users__row" key={user.id}><div>{user.name}</div> <div>{user.username}</div> <div><a href={"mailto:"+user.email}>{user.email}</a></div> <div>{user.address.street}<br />{user.address.city}&nbsp;&nbsp;{user.address.zipcode}</div></div>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <GetUsers exercise="3: Users"/>,
  document.getElementById('root')
);
