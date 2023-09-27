import AuthProvider from '@/pages/context/AuthProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { DashboardLayout } from './dashboard/dashboard/Layout';

// export default function App({ Component, pageProps }: AppProps) {
//   return(
//     <AuthProvider>
//       <Component {...pageProps} />
//     </AuthProvider>
//   ) 
// }


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // Check if the route is under /dashboard and apply the DashboardLayout
  if (router.pathname.startsWith('/dashboard')) {
    return (
      <AuthProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </AuthProvider>
    );
  }

  // For other routes, use a default layout
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}