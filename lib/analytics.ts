import { supabase } from './supabase';

export async function trackEvent(
  productId: number,
  eventType: 'view' | 'click' | 'affiliate_click'
) {
  await supabase.from('analytics').insert({
    product_id: productId,
    event_type: eventType,
    user_agent:
      typeof window !== 'undefined' ? navigator.userAgent : 'server',
    ip_address: '0.0.0.0', // Placeholder (OK for now)
  });
}
