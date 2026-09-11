import tituloPrincipal, { TituloPrincipal } from "../components/tituloPrincipal";
import { ListaComida } from "@/components/listacomida"; 

const titulo2 = "Hola Andres, como andas?";

const listacomida = [
  {id:1, comida: "Pizza de Jamon y queso", precio: 1000},
  {id:2, comida: "Asado", precio: 1500},
  {id:3, comida: "Milanesas", precio: 1200}
]

export default function Home() {
  return (
    <main>
      <div>
        <TituloPrincipal></TituloPrincipal>
        <TituloPrincipal titulo={titulo2}></TituloPrincipal>
      </div>
      <hr />
      <ListaComida items={listacomida}>
      </ListaComida>
    </main>
    
  );
}