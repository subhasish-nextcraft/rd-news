import React from 'react';
import Category from './Category';

function Categories({ categories }: any) {
  return (
    <div className="flex gap-6 mt-4">
      {categories?.data?.map((category: any) => (
        <div key={category.id} className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">Categories</h4>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
