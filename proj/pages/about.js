import Layout from '../components/MyLayout';
import AboutHead from '../components/AboutHead';
import AboutContent1 from '../components/AboutContent1'
import AboutContent2 from '../components/AboutContent2'


export default function About() {
  return (
    <Layout>
    	<div>
      		<AboutHead />
      		<AboutContent1 />
      		<AboutContent2 />

      <style jsx>{`
      	div {
      		text-align: center;
      		height: 1900px;
      	}



      `}</style>
    	</div>
    </Layout>
  );
}