

const AboutContent1 = () => (
  <div id="container">
	<div id="row1">

	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Faucibus nisl tincidunt eget nullam non. Pharetra convallis posuere morbi leo urna. Purus non enim praesent elementum facilisis leo. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Fermentum et sollicitudin ac orci phasellus egestas. Sed cras ornare arcu dui. Facilisis sed odio morbi quis commodo odio aenean.</p>

	</div>

	<div id="row2">
	</div>


	<style jsx>{`
		#container {
			padding-bottom: 100px;
		    padding-top: 50px;
			text-align: center;

		}
		div {
			margin-top: 50px;
			margin-bottom: 50px;

		}
		#row1 {
		    height: 500px;
		    width: 45%;
		    margin-left: 25px;
		    margin-right: 25px;
		    background-color: white;
		    float: left;
		}
		#row2 {
		    height: 500px;
		    width: 45%;
		    margin-left: 25px;
		    margin-right: 25px;
		    background-color: white;
		    float: right;
			background: url('https://d2j8c2rj2f9b78.cloudfront.net/uploads/poster-images/ONLYINCLT_MINE.jpg') no-repeat center center; 
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;  
		}



		h3 {
			font-size: 25px;
			font-weight: 600;		}
		p {
			padding: 15px 40px;
			margin: 0;
			text-align: left;
			font-size: 18px;
			color: black;
			line-height: 30px;
		}
		img {
		    height: 50px;
		    width: 50px;
		    padding-top: 30px;
		}



	`}</style>
  </div>

);

export default AboutContent1;