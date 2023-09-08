function App() {
  return (
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="file"/>
        <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
