
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductForm } from '@/components/ProductForm';
import { ProductList } from '@/components/ProductList';
import { Product } from '@/types/product';

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to add a new product
  const addProduct = (product: Product) => {
    // Generate a unique ID for the product
    const newProduct = { ...product, id: Date.now().toString() };
    setProducts([...products, newProduct]);
  };

  // Function to filter products based on search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-ecommerce-text mb-6">Mini E-Commerce</h1>
        
        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="submit" className="text-lg">Submit Product</TabsTrigger>
            <TabsTrigger value="products" className="text-lg">My Products ({products.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="submit" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-ecommerce-text">Product Submission</h2>
              <ProductForm onSubmit={addProduct} />
            </div>
          </TabsContent>
          
          <TabsContent value="products" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-ecommerce-text">My Products</h2>
              <ProductList products={filteredProducts} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
