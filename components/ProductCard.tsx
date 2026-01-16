import Image from 'next/image';
import Link from 'next/link';

const ctaTexts = {
  daraz: 'View on Daraz',
  whatsapp: 'Order via WhatsApp',
  etsy: 'View on Etsy',
  amazon: 'View on Amazon',
  shopify: 'Visit Store',
  website: 'Visit Website',
};

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg">
      <Image
        src={product.image_url || '/images/placeholder.jpg'}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="font-semibold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

      {product.is_affiliate && (
        <span className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
          Affiliate
        </span>
      )}

      <Link
        href={`/go/${product.slug}`}
        className="block mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
      >
        {ctaTexts[product.external_type]}
      </Link>
    </div>
  );
}
