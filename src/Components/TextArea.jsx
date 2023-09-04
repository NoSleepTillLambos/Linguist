import Translate from "./Translate";
import TranslatedText from "./TranslatedText";
import { useState } from "react";

const Textarea = () => {
  // 1 fetching the data and language pairs from the API
  const getText = () => {
    const text = document.querySelector("textarea").value;
    const translated = document.querySelector(".translated");
    // storing the text in the api call to make the request from english to french
    let urlApi = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${
      langCode === "en" ? "en" : "fr"
    }|${langCode === "en" ? "fr" : "en"}`;
    fetch(urlApi)
      // storing the api in a res.json format
      .then((res) => res.json())
      .then((data) => {
        const resultText = data.responseData.translatedText;
        translated.value = resultText;
      });
  };

  const [lang, setLang] = useState("English");
  const [langCode, setLangCode] = useState("en");

  return (
    <>
      <div className="">
        <Translate lang={lang} setLang={setLang} setLangCode={setLangCode} />
        <TranslatedText lang={lang} setLang={setLang} />
      </div>
      <div className="button">
        <button className="transBtn" onClick={getText} langCode={langCode}>
          Translate
        </button>
      </div>
    </>
  );
};

export default Textarea;
