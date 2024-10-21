import { ContactInfo, DishInfo } from './types';

import img_4seasons from '../src/assets/uploads/4-seasons.avif';
import img_dodo from '../src/assets/uploads/dodo.avif';
import img_hamCheese from '../src/assets/uploads/ham-cheese.avif';
import img_kebab from '../src/assets/uploads/kebab.avif';
import img_pepperoni from '../src/assets/uploads/pepperoni.avif';

export const dishes: DishInfo[] = [
  {
    id: 0,
    title: 'Четыре сезона',
    description: 'Ветчина из цыпленка, пепперони из цыпленка, моцарелла, кубики брынзы, томаты, шампиньоны, итальянские травы, томатный соус',
    price: 495,
    imgUrl: img_4seasons,
  },
  {
    id: 1,
    title: 'Додо',
    description:
      'Ветчина из цыпленка, пепперони из цыпленка, фарш из говядины, моцарелла, шампиньоны, сладкий перец, красный лук, томаты, чеснок сухой, томатный соус',
    price: 495,
    imgUrl: img_dodo,
  },
  {
    id: 2,
    title: 'Ветчина и сыр',
    description: 'Ветчина из цыпленка, увеличенная порция моцареллы, соус альфредо',
    price: 495,
    imgUrl: img_hamCheese,
  },
  {
    id: 3,
    title: 'Кебаб пицца',
    description: 'Донерное мясо из говядины, моцарелла, томаты, красный лук, соленые огурчики, соус ранч, томатный соус',
    price: 495,
    imgUrl: img_kebab,
  },
  {
    id: 4,
    title: 'Пепперони',
    description: 'Пепперони из цыпленка, увеличенная порция моцареллы, томатный соус',
    price: 465,
    imgUrl: img_pepperoni,
  },
];

export const contacts: ContactInfo[] = [
  { id: 0, title: 'мкрн. Кок Жар', address: 'мкрн. Кок-Жар, 5/1', deliveryHours: 'Пн-Вс: 08:00 — 01:00', openHours: 'Пн-Вс: 08:00 — 01:00' },
  { id: 1, title: '12 мкр, ДК', address: 'ул. Нуркамал Жетикашкаевой, 29', deliveryHours: 'Пн-Вс: 08:00 — 01:00', openHours: 'Пн-Вс: 08:00 — 01:00' },
  {
    id: 2,
    title: 'Байтик Баатыра 96',
    address: 'ул. Байтик Баатыра (Советская), 96',
    deliveryHours: 'Пн-Вс: 08:00 — 01:00',
    openHours: 'Пн-Вс: 08:00 — 01:00',
  },
  { id: 3, title: 'Восток-5', address: 'пр-т Чуйский , 32Б', deliveryHours: 'Пн-Вс: 08:00 — 01:00', openHours: 'Пн-Вс: 08:00 — 01:00' },
  { id: 4, title: 'Киркомстром', address: 'ул. Фрунзе (село Новопавловка), 37', deliveryHours: 'Пн-Вс: 08:00 — 01:00', openHours: 'Пн-Вс: 08:00 — 01:00' },
  { id: 5, title: 'Манаса 7, ББ', address: 'пр-т Манаса , 7', deliveryHours: 'Пн-Вс: 08:00 — 23:00', openHours: 'Пн-Вс: 08:00 — 23:00' },
  { id: 6, title: 'ТРЦ "Ала-Арча"', address: 'пр-т Чингиза Айтматова, 299в', deliveryHours: 'Пн-Вс: 08:00 — 01:00', openHours: 'Пн-Вс: 10:00 — 23:00' },
  { id: 7, title: 'ТРЦ «I-Mall»', address: 'пер. Шевченко, 80', deliveryHours: 'Пн-Вс: Круглосуточно', openHours: 'Пн-Вс: Круглосуточно' },
  { id: 8, title: 'Шопокова 101/1', address: 'ул. Д. Шопокова, 101/1', deliveryHours: 'Пн-Вс: 08:00 — 01:00', openHours: 'Пн-Вс: 08:00 — 01:00' },
  { id: 9, title: 'Юнусалиева 179/2', address: 'ул. Б. Юнусалиева , 179/2', deliveryHours: 'Пн-Вс: Круглосуточно', openHours: 'Пн-Вс: Круглосуточно' },
];
