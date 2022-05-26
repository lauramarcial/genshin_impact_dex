function App() {
  const opciones = async () =>{
    const respuesta = await fetch("https://api.genshin.dev/");
    const types = await respuesta.JSON();
    console.log({ types });
  };

  opciones();
  
  return (
    <div className="App container">
      <h1>Genshin Impact Dex</h1>
      <hr />
      <select>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
}

export default App;
