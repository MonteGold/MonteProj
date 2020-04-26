import Link from 'next/link';

const HomeWhat = () => (
  <div id="container">
    <h1>What is Montezuma Coin?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Faucibus nisl tincidunt eget nullam non. Pharetra convallis posuere morbi leo urna. Purus non enim praesent elementum facilisis leo. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Fermentum et sollicitudin ac orci phasellus egestas. Sed cras ornare arcu dui. Facilisis sed odio morbi quis commodo odio aenean.</p>
    


  

    <div>
        <video width="700" height="400" controls>
        <source src="../monty.mov" type="video/mp4"/ >
        Your browser does not support the video tag.
        </video>
    </div>

    <Link href="/about">
      <a><button>Learn More</button></a>
    </Link>  



    <style jsx>{`
      #container {
        margin-top: 100px;
        text-align: center;
        width: 100%;

      }
      h1 {
        font-size: 40px;
        font-weight: lighter;
      }
      p {
        padding: 25px 75px;
        text-align: justify;
        font-size: 16px;
        color: #777;
      }
      button {
        height: 50px;
        width: 150px;
        border-radius: 50px;
        font-size: 15px;
      }

      button:hover {
        cursor: pointer;
        background-color:black;
        color: white;
      }

      video {
        margin-bottom: 75px;
        margin-top: 20px;
      }


    `}</style>
  </div>

);

export default HomeWhat;