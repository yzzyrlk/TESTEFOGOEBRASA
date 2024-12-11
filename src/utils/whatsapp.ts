import { OrderItem } from '../types/menu';

const WHATSAPP_NUMBER = '5511999999999'; // Substitua pelo número real do restaurante

export function formatOrderMessage(
  items: OrderItem[],
  customerName: string,
  address: string
): string {
  const itemsList = items
    .map(item => `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}${item.observations ? `\n  Obs: ${item.observations}` : ''}`)
    .join('\n');

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const message = `*Novo Pedido - Fogo & Brasa*
Cliente: ${customerName}
Endereço: ${address}

*Itens do Pedido:*
${itemsList}

*Total: R$ ${total.toFixed(2)}*`;

  return encodeURIComponent(message);
}

export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}