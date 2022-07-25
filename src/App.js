import Layout from "./Layout";
import { ctx, hrefctx } from "./context";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [readedFiles, setReadedFiles] = useState();
  const [href, setHref ] = useState();
  return (
    <ctx.Provider value={{ readedFiles, setReadedFiles }}>
      <hrefctx.Provider value={{ href, setHref }}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </hrefctx.Provider>
    </ctx.Provider>
  );
}

export default App;
