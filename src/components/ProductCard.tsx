
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from '@/types/product';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, description, imageUrl } = product;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  // Default image if no image URL is provided
  const defaultImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=220&q=80";
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl || defaultImage}
          alt={name}
          className="h-full w-full object-cover transition-all hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = defaultImage;
          }}
        />
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="truncate">{name}</span>
          <span className="font-bold text-ecommerce-primary">
            {formatPrice(price)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};
