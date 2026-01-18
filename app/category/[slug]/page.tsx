import { supabase } from '@/lib/supabase';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilters from '@/components/CategoryFilters';

interface Props {
  params: { slug: string };
  searchParams: {
    brand?: string;
    affiliate_only?: string;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = params;
  const { brand, affiliate_only } = searchParams;

  let query = supabase
    .from('products')
    .select('*, categories!inner(name, slug)')
    .eq('categories.slug', slug)
    .eq('status', 'published');

  if (affiliate_only === 'true') {
    query = query.eq('is_affiliate', true);
  }

  if (brand) {
    query = query.ilike('brand', `%${brand}%`);
  }

  const { data: products } = await query;

  const { data: category } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {category?.name}
      </h1>

      <CategoryFilters />

      <ProductGrid products={products} />
    </div>
  );
}
