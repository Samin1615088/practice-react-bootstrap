import './App.css';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className="p-5 bg-secondary">
      <Header></Header>
      <TopHeadline></TopHeadline>
      
    </div>
  );
}

export default App;
