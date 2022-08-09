import { useEffect } from "react";
import { useState } from "react";
import "./pokecard.scss";

const Pokecard = (props) => {
  const { pokedata, searchfield } = props;
  const [filteredpoke, setfilteredpoke] = useState([]);
  const PokeSetter = () => {
    const data = pokedata.filter((pokeinfo) => {
      return pokeinfo.name.toLocaleLowerCase().includes(searchfield);
    });

    const half = Math.ceil(data.length / 2);
    const left = data.slice(0, half);

    setfilteredpoke(left);
  };
  useEffect(() => {
    setfilteredpoke([]);
    // console.log(filteredpoke);

    PokeSetter();
  }, [searchfield]);
  return (
    <>
      <div className="pokecard-container">
        {filteredpoke.map((poke) => {
          // console.log(poke);
          return (
            <>
              <div className="pokecard">
                <h3>{poke.name.toLocaleUpperCase()}</h3>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                  alt=""
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Pokecard;
