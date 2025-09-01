import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import logo from "../../assets/logo-removebg-preview.png";
import salat1 from "../../assets/salat1.png";
import nap1 from "../../assets/goods1.png";
import supy from "../../assets/solaynka1.png";
import bifsh from "../../assets/bifsh.png";
import pasta from "../../assets/Pasta1.png";
import samsy from "../../assets/samsy1.png";
import garnir from "../../assets/garnir.png";
import scss from "./SiteBar.module.scss";
import { setActiveButton, setModal } from "../../redux/productSlice";
import { HiBars3BottomLeft } from "react-icons/hi2";

const SiteBar = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const activeButton = useAppSelector((s) => s.product.value);
  const modal = useAppSelector((s) => s.product.modal);
  const menuLeft = [
    { name: "Салаты", img: salat1, path: "Салаты" },
    { name: "Напитки", img: nap1, path: "Напитки" },
    { name: "Супы", img: supy, path: "Супы" },
    { name: "Блюда", img: bifsh, path: "Блюда" },
    { name: "Пасты", img: pasta, path: "Пасты" },
    { name: "Самсы", img: samsy, path: "Самсы" },
    { name: "Гарниры", img: garnir, path: "Гарниры" },
  ];

  return (
    <>
      <div className={scss.SiteBar}>
        <img
          onClick={() => {
            nav("/");
            dispatch(setActiveButton(""));
          }}
          src={logo}
          alt="logo"
          className={scss.logo}
        />
        <div className={scss.menu}>
          <h6
            className={scss.menuTitle}
            onClick={() => {
              nav("/create");
              dispatch(setActiveButton(""));
            }}
          >
            Наше меню:
          </h6>

          {menuLeft.map(({ name, img, path }) => (
            <div
              key={name}
              className={`${scss.menuItem} ${
                activeButton === name ? scss.active : ""
              }`}
              onClick={() => {
                dispatch(setActiveButton(name));
                nav(`/category/${path}`);
              }}
            >
              <img src={img} alt={name} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={scss.modalLogo}>
        <HiBars3BottomLeft
          className={scss.icon}
          onClick={() => dispatch(setModal(!modal))}
        />

        <img
          onClick={() => {
            nav("/");
            dispatch(setActiveButton(""));
            dispatch(setModal(false));
          }}
          src={logo}
          alt="logo"
          className={scss.logo}
        />
      </div>
      <div className={`${scss.modal} ${modal ? scss.open : ""}`}>
        <h6 className={scss.menuTitle}>Наше меню:</h6>
        {menuLeft.map(({ name, img, path }) => (
          <div
            key={name}
            className={`${scss.menuItem} ${
              activeButton === name ? scss.active : ""
            }`}
            onClick={() => {
              dispatch(setActiveButton(name));
              nav(`/category/${path}`);
              dispatch(setModal(false));
            }}
          >
            <img src={img} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SiteBar;
