import Header from "@/components/Header";
import Contador from "@/components/contador";

const PRODUTOS = [
  { id: 1, nome: "Tenis Casual", valor: 250.99, src: "/tenisCasual.png" },
  { id: 2, nome: "luminaria", valor: 250.12, src: "/luminaria.png" },
  { id: 3, nome: "Mochila de Camp", valor: 250.21, src: "/mochilaCamp.png" },
  { id: 4, nome: "Camisa", valor: 250.11, src: "/camisa.png" },
];


export default function Carrinho() {
  return (
    <main className="h-screen bg-[#f8f8f9] ">
      <Header />
      <a className="font-bold lg:mx-20 p-6 mx-4 " href="./">
        {" "}
        Voltar
      </a>
      <h1 className="font-bold pt-6 lg:mx-80 pb-6 lg:pb-12 text-2xl lg:text-4xl">
        Seu Carrinho
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 space-y-4 h-150 overflow-y-auto pr-4 custom-scroll">
          {PRODUTOS.map((prod) => (
            <div
              key={prod.nome}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-4 items-center"
            >
              {/* IMAGEM */}
              <img
                src={prod.src}
                className="w-24 h-24 rounded-lg object-cover bg-gray-50"
              />

              {/* INFO */}
              <div className="flex-1 flex flex-col justify-between h-24">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-800">
                    {prod.nome}
                  </h3>
                  <button className="text-red-400 hover:text-red-600 text-sm transition-colors">
                    Remover
                  </button>
                </div>

                <div className="flex justify-between items-end">
                  <span className="font-bold text-xl text-blue-600">
                    R$ {prod.valor}
                  </span>
                  <Contador />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-4">
          <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal</span>
            <span>R$ 124.99</span>
          </div>
          <div className="flex justify-between mb-6 text-xl font-bold border-t pt-4">
            <span>Total</span>
            <span>R$ 124.99</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all">
            Finalizar Compra
          </button>
        </div>
      </div>
    </main>
  );
}
