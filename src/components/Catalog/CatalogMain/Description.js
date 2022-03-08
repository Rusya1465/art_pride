const Description = ({ text, img }) => {
  return (
    <>
      <div className="article">
        <div className="article_text">
          <p>{text}</p>
        </div>
        <div className="article_img">
          <img src={img} />
        </div>
      </div>
    </>
  );
};
export default Description;
