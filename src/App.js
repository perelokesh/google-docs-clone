import './App.css';
// import AuthStateListener from './auth/Auth';
import Header from './components/Header';
import Blank from './components/Blank';
import RecentDocuments from './components/RecentDocuments';

function App() {
  return (
    <div className="App">
      <Header/>
      <Blank/>
      <RecentDocuments/>

    </div>
  );
}

export default App;
