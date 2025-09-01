import scss from "./Home.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import type { IProduct } from "../../types/Types";
import Footer from "../footer/Footer";
import { setActiveButton } from "../../redux/productSlice";
import { useNavigate } from "react-router-dom";
import img from "../../assets/empty-cart.png";
const Home = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((s) => s.product);
  const nav = useNavigate();

  return (
    <>
      <div className={scss.homeContainer}>
        {product.length === 0 ? (
          <div className={scss.IMG}>
            <img src={img} alt="" className={scss.emptyImg} />
          </div>
        ) : (
          <>
            <div className={scss.content}>
              <div className={scss.categoryBlock}>
                <h2 className={scss.categoryTitle}>Салаты</h2>
                <div className={scss.productList}>
                  {product
                    .filter((el: IProduct) => el.category === "Салаты")
                    .slice(0, 4)
                    .map((el: IProduct) => (
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
                        </div>
                      </div>
                    ))}
                </div>
                <div className={scss.btnHr}>
                  <button
                    onClick={() => {
                      dispatch(setActiveButton("Салаты"));
                      nav(`/category/${"Салаты"}`);
                    }}
                  >
                    Подробнее
                  </button>
                  <hr />
                </div>
              </div>

              <div className={scss.categoryBlock}>
                <h2 className={scss.categoryTitle}>Супы</h2>
                <div className={scss.productList}>
                  {product
                    .filter((el: IProduct) => el.category === "Супы")
                    .map((el: IProduct) => (
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
                        </div>
                      </div>
                    ))}
                </div>
                <div className={scss.btnHr}>
                  <button
                    onClick={() => {
                      dispatch(setActiveButton("Супы"));
                      nav(`/category/${"Супы"}`);
                    }}
                  >
                    Подробнее
                  </button>
                  <hr />
                </div>
              </div>

              <div className={scss.categoryBlock}>
                <h2 className={scss.categoryTitle}>Горячие Блюда</h2>
                <div className={scss.productList}>
                  {product
                    .filter((el: IProduct) => el.category === "Блюда")
                    .map((el: IProduct) => (
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
                        </div>
                      </div>
                    ))}
                </div>
                <div className={scss.btnHr}>
                  <button
                    onClick={() => {
                      dispatch(setActiveButton("Блюда"));
                      nav(`/category/${"Блюда"}`);
                    }}
                  >
                    Подробнее
                  </button>
                  <hr />
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
