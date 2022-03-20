import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Content from './components/content/content'

function App(props) {
  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  );
}
export default App;