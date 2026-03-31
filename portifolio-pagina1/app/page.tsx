import Image from "next/image";
import { Key, Menu, ShoppingCart } from "lucide-react";

const CATEGORIAS = [
  { nome: "Tenis", src: "/tenis.png" },
  { nome: "Relogio", src: "/relogio.png" },
  { nome: "Mochilas", src: "/mochila.png" },
  { nome: "Eletronicos", src: "/eletronicos.png" },
];

const PRODUTOS = [
  { nome: "Tenis Casual", valor: 250.0, src: "/tenisCasual.png" },
  { nome: "luminaria", valor: 250.0, src: "/luminaria.png" },
  { nome: "Mochila de Camp", valor: 250.0, src: "/mochilaCamp.png" },
  { nome: "Camisa", valor: 250.0, src: "/camisa.png" },
];

export default function Home() {
  return (
    <main>
      <header className="m-3 grid grid-cols-5 font-bold lg:text-4xl text-xl">
        <div className="col-span-4  grid grid-cols-10">
          <img className="w-6 lg:w-12 lg:mx-22 m-auto  pt-1" src="/folha.png" alt="" />
          <h1  className="col-span-9 my-auto"><a href="">TAILWIND STORE</a></h1>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Menu className="lg:size-8 cursor-pointer m-auto"></Menu>
          <ShoppingCart className="lg:size-8 cursor-pointer m-auto"></ShoppingCart>
        </div>
      </header>

      <div className="mb-2 lg:mb-14 bg-[url('/moda.jpg')] bg-cover bg-center w-full h-54 lg:h-120 z-0 ">
        <div className="bg-black/40 lg:h-120  flex justify-center items-center text-white font-bold gap-1 lg:gap-4 flex-col z-1 h-54">
          <h1 className=" text-2xl lg:text-6xl"> Shop As Últimas Tendências</h1>
          <p className="text-[14px] lg:text-3xl font-extralight">
            Encontre itens de qualidade e coleções exclusivas
          </p>
          <button className="bg-[#3d85eb] hover:bg-[#29599e]  font-extralight cursor-pointer rounded-md py-1.5 px-4 lg:px-4 lg:py-2 text-[12px] lg:text-3xl  ">
            Explore agora
          </button>
        </div>
      </div>

      <div className="m-4 mt-18 mb-18">
        <h1 className="font-bold lg:text-4xl text-center pb-8 text-2xl">Categorias Populares</h1>
        <div className="mt-2 lg:mx-64 grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 lg:gap-24">
          {CATEGORIAS.map((cat) => (
            <div key={cat.nome} className="rounded-xl  cursor-pointer shadow-2xl text-center">
              <img
                className="rounded-t-xl w-full h-34  xl:h-34 "
                src={cat.src}
                alt=""
              />
              <div>
                <h1 className="p-0.5 text-black/80 font-bold">{cat.nome}</h1>
              </div>
            </div>
          ))}

         
        </div>
      </div>

      <div className="m-4 text-black/80 font-bold ">
        <h1 className="font-bold lg:text-4xl text-black lg:pt-24 text-xl">
          Produtos em Destaque
        </h1>
        <div className="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-16">
          

        {PRODUTOS.map((prod) => (
          <div key={prod.nome} className="rounded-xl cursor-pointer shadow-2xl text-start">
            <img
              className="rounded-t-xl  xl:h-64 w-full h-26"
              src={prod.src}
              alt=""
            />
            <div>
              <h1 className="p-0.5 lg:p-2 lg:text-3xl">{prod.nome}</h1>
            </div>
            <div className="lg:px-6 lg:py-4 p-2">
            
            <div className="grid grid-cols-6 lg:p-1">
              <h1 className="text-[12px] col-span-2 text-blue-500 lg:text-2xl">
                R$ {prod.valor}
              </h1>
              <button className="bg-[#3d85eb] cursor-pointer col-span-4  grid grid-cols-5 lg:grid-cols-10 text-white font-bold rounded-md p-1 text-[8px] lg:text-[16px] ">
                <h1 className="lg:col-span-8  col-span-4">Adicionar ao Carrinho</h1> <ShoppingCart className="size-3 lg:size-6"></ShoppingCart>
              </button>
            </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      <footer className="font-light text-[10px] text-center p-12 mt-44   text-white/70 bg-[#202935]">
        <h6>Tailwnd Store</h6>
        <p>©Todos os direitos reservados</p>
      </footer>
    </main>
  );
}
