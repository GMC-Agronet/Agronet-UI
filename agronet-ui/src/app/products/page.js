'use client';

import ProductCard from '@/app/components/ProductCard';
import productsData from '@/app/mock/products.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/slices/cartSlice';

export default function Page() {
  const dispatch = useDispatch();
  return (
    <div>
      {/* List all products as a grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {productsData.map((item) => (
          <div key={item.id} style={{ flex: '0 1 300px' }}>
            <ProductCard
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              unit={item.unit}
              discount={item.discount}
              onAddToCart={() => dispatch(addToCart(item))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
