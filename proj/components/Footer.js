import Link from 'next/link';

const Footer = () => (
	<footer>
  <div>
  	<p>Copyright © 2011-2019. All rights reserved.</p>
    <Link href="">
      <a>  	<img src={'https://i.ya-webdesign.com/images/facebook-black-png-1.png'} alt="" /></a>
    </Link>

    <Link href="">
      <a>  	<img src={'https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png'} alt="" /></a>
    </Link>


      <style jsx>{`
      	div {
      		background-color: white;
      		text-align: center;
      		padding-top: 20px;
      		padding-bottom: 20px;
      		background-color:white;
      		border-top: 1px solid black;
      	}
      	p {
  		    font-size: 12px;
    		font-weight: light;

      	}
        a {
        	margin-right: 25px;
        	text-decoration: none;

        }

        img {
        	height:50px;
        	width:50px;

        }

      `}</style>
  </div>

</footer>

);

export default Footer;