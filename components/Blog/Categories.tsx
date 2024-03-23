import React from 'react';
import Category from './Category';

function Categories({ categories }: any) {
  return (
    <div className="p-2 mt-4">
      {categories?.data?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
