import MyComponent from './MyComponent'
import AuthContext from './createContext';
import './App.css'

function App() {
  const username = 'Kim0';

  return (
    <AuthContext.Provider value={username}>
      <MyComponent />
    </AuthContext.Provider>
  )
}

export default App
