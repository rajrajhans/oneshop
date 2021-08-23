import React from 'react';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import Router from 'next/router';
import PageLayout from '../components/PageLayout';
import { ApolloProvider } from '@apollo/client';
import withApolloClientConfig from '../utils/withApolloClientConfig';
import { LoadingProvider } from '../components/LoadingContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <LoadingProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </LoadingProvider>
    </ApolloProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
};

export default withApolloClientConfig(App);
