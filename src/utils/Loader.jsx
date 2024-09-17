import React from 'react';

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
    <div className="text-center">
      <div className="w-20 h-20 border-8 border-t-8 border-white border-opacity-10 rounded-full animate-spin border-t-gray-300 mx-auto mb-4"></div>
      <h1 className="text-2xl text-gray-200 font-serif mt-4">
        Espere un momento, aventurero...
      </h1>
    </div>
  </div>
);

export default Loading;
