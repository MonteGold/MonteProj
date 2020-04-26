

const HomeSections = () => (
  <div id="container">
	<div id="row">
		<img src={'https://png.pngtree.com/svg/20160310/88897cb29d.svg'} alt="" />
		<h3>Lorem ipsum dolor</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Faucibus nisl tincidunt eget nullam non. Pharetra convallis posuere morbi leo urna.</p>

	</div>

	<div id="row">
		<img src={'https://www.freeiconspng.com/uploads/06-wallet-icon--swanky-outlines-iconset--pixelkit-14.png'} alt="" />
		<h3>Lorem ipsum dolor</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Faucibus nisl tincidunt eget nullam non. Pharetra convallis posuere morbi leo urna.</p>

	</div>

	<div id="row">
		<img src={'https://images.vexels.com/media/users/3/157259/isolated/preview/7e7385df5b67d35bad5671b7fa0a9134-black-and-white-smartphone-icon-by-vexels.png'} alt="" />
		<h3>Lorem ipsum dolor</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Faucibus nisl tincidunt eget nullam non. Pharetra convallis posuere morbi leo urna.</p>

	</div>


	<style jsx>{`
		#container {
			margin-top: 100px;
			padding-bottom: 100px;
		    padding-top: 100px;
			text-align: center;
      		background-image: url("https://cdn.wallpapersafari.com/34/60/bATz10.png");


		}

		#row {
		    height: 500px;
		    width: 350px;
		    margin-left: 25px;
		    margin-right: 25px;
		    display: inline-block;
		    border: 1px solid black;
		    background-color: white;
		}



		h3 {
			font-size: 25px;
			font-weight: 600;		}
		p {
			padding: 25px 35px;
			text-align: center;
			font-size: 16px;
			color: #777;
		}
		img {
		    height: 50px;
		    width: 50px;
		    padding-top: 30px;
		}



	`}</style>
  </div>

);

export default HomeSections;