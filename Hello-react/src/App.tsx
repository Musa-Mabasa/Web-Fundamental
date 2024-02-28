import './App.css'
import Orange from './Orange';

function App(props: {name: string; surname: string}) {

  return (
    <>
    <div>
      <h1>Welcome</h1>
      <p>{props.name} {props.surname}</p>
    </div>
    <div>Second div</div>
    <Orange fruit='Orange'>
    </Orange>
    <Orange fruit='Apple'>
    </Orange>
    <Orange fruit='Orange'>
    </Orange>
    <Orange fruit='Apple'>
    </Orange>
    <Orange fruit='Orange'>
    </Orange>
    </>
    )
}

export default App
