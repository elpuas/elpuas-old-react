import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appClass: 'myClass'
    };
  }
  componentDidMount() {
    this.setState({ appClass: 'newClass' });
  }
  render() {
    return (
      <div className={`DefaultClass ${this.state.appClass}`}>
        <h1>Welcome to my Profile Page</h1>
        <button className="square" onClick={() => console.log("Hice Click")}>
      </button>
      </div>
    )
  }
}
export default Profile
