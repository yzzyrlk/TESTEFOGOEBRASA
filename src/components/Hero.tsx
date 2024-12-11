import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
            NOVO! Monster Cheese
          </span>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Hambúrgueres Artesanais Irresistíveis
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Blend premium, ingredientes frescos e muito queijo derretido. 
            Prepare-se para a melhor experiência em smash burgers da cidade.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#menu"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg 
                font-bold flex items-center transform hover:scale-105 transition-all"
            >
              Peça Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#menu"
              className="border-2 border-white hover:bg-white hover:text-black 
                px-8 py-3 rounded-lg font-bold transition-all"
            >
              Ver Menu Completo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}