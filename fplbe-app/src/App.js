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
      <BrowserRouter>
        <Link to="/profile">Profil nih bos</Link>
        <br />
        <Link to="/home">Home nih bos</Link>
        <br />
        <Link to="/about">About nih bos</Link>
        <br />
        <switch>
          <Route path="/profile">
            <h1>Profil nih bos</h1>
            Base : {user && user.ticker && user.ticker.base}
            <br />
            Target : {user && user.ticker && user.ticker.target}
            <br />
            Price : {user && user.ticker && user.ticker.price}
            <br />
            Volume : {user && user.ticker && user.ticker.volume}
            <br />
            Change : {user && user.ticker && user.ticker.change}
            <br />
          </Route>
          <Route path="/home">
            <h1>Home nih bos</h1>
            {user &&
              user.ticker &&
              user.ticker.markets &&
              user.ticker.markets.map((item) => {
                return <p> {item.price} </p>;
              })}
          </Route>
          <Route path="/about">
            <h1>About nih bos</h1>
            Change : {user && user.ticker && user.ticker.timestamp}
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
