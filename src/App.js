import './App.css';
import Button from './components/button/button';

const rhyme = ["ekete", "pekete", "cukota", "pé", "ábel", "bábel", "dominé"];

function App() {
  
  return (
    <>
    <div className="form">
      <Button text="Send" />
    </div>

    <div>Hello new branch</div>

    <div className="form2">
      <Button text="Send2" />
    </div>

    <div className="form3">
      { rhyme.map( (item) => (
        <Button key={item} text={item}/> //a key a legkülső listaelemen van, mert oda kell a unique key. Ha ez wrappelve lenne, akkor eggyel kintebb kellene tenni
      ))}
    </div>

    </>
  );

}


export default App;
