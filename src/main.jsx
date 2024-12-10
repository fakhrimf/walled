import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider, useTheme } from './utils/Contexts'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Transfer from './pages/Transfer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/dashboard" element={<App />} />
          <Route path="/transfer" element={<Transfer />} />
        {/* <PrivateRoute path="/dashboard" element={<App />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
      {/* <App /> */}
    </BrowserRouter> 
    </ThemeProvider>
  </StrictMode>,
)
