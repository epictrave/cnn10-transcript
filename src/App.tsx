import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import queryString from "query-string";
import "./App.css";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  const query = queryString.parse(location.search);
  const url: string = query.url as string;
  const translate: string = query.translate as string;
  const title: string = query.title as string;
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.text = `function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }`;
    setTimeout(() => {
      const googleTranslateElement = document
        .getElementsByClassName("skiptranslate goog-te-gadget")
        .item(0);
      if (googleTranslateElement) {
        (googleTranslateElement.childNodes[1]
          .childNodes[0] as Element).removeAttribute("href");
      }
    }, 1000);

    if (translate === "true" || Number(translate) > 0) {
      document.body.appendChild(script);
      document.body.appendChild(script2);
    }
    return () => {
      if (translate === "true" || Number(translate) > 0) {
        document.body.removeChild(script);
        document.body.removeChild(script2);
      }
    };
  }, [translate]);

  return (
    <div className="App">
      {translate ? <div id="google_translate_element"></div> : ""}
      <Transcript url={url} title={title} />
    </div>
  );
};
type ContentProps = {
  url: string;
  title: string;
};

const Transcript: React.FC<ContentProps> = ({ url, title }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="content"></div>
    </div>
  );
};
export default App;
