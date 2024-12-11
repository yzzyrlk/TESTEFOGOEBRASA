import React, { useState } from 'react';
import { X } from 'lucide-react';
import { OrderItem } from '../types/menu';
import { formatOrderMessage, generateWhatsAppLink } from '../utils/whatsapp';

interface OrderModalProps {
  items: OrderItem[];
  onClose: () => void;
}

export default function OrderModal({ items, onClose }: OrderModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = formatOrderMessage(items, customerName, address);
    const whatsappLink = generateWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Finalizar Pedido</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Endereço Completo
            </label>
            <textarea
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Resumo do Pedido:</h4>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.quantity}x {item.name}</span>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2 font-bold">
              Total: R$ {items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Enviar Pedido pelo WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}