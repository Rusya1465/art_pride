import { useState } from "react";
import "./CatalogMain.css";
import img1 from "./CatalogImg/img1.jpg";
import img2 from "./CatalogImg/img2.jpg";
import img3 from "./CatalogImg/img3.jpg";
import Description from "./Description";
import DetailBtn from "./DetailBtn";

const CatalogMain = () => {
  return (
    <div className="container">
      <div className="article">
        <div className="article_text">
          <p>
            Ролл шторы, сделанные из ткани. Тканое полотно сворачивается в рулон
            (отсюда название «рулонные»). Ткань пропитана грязеотталкивающим
            составом.
            <br />
            <br />
            Встречаются светопроникающие варианты и модели из ткани,
            задерживающей свет. Ролл-шторы способствуют солнцезащите и
            теплоизоляции помещения
          </p>
        </div>
        <div className="article_img">
          <img src={img1} />
          <DetailBtn />
        </div>
      </div>
      <div className="article">
        <div className="article_img">
          <img src={img2} />
          <DetailBtn />
        </div>
        <div className="article_text">
          <p>
            Вертикальные жалюзи — одни из самых распространенных видов
            солнцезащитных систем. Часто их можно встретить в офисах,
            бизнес-центрах, медицинских и образовательных учреждениях, прежде
            всего из-за функциональности и невысокой стоимости.
          </p>
        </div>
      </div>
      <div className="article">
        <div className="article_text">
          <p>
            Горизонтальные жалюзи — простой и функциональный вариант
            декорирования окна, защиты от солнца и посторонних глаз. Благодаря
            разнообразию ширины и оттенков алюминиевых ламелей горизонтальные
            жалюзи могут использоваться в абсолютно любых интерьерах
          </p>
        </div>
        <div className="article_img">
          <img src={img3} />
          <DetailBtn />
        </div>
      </div>
    </div>
  );
};
export default CatalogMain;
