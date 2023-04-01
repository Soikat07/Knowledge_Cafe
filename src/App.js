import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';

function App() {
  
  return (
    <div className="App container">
      <Header />
      <Blogs />
    </div>
  );
}

export default App;
