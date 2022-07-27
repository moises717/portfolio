import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {

  return (
    <main>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  )
}

export default App
