import type { AppType } from "next/app";

import '~/styles/globals.css';

import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { api } from '~/utils/api';

import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Bark</title>
        <meta name="description" content="Bark" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪵</text></svg>"
        />
      </Head>
      <Toaster position="bottom-center" />
      <Analytics />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
