import '../styles/globals.scss';
import { Layout } from '../components';
import { AppProvider } from '../context';
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
