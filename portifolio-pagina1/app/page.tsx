"use client"; // 1. Sempre a primeira linha!

import { useEffect, useState } from "react"; // 2. Importar os hooks do React
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import { ShoppingCart } from "lucide-react";

interface Produto {
  id: number;
  nome: string;
  valor: number;
  src: string;
}

interface Categoria {
  id: number;
  nome: string;
  src: string;
}
export default function Home() {
  // 1. Tipagem correta nos estados
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
useEffect(() => {
    const carregarDados = async () => {
      try {
        const { data: prodData, error: prodErr } = await supabase.from('produtos').select('*');
        const { data: catData, error: catErr } = await supabase.from('categorias').select('*');

        if (prodErr) console.error("Erro nos produtos:", prodErr.message);
        if (catErr) console.error("Erro nas categorias:", catErr.message);

        if (prodData) setProdutos(prodData);
        if (catData) setCategorias(catData);
      } catch (e) {
        console.error("Falha na requisição:", e);
      }
    };

    carregarDados();
  }, []);

  return (
    <main>
      <Header />
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
        <h1 className="font-bold lg:text-4xl text-center pb-8 text-2xl">
          Categorias Populares
        </h1>
        <div className="mt-2 lg:mx-64 grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 lg:gap-24">
          {categorias.map((cat) => (
            <div
              key={cat.nome}
              className="rounded-xl  cursor-pointer shadow-2xl text-center"
            >
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
          {produtos.map((prod) => (
            <div
              key={prod.nome}
              className="rounded-xl cursor-pointer shadow-2xl text-start"
            >
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
                    <h1 className="lg:col-span-8  col-span-4">
                      Adicionar ao Carrinho
                    </h1>{" "}
                    <ShoppingCart className="size-3 lg:size-6"></ShoppingCart>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="font-light text-[10px] text-center p-12 mt-44   text-white/70 bg-[#202935]">
        <h6>Tailwnd Store</h6>
        <p>
          ©Todos os direitos reservados. Desenvolvedor:{" "}
          <a href="https://github.com/anderson-camilo-dev">Anderson dev</a>
        </p>
      </footer>
    </main>
  );
}
