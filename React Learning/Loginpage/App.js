import './App.css';

function App() {
  return (
    <>
    <div id="bg"></div>
    <form>
  <div className="form-field">
    <input type="email" placeholder="Email / Username" required/>
  </div>
  
  <div className="form-field">
    <input type="password" placeholder="Password" required/>                         </div>
  
  <div className="form-field">
    <button class="btn" type="submit">Log in</button>
  </div>
</form>
</>
  );
}

export default App;
