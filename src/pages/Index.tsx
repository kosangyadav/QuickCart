
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductForm } from '@/components/ProductForm';
import { ProductList } from '@/components/ProductList';
import { Product } from '@/types/product';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products from Supabase
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to add a new product
  const addProduct = async (product: Product) => {
    try {
      // Insert product into Supabase
      const { data, error } = await supabase
        .from('products')
        .insert([{
          name: product.name,
          price: product.price,
          description: product.description,
          image_url: product.imageUrl
        }])
        .select();
      
      if (error) {
        throw error;
      }
      
      if (data && data.length > 0) {
        // Add the new product to the state
        setProducts([data[0], ...products]);
        toast.success("Product submitted successfully!");
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product');
    }
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
              <ProductList 
                products={filteredProducts} 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                isLoading={isLoading} 
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
