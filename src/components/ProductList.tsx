
import React from 'react';
import { Input } from "@/components/ui/input";
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';
import { Search } from 'lucide-react';

type ProductListProps = {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  searchQuery, 
  setSearchQuery 
}) => {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {products.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium text-gray-500">No products found</h3>
          <p className="text-gray-400 mt-2">
            {searchQuery 
              ? "Try a different search term or clear the search"
              : "Add your first product in the 'Submit Product' tab"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
