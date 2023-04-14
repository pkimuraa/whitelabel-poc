
import reactLogo from './assets/react.svg'
import './App.css'

let logo = import.meta.env.VITE_LOGO_URL

function App() {

  return (
    <div className="App">
      <div>
          <img src={logo} className="modeHorizontal" alt="Main Logo" />
      </div>
      <h1>This is a small POC to whitelabel</h1>

      <div className="card">
        There are some steps you need to follow
      </div>
      <div>
      <p>
        <ul>
          <li >Set Enviroment Variables</li>
          <li className='text-primary'>Set Color Scheme for the desired product</li>
          <li >Define what type of background and logo it will use (options like vertical/horizontal)</li>
          <li>All features should be created a Boolean in the backend to use in the frontend</li>
        </ul>
      </p>
      </div>
      <div className=" mt-4">
        <button
          className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          
        >
          tryOut
        </button>
        <button
          className="bg-success hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          
        >
          tryOut
        </button>

        <button
          className="bg-error hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          
        >
          tryOut
        </button>
        <button
          className="bg-gray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          
        >
          tryOut
        </button>
        <div>
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center border-red-300 border-2 mt-4 flex-wrap">
          <img className="max-h-full max-w-full p-4" src={logo} alt="Box with image" />
          <p> Background Example</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default App
