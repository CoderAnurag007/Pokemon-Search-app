import "./main.scss";
import Navbar from "./navbar/Nav";
import Pokecard from "./pokecard/Pokecard";
import Search from "./pokesearch/Search";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
const Main = () => {
  const [pokedata, setpokedata] = useState([]);

  const urlvalue = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  const url = urlvalue;
  const gettercall = useCallback(() => {
    const Pokegetter = async () => {
      const res = await axios.get(url);
      // setpokedata(res.data.results);
      getpokemon(res.data.results);

      console.log(res.data);
    };
    Pokegetter();
  }, [url]);

  const getpokemon = (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);

      setpokedata((state) => {
        state = [...state, result.data];

        return state;
      });
    });
  };

  const [searchfield, setsearchfield] = useState("");
  const changehandler = (event) => {
    const searchvalue = event.target.value.toLocaleLowerCase();
    console.log(searchvalue);
    setsearchfield(searchvalue);
  };

  useEffect(() => {
    gettercall();
  }, [gettercall]);
  return (
    <>
      <Navbar />
      <Search handlechange={changehandler} />
      <Pokecard pokedata={pokedata} searchfield={searchfield} />
    </>
  );
};

export default Main;
