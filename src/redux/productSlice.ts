import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../types/Types";

interface ProductState {
  product: IProduct[];
  value: string;
  modal: boolean;
}

const initialState: ProductState = {
  product: [
    {
      id: 1,
      url: "https://i.pinimg.com/1200x/61/4c/73/614c73f5496768792c311389255d523c.jpg",
      category: "Салаты",
      createdAt: "2025-08-25 17:27:47 +06:00",
      descripton:
        "картофель, майонез, колбаса, яйца, горошек, морковь, сол. огурцы",
      dishes: "",
      name: "Оливье (350г)",
      portions: "",
      price: "200",
      updatedAt: "2025-08-25 17:27:47 +06:00",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/59/80/4e/59804eb4b2455f08f334a06645eac2e6.jpg",
      category: "Напитки",
      createdAt: "2025-08-25 17:30:21 +06:00",
      descripton: "Raspberry",
      dishes: "",
      name: "Raspberry Lemonade",
      portions: "",
      price: "140",
      updatedAt: "2025-08-25 17:30:21 +06:00",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/1200x/58/d8/33/58d833a9ceda3080d6c8ee419dee997c.jpg",
      category: "Супы",
      createdAt: "2025-08-25 17:31:37 +06:00",
      descripton: "Картошка, лук, морковь, грибы, мясо, яйца",
      dishes: "",
      name: "Грибной",
      portions: "6",
      price: "200",
      updatedAt: "2025-08-25 17:31:37 +06:00",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/736x/cf/3e/af/cf3eaf1835fbcea3c07960fb7cf02a85.jpg",
      category: "Блюда",
      createdAt: "2025-08-25 17:34:11 +06:00",
      descripton: "Мясо, тесто, лук, специи",
      dishes: "говядиной",
      name: "Манты",
      portions: "5",
      price: "200",
      updatedAt: "2025-08-25 17:34:11 +06:00",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/736x/7c/a2/d8/7ca2d891a439737c2e1e0fa9a4a9ec4e.jpg",
      category: "Пасты",
      createdAt: "2025-08-25 17:36:54 +06:00",
      descripton: "Кур,филе, лук, грибы, сметана, спагетти, петрушка, сыр",
      dishes: "",
      name: "Спагетти с курицей и грибами",
      portions: "",
      price: "250",
      updatedAt: "2025-08-25 17:36:54 +06:00",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/1200x/49/e5/d8/49e5d854d7c922cafc09910b68eb2526.jpg",
      category: "Самсы",
      createdAt: "2025-08-25 17:38:40 +06:00",
      descripton: "Кур,филе, лук, грибы, сметана, спагетти, петрушка, сыр",
      dishes: "",
      name: "Самсы с курицей",
      portions: "10",
      price: "65",
      updatedAt: "2025-08-25 17:38:40 +06:00",
    },
    {
      id: 7,
      url: "https://i.pinimg.com/736x/58/da/91/58da91b0ae9b380395f4b64e57ab85df.jpg",
      category: "Гарниры",
      createdAt: "2025-08-25 17:45:29 +06:00",
      descripton:
        "Куриное филе,Капуста брокколи,Цукини,Кабачки свежие,Перец сладкий,Картофель,Морковь,Лимон,Смесь итальянских трав ,Чеснок молотый (чесночный порошок),Лук сушеный,Масло оливковое - 3 с Перец черный молотый Петрушка свежая",
      dishes: "",
      name: "Запеченная курица с овощами",
      portions: "",
      price: "500",
      updatedAt: "2025-08-25 17:45:29 +06:00",
    },
    {
      id: 8,
      url: "https://i.pinimg.com/736x/f4/f7/6c/f4f76c7cc8e45679e944c9c073e60c16.jpg",
      category: "Супы",
      createdAt: "2025-08-25 17:48:36 +06:00",
      descripton:
        "картошка, лук, морковь, соленые огурцы, мясо, копчёная колбаса(халал), томат",
      dishes: "",
      name: "Солянка",
      portions: "",
      price: "200",
      updatedAt: "2025-08-25 17:48:36 +06:00",
    },
    {
      id: 9,
      url: "https://i.pinimg.com/736x/c9/4e/b6/c94eb6eb76940e9be6e1584e0f9a48ab.jpg",
      category: "Салаты",
      createdAt: "2025-08-25 17:52:08 +06:00",
      descripton: "огурцы, помидоры, маслины, сыр, масло, орегано",
      dishes: "",
      name: "Греческий (350г)",
      portions: "5",
      price: "250",
      updatedAt: "2025-08-25 17:52:08 +06:00",
    },
    {
      id: 10,
      url: "https://i.pinimg.com/736x/d9/a4/12/d9a4128547a10cfe3379e3050d92edc6.jpg",
      category: "Блюда",
      createdAt: "2025-08-25 17:58:01 +06:00",
      descripton:
        "Рыба(мор.окунь), чеснок, крахмал, томатный соус, специи, лук, морковь, болгарский перец",
      dishes: "рыбой",
      name: "Рыба в кисло-сладком соусе с овощами(с гарниром)",
      portions: "",
      price: "320",
      updatedAt: "2025-08-25 17:58:01 +06:00",
    },
    {
      id: 11,
      url: "https://i.pinimg.com/1200x/fd/93/f8/fd93f816cdfe31388bd0417e4e2ec970.jpg",
      category: "Салаты",
      createdAt: "2025-08-28T21:42:20.224Z",
      descripton: "селедка, лук, майонез, картофель, свекла, яйца",
      dishes: "",
      name: "Селедка под шубой (350г)",
      portions: "8",
      price: "250",
      updatedAt: "2025-08-28T21:42:20.224Z",
    },
    {
      id: 12,
      url: "https://i.pinimg.com/736x/45/2f/5b/452f5b0438debc61f40f5359bf66d7af.jpg",
      category: "Салаты",
      createdAt: "2025-08-28T21:45:43.643Z",
      descripton: "скумбрия, лук, яйца, картофель, морковь, майонез",
      dishes: "",
      name: "Мимоза (350г)",
      portions: "4",
      price: "190",
      updatedAt: "2025-08-28T21:45:43.643Z",
    },
    {
      id: 13,
      url: "https://lafoy.ru/photo_l/foto-1563-3.jpg",
      category: "Салаты",
      createdAt: "2025-08-28T21:58:26.313Z",
      descripton:
        "Говядина,Морковь,Лук,Чеснок,Болгарский перец красный,Болгарский,перец жёлтый,Огурец,свежий,Кинза,Семена кунжута,Соевый соус,Растительное,масло,Уксус,Сахар,Перец",
      dishes: "",
      name: "Корейский салат с говядиной",
      portions: "",
      price: "200",
      updatedAt: "2025-08-28T21:58:26.314Z",
    },
    {
      id: 14,
      url: "https://i.pinimg.com/1200x/0e/8c/4a/0e8c4a32d54ed3be9f8618b21b7a13e7.jpg",
      category: "Блюда",
      createdAt: "2025-08-28T22:01:37.508Z",
      descripton: "Филе, лук, картошка, яйца, сыр",
      dishes: "курицей",
      name: "Куриные котлеты",
      portions: "",
      price: "250",
      updatedAt: "2025-08-28T22:01:37.508Z",
    },
    {
      id: 15,
      url: "https://i.pinimg.com/736x/8b/97/d4/8b97d456eb797e444e6fca0a5e7e7cc2.jpg",
      category: "Блюда",
      createdAt: "2025-08-28T22:12:07.024Z",
      descripton: "Рыба(минтай), томат, лук, мука",
      dishes: "рыбой",
      name: "Минтай в томатном соусе",
      portions: "5",
      price: "270",
      updatedAt: "2025-08-28T22:12:07.024Z",
    },
  ],
  value: localStorage.getItem("value") || "",
  modal: JSON.parse(localStorage.getItem("modal") || "false"),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setActiveButton: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem("value", JSON.stringify(state.value));
    },
    setModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
      localStorage.setItem("modal", JSON.stringify(state.modal));
    },
  },
});

export const { setActiveButton, setModal } = productSlice.actions;
export default productSlice.reducer;
