import Layout from '../components/MyLayout';


export default function Paper() {
  return (
    <Layout>
    	<div>

    	<iframe src="../whitePaper.pdfpage=2" width="100%" height="100%">
			This browser does not support PDFs. Please download the PDF to view it: Download PDF
		</iframe>


      <style jsx>{`
      	div {
      		text-align: center;
      	}



      `}</style>
    	</div>
    </Layout>
  );
}