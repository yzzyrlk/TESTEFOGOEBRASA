import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types/menu';

interface MenuItemProps {
  item: MenuItemType;
  onAddToOrder: (item: MenuItemType, quantity: number, observations?: string) => void;
}

export default function MenuItem({ item, onAddToOrder }: MenuItemProps) {
  const [quantity, setQuantity] = useState(1);
  const [observations, setObservations] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleAdd = () => {
    onAddToOrder(item, quantity, observations);
    setQuantity(1);
    setObservations('');
    setShowOptions(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-56 object-cover"
        />
        {item.category === 'burgers' && (
          <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 
            rounded-full text-sm font-bold">
            Artesanal
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4 min-h-[48px]">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-yellow-500">
            R$ {item.price.toFixed(2)}
          </span>
          <button 
            onClick={() => setShowOptions(!showOptions)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 
              font-bold transform hover:scale-105 transition-all"
          >
            Pedir
          </button>
        </div>

        {showOptions && (
          <div className="mt-6 space-y-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Quantidade:</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Observações
              </label>
              <textarea
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={2}
                placeholder="Ex: Sem cebola, bacon extra crocante..."
              />
            </div>

            <button
              onClick={handleAdd}
              className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 
                font-bold transform hover:scale-105 transition-all"
            >
              Adicionar ao Pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
}