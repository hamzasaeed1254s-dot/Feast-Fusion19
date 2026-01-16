import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data: products } = await supabase
    .from('products')
    .select('slug')
    .eq('status', 'published');

  const { data: categories } = await supabase
    .from('categories')
    .select('slug');

  const urls = [
    'https://feastfusion.com',
    ...categories.map(
      (c) => `https://feastfusion.com/category/${c.slug}`
    ),
    ...products.map(
      (p) => `https://feastfusion.com/go/${p.slug}`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `<url><loc>${url}</loc></url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
