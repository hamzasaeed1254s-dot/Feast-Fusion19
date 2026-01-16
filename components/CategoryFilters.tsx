'use client';

export default function CategoryFilters() {
  return (
    <div className="mb-6 flex gap-4 flex-wrap">
      <input
        type="text"
        placeholder="Search brand..."
        className="border p-2 rounded"
      />
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        Affiliate only
      </label>
    </div>
  );
}
