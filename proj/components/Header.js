import Link from 'next/link';

const Header = () => (
  <div>
    <nav>
      <Link href="/">
        <a id="logo">  	<img src={'http://pngimg.com/uploads/bitcoin/bitcoin_PNG17.png'} alt="Logo" /></a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/paper">
        <a>White Paper</a>
      </Link>

      <Link href="/about">
        <a>Contact Us</a>
      </Link>

      <button>Languages</button>

    </nav>
      <style jsx>{`
      	div {
      		height: 50px;
      		background-color: white;
      		text-align: center;
      		padding-top: 30px;
      	}

        a {
        	margin-right: 35px;
        	color: black;
        	text-decoration: none;
        	font-size: 15px;
          word-spacing: -2px;

        }

        a:hover {
          color: #777;
        }
        #logo {

        }

        #logo img {
          width: 15%;
          position: absolute;
          left: 5px;
          top: 10px;
          height: 50px;
        }

        button {
          position: absolute;
          right: 50px;
          top: 20px;
          height: 35px;
          width: 125px;
          font-size: 14px;;
        }
        button:hover {
          cursor: pointer;
        }

      `}</style>
  </div>



);

export default Header;