import { useState } from "react";
import "./CatalogMain.css";
import img1 from "./CatalogImg/img1.jpg";
import img2 from "./CatalogImg/img3.jpg";
import img3 from "./CatalogImg/img3.jpg";
import Description from "./Description";

const CatalogMain = () => {
  const [articleContent, setArticleContent] = useState([
    {
      id: 1,
      img: "./CatalogImg/img1.jpg",
      title:
        "Ролл шторы, сделанные из ткани. Тканое полотно сворачивается в рулон (отсюда название «рулонные»). Ткань пропитана грязеотталкивающим составом.Встречаются светопроникающие варианты и модели из ткани, задерживающей свет. Ролл-шторы способствуют солнцезащите и теплоизоляции помещения",
    },
    {
      id: 2,
      img: "./CatalogImg/img2.jpg",
      title:
        "Вертикальные жалюзи — одни из самых распространенных видов солнцезащитных систем. Часто их можно встретить в офисах, бизнес-центрах, медицинских и образовательных учреждениях, прежде всего из-за функциональности и невысокой стоимости.",
    },
    {
      id: 3,
      img: "./CatalogImg/img3.jpg",
      title:
        "Горизонтальные жалюзи — простой и функциональный вариант декорирования окна, защиты от солнца и посторонних глаз. Благодаря разнообразию ширины и оттенков алюминиевых ламелей горизонтальные жалюзи могут использоваться в абсолютно любых интерьерах",
    },
  ]);

  return (
    <div className="container">
      {articleContent.map((img, title) => {
        <Description title={title} img={img} />;
      })}
    </div>
  );
};
export default CatalogMain;
