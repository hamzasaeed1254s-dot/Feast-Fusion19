import { supabase } from '../../../lib/supabase';
import { trackEvent } from '../../../lib/analytics';
import { redirect } from 'next/navigation';

export default async function RedirectPage({ params }) {
  const { slug } = params;

  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!product) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  // Track analytics
  await trackEvent(product.id, 'view');
  await trackEvent(
    product.id,
    product.is_affiliate ? 'affiliate_click' : 'click'
  );

  // Redirect to external platform
  redirect(product.external_link);
}
