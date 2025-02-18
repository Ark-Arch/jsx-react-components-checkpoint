import './App.css'
import Name from './components/Name'
import Price from './components/Price'
import Description from './components/Description'
import Image from './components/Image'

function App() {

  const myName = ''
  return (
    <>
      <div className="card" style={{width: "18rem;"}}>
        <div className="card-body">
          <h5 className="card-title">BLACK FRIDAY!!!</h5>
        </div>
        <Image/>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><Name/></li>
          <li className="list-group-item"><Price/></li>
          <li className="list-group-item"><Description/></li>
        </ul>
      </div>
      Hello, {myName || 'there!'}
    </>
  )
}

export default App
