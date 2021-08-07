import React from 'react';
import PageLayout from '../components/PageLayout';

const App = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <div>Hello from App112</div>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default App;
