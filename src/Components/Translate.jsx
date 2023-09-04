import change from "../assets/change.png";
import("../App.css");

const Translate = ({ lang, setLang, setLangCode }) => {
  // change handler -> from english to french and vice versa
  const changeHandler = () => {
    // fetching translated text
    const toText = document.querySelector(".translated");
    const fromText = document.querySelector(".fromText");
    let tempText = fromText.value;
    fromText.value = toText.value;
    toText.value = tempText;
    // language options
    setLang(lang === "English" ? "French" : "English");
    // changing the language code when clicking
    setLangCode(lang === "English" ? "French" : "en");
  };

  return (
    <>
      <div>
        <textarea
          className="fromText engText"
          placeholder="Type your desired translation here..."
        ></textarea>
      </div>
      <div className="">
        <div className="english">
          <select className="selectFrom">
            <option value="en">{lang}</option>
          </select>
        </div>
        <div onClick={changeHandler}>
          <img src={change} className="changeImg"></img>
        </div>
      </div>
    </>
  );
};

export default Translate;
