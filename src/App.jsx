import { Toaster } from 'react-hot-toast';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className='container mx-auto px-4'>
      <Header />
      <Courses />
      <Toaster />
    </div>
  );
}

export default App;
