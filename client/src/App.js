

import GlobalStyle from "./styles/css/global"


import Navbar from "./components/navbar"
import P from "./components/p"
import A from "./components/a";

function App() 
{
  return (
    <>
      <Navbar />

      <h1>The Ecommerce</h1>
      <P text={"Lorem ipsum dolor sit amet. Qui impedit perspiciatis et repellendus consequatur 33 magnam eius vel sunt eveniet a quia veritatis. In corporis dolorem nam sunt sint aut laboriosam accusantium! Et dolores reiciendis vel dolore quod vel quod totam."}/>
      <A href="github.com/gsfranca" text="Meu Git"/>
      <GlobalStyle />
    </>
    
  );
}

export default App;
