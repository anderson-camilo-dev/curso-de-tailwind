import { Key, Menu, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className=" p-3   border-b-3 border-[#f2f2f3] bg-white m-0 grid grid-cols-5 font-bold lg:text-4xl text-xl">
      <div className="col-span-4  grid grid-cols-10">
        <img
          className="w-6 lg:w-12 lg:mx-22 m-auto  pt-1"
          src="/folha.png"
          alt=""
        />
        <h1 className="col-span-9  my-auto">
          TAILWIND STORE
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Menu className="lg:size-8 cursor-pointer m-auto"></Menu>
        <a className="m-auto" href="/carrinho">
          <ShoppingCart className="lg:size-8 cursor-pointer "></ShoppingCart>
        </a>
      </div>
    </header>
  );
}
