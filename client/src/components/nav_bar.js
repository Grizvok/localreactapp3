import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event)
  }

render() {
  return (
//   <nav onClick={this.handleClick} className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
//   <Link className="navbar-brand" to="/">Twitchthroe</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
//   aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//        {/* <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <div className="dropdown-divider"></div>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li> */}
//       <li data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-item navbar-collapse">
//         {/* <Link to="/login"><a role="button" className="nav-link" href="#">Login</a></Link> */}
//         <Link className="nav-link" to="/login">Login</Link>
//       </li>
//       <li data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-item navbar-collapse">
//         <Link className="nav-link" to="/register">Register</Link>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
  );
};
}

export default NavigationBar;