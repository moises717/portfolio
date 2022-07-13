import { BrowserRouter } from 'react-router-dom';
import Layout from './layout'

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
