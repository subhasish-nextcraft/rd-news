import React from 'react';
import Category from './Category';

function Categories({ categories }: any) {
  return (
    <div className="flex flex-col gap-3 mt-1">
      {categories?.data?.map((category: any) => (
        <Category cat={category} />
      ))}
    </div>
  );
}

export default Categories;
