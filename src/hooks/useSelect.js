import React, {useState} from "react";

const useSelect = (stateInicial, opciones) => {

  // state del custom hook
  const [state, actualizarState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      name=""
      id=""
      className="browser-default"
      value={state}
      onChange={(event) => actualizarState(event.target.value)}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
