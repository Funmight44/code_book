
import Footer from './components/footer';
import Header from './components/header';
import './index.css';
import AllRoutes from './routes/allRoutes';

function App() {
  return (
    <div className="App dark:bg-slate-800">   
        <Header/>
        <AllRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
