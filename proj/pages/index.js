import Layout from '../components/MyLayout';
import HomeHead from '../components/HomeHead';
import HomeWhat from '../components/HomeWhat';
 import HomeSections from '../components/HomeSections';

export default function Index() {
  return (
    <Layout>


      <HomeHead />
      <HomeWhat />
      <HomeSections />

      <style jsx>{`

      `}</style>



      
    </Layout>
  );
}