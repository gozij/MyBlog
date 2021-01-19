import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Link,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import {Component} from 'react';

class Home extends Component {
  render(){
    return(
      <div>
        <h1>My Travel Blog Site</h1>
        <h4>Here you will see my favorite Vacation Destination and Sites!</h4>
        <img src="https://www.freepik.com/free-vector/travel-tourism-illustration-with-resort-sightseeing-elements_6932247.htm#page=1&query=travel&position=14" alt= "Travel"/>
      </div>
    );
  }
}
class About extends Component {
  render(){
    return(
      <div>
        <h1>About</h1>
        <p>I like travelling to different places. This is because I like exploring new things.</p>
        <p>Part of the reason I like travelling is because I get to try out different delicacies
          and meet new people.
        </p>
      </div>
    );
  }
}

class MyBlog extends Component {
  render(){
    return(
      <div>
        <h1>My Blog</h1>
        <p>I like visiting natural environments, scenes and sites:
          <ul>
            <li>Beaches and ocean sites</li>
            <li>Rocky Mountains</li>
            <li>Waterfalls</li>
          </ul>
        </p>
      </div>
    );
  }
}
class Navbar extends Component {
  render(){
    return(
      <div className="nav">
        <Link to="/">Home</Link> | 
        <Link to="My Blog">My Blog</Link> | 
        <Link to="about">About</Link>
      </div>
    );
  }
}

class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="My Blog" path="/my blog" component={MyBlog}/>
          <Route name="About" path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));






