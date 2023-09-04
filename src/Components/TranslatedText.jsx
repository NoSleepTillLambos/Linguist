const TranslatedText = ({ lang }) => {
  return (
    <>
      <div>
        <textarea
          className="translated frenchText"
          disabled
          readOnly
          placeholder="Translated text"
        ></textarea>
      </div>
      <div className="">
        <div className="langChoice">
          <select className="selectTo">
            <option value="tr">
              {lang === "English" ? "French" : "English"}
            </option>
          </select>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default TranslatedText;
