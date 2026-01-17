import { supabase } from '../../../lib/supabase';
import AdminProductForm from '../../../components/AdminProductForm';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== 'Hamzasaeed1254s@gmail.com') {
    redirect('/admin/login');
  }

  const { data: products } = await supabase
    .from('products')
    .select('*');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <AdminProductForm />

      <div className="mt-8">
        <h2 className="text-2xl mb-4">Products</h2>

        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products?.map((p) => (
              <tr key={p.id}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.status}</td>
                <td className="border p-2">
                  <button className="text-blue-500">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
