'use client';

import { Toaster } from 'react-hot-toast';

function ToasterContext() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default ToasterContext;
