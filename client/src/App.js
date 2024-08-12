
// Imports
  import GlobalStyle, { COLORS } from "./styles/css/global"

// Imports Components

  // Basics
    import Navbar from "./components/navbar"
    import Footer from "./components/footer";
    
  // Titles
    import H1 from "./components/h1";
    import H2 from "./components/h2";
    import H3 from "./components/h3";
    import H4 from "./components/h4";
    import H5 from "./components/h5";
    import H6 from "./components/h6";

  // Texts  
    import P from "./components/p"
    import A from "./components/a";

import Button from "./components/button";


function App() 
{
  return (
    <>
      <Navbar />
        <H1 text="Title 1" color={COLORS.WHITE}/>
        <H2 text="Title 2" />
        <H3 text="Title 3" />
        <H4 text="Title 4" />
        <H5 text="Title 5" />
        <H6 text="Title 6" />
        <P text={"Lorem ipsum dolor sit amet. Qui impedit perspiciatis et repellendus consequatur 33 magnam eius vel sunt eveniet a quia veritatis. In corporis dolorem nam sunt sint aut laboriosam accusantium! Et dolores reiciendis vel dolore quod vel quod totam."}/>
        <A href="github.com/gsfranca" text="github.com/gsfranca"/>
        <Button text="Button" buttonName="btn-green"/>
      <Footer date={"August 11, 2024"} />
      <GlobalStyle />
    </>
    
  );
}

export default App;
