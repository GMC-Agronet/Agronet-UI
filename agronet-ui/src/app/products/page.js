import ProductCard from '@/app/components/ProductCard';
import productsData from '@/app/mock/products.json';

export default function Page() {
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
              onAddToCart={() => alert(`${item.title} added to cart!`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
