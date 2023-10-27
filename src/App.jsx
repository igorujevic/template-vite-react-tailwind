import ReactSvg from './assets/react.svg';

function App() {
  return (
    <div className="simple-gradient flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-6xl font-bold">Simple Template</h1>
      <img src={ReactSvg} alt="react" className="w-20" />
    </div>
  );
}

export default App;
