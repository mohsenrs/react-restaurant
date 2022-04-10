import { BrowserRouter } from 'react-router-dom'
import Category from './components/category/Category'
import Pages from './pages/Pages'
import Search from './components/Search'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
