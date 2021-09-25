import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// BrowserRouter : Sebagai komponen yang akan membungkus aplikasi
// Route : Didalam route ada komponen
// Switch : Membungkus didalamnya ada route
// Link : Link a herf
import "./App.css";
function App() {
  const [user, setUser] = useState([]);
  //UseState = komponen yang berfungsi untuk menyimpan datanya
  //UseState = user berfungsi untuk menyimpan data array
  //setUser = berfungsi untuk mengubah user
  useEffect(() => {
    //fungsi dipanggil ketika aplikasi mau jalan
    fetch("https://api.cryptonator.com/api/full/btc-usd")
      //fetch = membikin request ke https
      .then((respons) => respons.json())
      //terima respon dan responnya diubah respon menjadi json
      //res.json  = res(bisa diganti apa saja)
      .then((data) => setUser(data));
    //dia akan mengubah user yang awalnya array kosong dan diubah menjadi data
    //setUser = data
    //fetch("https://exchange.bitcoin/api/trades?since=5",{method:"get"});
  }, []);
  console.log(user);
  return (
    <div className="App">
      <h1>Selamat Datang di Website Crypto Kami</h1>
      <BrowserRouter>
        <Link to="/profile">Profil</Link>

        <br />
        <Link to="/home">Trading</Link>
        <br />
        <Link to="/about">Markets</Link>
        <br />
        <switch>
          <Route path="/profile">
            <div className="profil">
              <h1>Ini nanti isi profil kita mal</h1>
            </div>
          </Route>
          <Route path="/home">
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
          <Route path="/about">
            <div className="marketsmal">
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
  //eror = karena akses belom punya apa2
  //{user && user.ticker && user.ticker.base}
  //{user.ticker.base}
  //fungsi map kayak for
}
export default App;
//  Temanku kira kira paham apa engga
