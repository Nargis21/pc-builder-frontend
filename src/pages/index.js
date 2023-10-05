import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default HomePage;

// using layout
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};