'use client';

import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OrderCard from './OrderCard';
import productsData from '@/app/mock/products.json';
import { useLanguage } from '../hooks/useLanguage.js';

// Generate demo orders from products


const orders = productsData.slice(0, 6).map((product, idx) => ({
  id: idx + 1,
  status: idx % 3 === 0 ? 'Order Received' : idx % 3 === 1 ? 'Order Cancelled' : 'Order Delivered',
  statusColor: idx % 3 === 0 ? '#2196f3' : idx % 3 === 1 ? '#f48fb1' : '#4caf50',
  statusIcon: '',
  date: idx % 3 === 0 ? '21st March 2022' : idx % 3 === 1 ? '5th Feb 2022' : '8th Jan 2022',
  product: {
    id: product.id,
    image: product.image,
    title: product.title,
    size: product.unit || 'N/A',
    color: product.category || 'N/A',
    price: product.price,
  },
  actions: idx % 3 === 0 ? ['Cancel', 'Track'] : [],
}));

export default function OrderList() {
  const [filter, setFilter] = useState('all');
  const router = useRouter();
  const filteredOrders = filter === 'all' ? orders : orders.filter(o => o.status === filter);

  const { strings } = useLanguage();
  const statusOptions = [
    { label: strings.ordersOrderListAll || 'All', value: 'all' },
    { label: strings.ordersOrderListReceived || 'Order Received', value: 'Order Received' },
    { label: strings.ordersOrderListCancelled || 'Order Cancelled', value: 'Order Cancelled' },
    { label: strings.ordersOrderListDelivered || 'Order Delivered', value: 'Order Delivered' },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        {statusOptions.map(opt => (
          <Button
            key={opt.value}
            variant={filter === opt.value ? 'contained' : 'outlined'}
            size="small"
            sx={{ borderRadius: 2, fontWeight: 600, textTransform: 'none', minWidth: 0, px: 2 }}
            onClick={() => setFilter(opt.value)}
          >
            {opt.label}
          </Button>
        ))}
      </Box>
      {filteredOrders.length === 0 ? (
        <div>{strings.ordersOrderListEmpty || 'No orders found.'}</div>
      ) : (
        filteredOrders.map((order) => (
          <div key={order.id} onClick={() => router.push(`/products/${order.product.id}`)} style={{ cursor: 'pointer' }}>
            <OrderCard order={order} />
          </div>
        ))
      )}
    </Box>
  );
}
