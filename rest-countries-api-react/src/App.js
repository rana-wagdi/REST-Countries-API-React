import React from 'react';
import Header from './component/Header';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Countries from './component/Countries';


const GlobalStyle = createGlobalStyle`
body, img{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(207, 26%, 17%)" : " hsl(0, 0%, 98%)"};
  color: ${(props) =>
    props.theme.mode === "dark" ? " hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)"};
}
.header, #search, .select, .article-element{ 
background-color: ${(props) =>
  props.theme.mode === "dark" ? "hsl(209, 23%, 22%)" : " hsl(0, 0%, 100%)"};
 
}
body, #search, input::placeholder, .select, .article-element{
  color: ${(props) =>
    props.theme.mode === "dark" ? " hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
}
.header{
  border-bottom-color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(209, 23%, 22%)" : "#ded9ca"};
}
#search, .select, #search:focus, .select:focus, img{
  border-color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(209, 23%, 22%)" : "#dee3e0"};
}
.article-element{
   border-color: ${(props) =>
     props.theme.mode === "dark" ? "hsl(209, 23%, 22%)" : "#dee3e0"};
}
`;

function App() {
  
  
    return (
      <ThemeProvider theme={{ mode: "light" }}>
        <div>
          <GlobalStyle />
            <Header />

            <Countries />
         
        </div>
      </ThemeProvider>
    );

}

export default App;
