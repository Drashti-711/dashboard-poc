// import './App.css'
import Dashboard from '@/layouts/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './common/error/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Dashboard />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
