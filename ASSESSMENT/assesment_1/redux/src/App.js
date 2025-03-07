import React from 'react'
import { ThemeProvider } from "./components/contexttoggle/ThemeContext";
import MainComponent from "./components/contexttoggle/MainComponent";

function App() {
  return (
    <div>

    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
    </div>
  )
}

export default App
