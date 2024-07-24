import { infiniteLogo } from './Data/Data';

function App() {
  return (
    <>
      <div className="w-screen h-screen grid grid-cols-5 gap-6 justify-center items-center">
        <img width={1000} height={1000} src={infiniteLogo[1].image} />
      </div>
    </>
  );
}

export default App;
