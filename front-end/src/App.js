import HeartHealth from "./Components/HeartHealth";
let condition = HeartHealth(false);
// snack.is_healthy will be passed into the above function on /snacks/:id page once completed


function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      {condition}
    </div>
  );
}

export default App;
