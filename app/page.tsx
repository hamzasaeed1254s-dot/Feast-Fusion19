import { supabase } from '../../../lib/supabase';
import ProductGrid from '../../../components/ProductGrid';
import Link from 'next/link';

export default async function Home() {
  const { data: featuredProducts } = await supabase
    .from('products')
    .select('*')
    .eq('status', 'published')
    .eq('is_featured', true)
    .limit(12);

  const { data: categories } = await supabase
    .from('categories')
    .select('*');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to Feast Fusion
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {categories?.map(cat => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="card text-center"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <ProductGrid products={featuredProducts} />
    </div>
  );
}
