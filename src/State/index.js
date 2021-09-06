import React, { createContext } from "react/";
// import React, { createContext } from "react";

const StateContex = createContext();

// creamos el estado de nuestra aplicacion
function StateProvider(props) {
  // estado de Search
  const [search, setSearch] = React.useState({
    value: "",
    cargando: false,
    error: "",
  });

  const CambiarValorSearch = (value) => {
    setSearch({
      value: value,
      cargando: false,
      error: "",
    });

  };

  return (
    <StateContex.Provider value={{ search, CambiarValorSearch }}>
      {props.children}
    </StateContex.Provider>
  );
}

export { StateContex, StateProvider };
