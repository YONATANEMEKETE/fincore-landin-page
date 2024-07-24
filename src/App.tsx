function App() {
  const imageArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="w-screen h-screen grid grid-cols-5 gap-6 justify-center items-center">
        {imageArr.map((_, index) => (
          <img
            key={index}
            src={`https://ik.imagekit.io/6qizpphtd1/HeroFin.png`}
            height={500}
            width={500}
          />
        ))}
      </div>
    </>
  );
}

export default App;
