import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { createProduct } from "../../redux/productSlice";

const Create: React.FC = () => {
  const { product } = useAppSelector((s) => s.product);
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productCat, setProductCat] = useState("");
  const [productDishes, setProductDishes] = useState("");
  const [productPortions, setProductPortions] = useState("");
  const dispatch = useAppDispatch();

  const CreateProduct = async () => {
    dispatch(
      createProduct({
        id: product.length + 1,
        name: productName,
        url: productUrl,
        price: productPrice,
        descripton: productDes,
        category: productCat,
        dishes: productDishes,
        portions: productPortions,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    );

    setProductCat("");
    setProductDes("");
    setProductDishes("");
    setProductName("");
    setProductPortions("");
    setProductPrice("");
    setProductUrl("");
  };
  return (
    <div style={{ paddingLeft: "350px" }}>
      <h1>Create</h1>
      <section>
        <label>
          Категория:
          <select
            value={productCat}
            onChange={(e) => setProductCat(e.target.value)}
          >
            <option value="" disabled>
              категория тандаңыз
            </option>
            <option value="Салаты">Салаты</option>
            <option value="Напитки">Напитки</option>
            <option value="Супы">Супы</option>
            <option value="Блюда">Блюда</option>
            <option value="Пасты">Пасты</option>
            <option value="Самсы">Самсы</option>
            <option value="Гарниры">Гарниры</option>
          </select>
        </label>
      </section>

      <section>
        <label>
          Блюда түрү:
          <select
            value={productDishes}
            onChange={(e) => setProductDishes(e.target.value)}
          >
            <option value="" disabled>
              тандаңыз
            </option>
            <option value="курицей">курицей</option>
            <option value="говядиной">говядиной</option>
            <option value="рыбой">рыбой</option>
          </select>
        </label>
      </section>

      <input
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setProductUrl(e.target.value)}
        value={productUrl}
        type="url"
        placeholder="image url"
      />
      <input
        onChange={(e) => setProductPrice(e.target.value)}
        value={productPrice}
        type="number"
        placeholder="price"
      />
      <input
        onChange={(e) => setProductDes(e.target.value)}
        value={productDes}
        type="text"
        placeholder="description"
      />
      <input
        onChange={(e) => setProductPortions(e.target.value)}
        value={productPortions}
        type="number"
        placeholder="portions"
      />
      <button onClick={CreateProduct}>Add</button>
    </div>
  );
};

export default Create;
