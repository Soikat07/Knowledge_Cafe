import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import MyBlog from './components/MyBlog/MyBlog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="App container">
      <Header />
      <Blogs />
      <MyBlog />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
