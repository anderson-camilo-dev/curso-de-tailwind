"use client"; // Obrigatório no Next.js para usar o useState
import { useState } from "react";

export default function Contador() {
  // 1. Criamos um "estado" para o número. Ele começa em 1.
  const [valor, setValor] = useState(1);

  // Funções para aumentar e diminuir
  const aumentar = () => setValor(valor + 1);
  const diminuir = () => {
    if (valor > 1) setValor(valor - 1); // Não deixa ser menor que 1
  };

  return (
    <div className="flex items-center w-fit border border-gray-300 rounded-sm overflow-hidden bg-gray-50">
      
      {/* Botão de Menos */}
      <button 
        onClick={diminuir}
        className="px-1 py-0.5 text-[12px] hover:bg-gray-200 text-gray-600 font-bold transition-colors"
      >
        −
      </button>

      {/* O Input de verdade (escondemos as setas nativas no CSS) */}
      <input
        type="number"
        value={valor}
        readOnly // Evita que o usuário digite letras, apenas pelos botões
        className="w-6 text-[10px] text-center bg-white border-x border-gray-300 py-1 font-semibold text-gray-800 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />

      {/* Botão de Mais */}
      <button 
        onClick={aumentar}
        className="px-1 text-[12px] py-0.5 hover:bg-gray-200 text-gray-600 font-bold transition-colors"
      >
        +
      </button>
    </div>
  );
}