
import './App.css'

function App() {


  return (
    <>
      <h1>Source Code for Javaish Links</h1>
      <div className="card">
        <button onClick={() => {window.open("https://github.com/TrackerJo/JavaishLezer", '_blank')!.focus();}}>Javaish's Lezer</button>
        <br />
        <br />
        <button onClick={() => {window.open(" https://github.com/TrackerJo/ProfessorJavaish", '_blank')!.focus();}}>Javaish's IDE Code</button>
        <br />
        <br />
        <button onClick={() => {window.open("https://trackerjo.github.io/ProfessorJavaish/", '_blank')!.focus();}}>Javaish's IDE Website</button>
        <br />
        <br />
        <button onClick={() => {window.open("https://github.com/TrackerJo/javaish-nao-server", '_blank')!.focus();}}>Javaish's Robot Integration Server Code</button>
        <br />
        <br />
        <button onClick={() => {window.open("https://github.com/TrackerJo/Javaish", '_blank')!.focus();}}>Javaish's Language Code</button>
      </div>
      
    </>
  )
}

export default App
