import '../styles/globals.css';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

//router
import { useRouter } from 'next/router';
import { useEffect } from 'react';

//framer motion
import { AnimatePresence, motion } from 'framer-motion';
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    console.log(router.route);
  }, [router]);


  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className={` h-full`}>
          <Transition />
          <Component {...pageProps} />
        </motion.div>

      </AnimatePresence>

    </Layout>
  );
}

export default MyApp;
