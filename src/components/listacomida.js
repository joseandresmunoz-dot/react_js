export function ListaComida(props) {
  return (
    <div>
        <h2> Lista de comida </h2>
        <ul>
          
         {props.items.map(item => (
           <li key = {item.id}>
            Comida: {item.comida} - Precio: {item.precio}
           </li>
         ))}
        </ul>
      </div>
  );
}