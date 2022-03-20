import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Content from './components/content/content'
import React from 'react';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRefs = {
      home: React.createRef(),
      about: React.createRef(),
      projects: React.createRef(),
      resume: React.createRef(),
      contact: React.createRef()
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar myRefs={this.myRefs}/>
        <Content myRefs={this.myRefs} />
      </div>
    );
  }
}

export default App;