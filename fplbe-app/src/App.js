import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.cryptonator.com/api/full/btc-usd")
      .then((respons) => respons.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  return (
    <div className="App">
      <h1>Selamat Datang di Website Crypto Kami</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/profile" className="Button">
              Profil
            </Link>
          </li>
          <li>
            <Link to="/trading" className="Button">
              Trading
            </Link>
          </li>
          <li>
            <Link to="/markets" className="Button">
              Markets
            </Link>
          </li>
        </ul>
        <switch>
          <Route path="/profile">
            <div className="profil-1">
              <h4>Name</h4>
              <p>Fian Awamiry Maulana </p>
              <h4>Adress</h4>
              <p>Perumahan Wonorejo Indah Blok Q.04 RT/RW 40/15, Kecamatan Kedujajang, Kabupaten Lumajang, Jawa Timur</p>
              <h4>Contact</h4>
              <p>089515776243</p>
              <h4>LinkedIn</h4>
              <p>Fian Awamiry Maulana</p>
            </div>
            <br />
            <div className="profil-2">
              <h4>Name</h4>
              <p>Muhammad Akmal Rishwanda</p>
              <h4>Adress</h4>
              <p>Jln. Dr Wahidin Sudirohusodo Gresik Jawa timur</p>
              <h4>Contact</h4>
              <p>081217441330</p>
              <h4>LinkedIn</h4>
              <p>Muhammad Akmal Rishwanda</p>
            </div>
          </Route>
          <Route path="/trading">
            <div className="trading">
              <br />
              Base : {user && user.ticker && user.ticker.base}
              <br />
              <br />
              Target : {user && user.ticker && user.ticker.target}
              <br />
              <br />
              Price : {user && user.ticker && user.ticker.price}
              <br />
              <br />
              Volume : {user && user.ticker && user.ticker.volume}
              <br />
              <br />
              Change : {user && user.ticker && user.ticker.change}
              <br />
              <br />
              Change : {user && user.timestamp}
              <br />
              <br />
              Success : {user && user.success}
              <br />
              <br />
              Error : {user && user.error}
            </div>
          </Route>
          <Route path="/markets">
            <div className="marketsmal">
              <h3>Market</h3>
              {user &&
                user.ticker &&
                user.ticker.markets &&
                user.ticker.markets.map((item) => {
                  return <p> {item.market} </p>;
                })}
              <h3>Price</h3>
              {user &&
                user.ticker &&
                user.ticker.markets &&
                user.ticker.markets.map((item) => {
                  return <p> {item.price} </p>;
                })}
              <h3>Volume</h3>
              {user &&
                user.ticker &&
                user.ticker.markets &&
                user.ticker.markets.map((item) => {
                  return <p> {item.volume} </p>;
                })}
            </div>
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
