import React from 'react';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import Router from 'next/router';
import PageLayout from '../components/PageLayout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <div>Hello from App112</div>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default App;
