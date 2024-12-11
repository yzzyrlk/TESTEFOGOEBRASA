import React, { useState } from 'react';
import { Utensils, ShoppingBag } from 'lucide-react';
import { MenuItem as MenuItemType, OrderItem } from '../types/menu';
import MenuItem from './MenuItem';
import OrderModal from './OrderModal';
import { menuItems } from '../data/menuItems';

export default function Menu() {
  const [category, setCategory] = useState('all');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleAddToOrder = (item: MenuItemType, quantity: number, observations?: string) => {
    const orderItem: OrderItem = {
      ...item,
      quantity,
      observations
    };
    setOrderItems([...orderItems, orderItem]);
  };

  const totalItems = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Utensils className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-4xl font-bold mb-4">Nosso Menu</h2>
          <p className="text-gray-600">Escolha seu hambúrguer favorito</p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {['all', 'burgers', 'sides', 'drinks'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap ${
                  category === cat 
                    ? 'bg-yellow-500 text-black font-bold' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {cat === 'all' ? 'Todos' : 
                 cat === 'burgers' ? 'Hambúrgueres' :
                 cat === 'sides' ? 'Acompanhamentos' : 'Bebidas'}
              </button>
            ))}
          </div>

          {orderItems.length > 0 && (
            <button
              onClick={() => setShowOrderModal(true)}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 
                rounded-lg hover:bg-green-700 font-bold transform hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Finalizar Pedido ({totalItems})</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems
            .filter((item) => category === 'all' || item.category === category)
            .map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onAddToOrder={handleAddToOrder}
              />
            ))}
        </div>

        {showOrderModal && (
          <OrderModal
            items={orderItems}
            onClose={() => {
              setShowOrderModal(false);
              setOrderItems([]);
            }}
          />
        )}
      </div>
    </section>
  );
}