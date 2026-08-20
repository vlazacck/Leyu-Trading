import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../lib/hooks";

export default function Products() {
  const { data: products, isLoading } = useProducts();

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionTitle
        eyebrow="Export Catalog"
        title="Teff Flour & Grain, Ready for Export"
        description="Full specifications, packaging options, and export documentation available for every product below."
      />
      {isLoading ? (
        <div className="py-24 text-center text-ink/50">Loading products…</div>
      ) : (
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((p, i) => (
            <ProductCard key={p._id} product={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
