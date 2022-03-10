import { useState } from "react";
import "./GalleryMain.css";
import img1 from "./GalleryImg/img1.jpg";
import img2 from "./GalleryImg/img2.jpg";
import img3 from "./GalleryImg/img3.jpg";
import Description from "./Description";
import DetailBtn from "./DetailBtn";
import { Link } from "react-router-dom";
import SwiperGallery from "./SwiperGallery";

const GalleryMain = () => {
  return (
    <div className="container">
      <div className="blur">
        <div className="gallery_main__title">
          <h2>У нас вы можете приобрести</h2>
        </div>
        <div className="article">
          <div className="article_text">
            <p>
              <strong>Ролл шторы</strong>, сделанные из ткани. Тканое полотно
              сворачивается в рулон (отсюда название «рулонные»). Ткань
              пропитана грязеотталкивающим составом.
              <br />
              <br />
              Встречаются светопроникающие варианты и модели из ткани,
              задерживающей свет. Ролл-шторы способствуют солнцезащите и
              теплоизоляции помещения
            </p>
          </div>

          <div className="article_img">
            <div className="horizontal_text">
              <h3>Ролл шторы</h3>
            </div>
            <img src={img1} />
            <DetailBtn />
          </div>
        </div>
        <div className="article">
          <div className="article_img">
            <div className="horizontal_text">
              <h3>Вертикальные</h3>
            </div>
            <img src={img2} />
            <DetailBtn />
          </div>
          <div className="article_text">
            <p>
              <strong>Вертикальные жалюзи</strong> — одни из самых
              распространенных видов солнцезащитных систем. Часто их можно
              встретить в офисах, бизнес-центрах, медицинских и образовательных
              учреждениях, прежде всего из-за функциональности и невысокой
              стоимости.
            </p>
          </div>
        </div>
        <div className="article">
          <div className="article_text">
            <p>
              <strong>Горизонтальные жалюзи</strong> — простой и функциональный
              вариант декорирования окна, защиты от солнца и посторонних глаз.
              Благодаря разнообразию ширины и оттенков алюминиевых ламелей
              горизонтальные жалюзи могут использоваться в абсолютно любых
              интерьерах
            </p>
          </div>

          <div className="article_img">
            <div className="horizontal_text">
              <h3>Горизонтальные</h3>
            </div>
            <img src={img3} />
            <DetailBtn />
          </div>
        </div>
        <Link to="/">
          <div className="detail">
            <p>Подробнее</p>
          </div>
        </Link>
        <div className="gallery_main__title">
          <h2>Так же мы можем</h2>
        </div>
        <SwiperGallery />
        <div className="footer">
          <div className="footer_text">
            <p>
              Так же мы можем предоставить Отговорила роща золотая… Отговорила
              рощаолотая Берёзовым, весёлым языком, И журавли, печально
              пролетая, Уж не жалеют больше ни о ком. Кого жалеть? Ведь каждый в
              мире странник — Пройдёт, зайдёт и вновь оставит дом. О всех
              ушедших грезит конопляник С широким месяцем над голубым прудом.
              <br />
              <br />
              Стою один среди равнины голой, А журавлей относит ветер в даль, Я
              полон дум о юности весёлой, Но ничего в прошедшем мне не жаль. Не
              жаль мне лет, растраченных напрасно, е жаль души сиреневую цветь.
              В саду горит костёр рябины красной, о никого не моябиновые
              ти,Отжелтизныеадёт трава, Как дерево роняет тихо листья, ак я
              роняю грустные слова.
            </p>
          </div>
          <div className="icons"></div>
          <div className="footer-end">
            <span>© 2021 Art Pride.All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GalleryMain;
