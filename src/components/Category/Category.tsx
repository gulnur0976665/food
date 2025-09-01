import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import type { IProduct } from "../../types/Types";
import scss from "./Category.module.scss";
import { setActiveButton } from "../../redux/productSlice";
import Footer from "../footer/Footer";
import img from "../../assets/empty-cart.png";
const Category = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((s) => s.product);
  const { title } = useParams<{ title: string }>();

  const dishes = ["курицей", "говядиной", "рыбой"];

  const filterCategory = product.filter(
    (el: IProduct) => el.category === title
  );

  return (
    <>
      {" "}
      <div className={scss.Category}>
        {filterCategory.length === 0 ? (
          <div className={scss.IMG}>
            <img src={img} alt="" className={scss.emptyImg} />
          </div>
        ) : (
          <>
            <div className={scss.categoryBlock}>
              <button
                className={scss.backBtn}
                onClick={() => {
                  nav("/");
                  dispatch(setActiveButton(""));
                }}
              >
                Главная
              </button>

              <div className={scss.content}>
                {title === "Блюда" ? (
                  dishes.map((dish) => (
                    <div key={dish} className={scss.dishBlock}>
                      {filterCategory.some(
                        (el: IProduct) => el.dishes === dish
                      ) && (
                        <div className={scss.hrText}>
                          <hr />
                          <h6 className={scss.categoryTitle}>Блюда с {dish}</h6>
                          <hr />
                        </div>
                      )}

                      <div className={scss.productList}>
                        {filterCategory
                          .filter((el: IProduct) => el.dishes === dish)
                          .map((el: IProduct) => (
                            <div key={el.id} className={scss.productCard}>
                              <img
                                src={el.url}
                                alt={el.name}
                                className={scss.productImage}
                              />
                              <div className={scss.texts}>
                                <p className={scss.productPrice}>
                                  {el.price} сом
                                </p>
                                <p className={scss.productName}>{el.name}</p>
                                {el.portions && (
                                  <p className={scss.productPortions}>
                                    от {el.portions} порции
                                  </p>
                                )}
                                <p className={scss.productDes}>
                                  {el.descripton}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <h2 className={scss.categoryTitle2}>{title}</h2>
                    <div className={scss.productList}>
                      {filterCategory.map((el: IProduct) => (
                        <div key={el.id} className={scss.productCard}>
                          <img
                            src={el.url}
                            alt={el.name}
                            className={scss.productImage}
                          />
                          <div className={scss.texts}>
                            <p className={scss.productPrice}>{el.price} сом</p>
                            <p className={scss.productName}>{el.name}</p>
                            {el.portions && (
                              <p className={scss.productPortions}>
                                от {el.portions} порции
                              </p>
                            )}
                            <p className={scss.productDes}>{el.descripton}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Category;
