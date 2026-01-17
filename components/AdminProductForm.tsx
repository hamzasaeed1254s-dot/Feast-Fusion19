'use client';

import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

export default function AdminProductForm() {
  const [form, setForm] = useState({
    name: '',
    category_id: '',
    brand: '',
    external_link: '',
    external_type: 'daraz',
    is_affiliate: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = form.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    await supabase.from('products').insert({
      ...form,
      slug,
      status: 'draft',
    });

    alert('Product added (Draft)');
    setForm({
      name: '',
      category_id: '',
      brand: '',
      external_link: '',
      external_type: 'daraz',
      is_affiliate: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        type="text"
        placeholder="Product Name"
        className="border p-2 w-full"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Brand"
        className="border p-2 w-full"
        value={form.brand}
        onChange={(e) => setForm({ ...form, brand: e.target.value })}
      />

      <input
        type="url"
        placeholder="External Link"
        className="border p-2 w-full"
        value={form.external_link}
        onChange={(e) =>
          setForm({ ...form, external_link: e.target.value })
        }
        required
      />

      <select
        className="border p-2 w-full"
        value={form.external_type}
        onChange={(e) =>
          setForm({ ...form, external_type: e.target.value })
        }
      >
        <option value="daraz">Daraz</option>
        <option value="whatsapp">WhatsApp</option>
        <option value="etsy">Etsy</option>
        <option value="amazon">Amazon</option>
        <option value="shopify">Shopify</option>
        <option value="website">Website</option>
      </select>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={form.is_affiliate}
          onChange={(e) =>
            setForm({ ...form, is_affiliate: e.target.checked })
          }
        />
        <span>Affiliate Product</span>
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
    </form>
  );
}
