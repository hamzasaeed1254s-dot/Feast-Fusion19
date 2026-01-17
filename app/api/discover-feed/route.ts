import { supabase } from '../../../lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(50);

  const feed = products.map(p => ({
    title: p.name,
    description: `Discover ${p.name} from ${p.brand}. ${p.is_affiliate ? 'Affiliate link' : 'Direct link'}.`,
    link: `https://feastfusion.com/go/${p.slug}`,
    image: p.image_url,
  }));

  return NextResponse.json(feed);
}
