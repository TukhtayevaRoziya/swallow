import React, { useState } from 'react'
import style from "./Login.module.css"
import i18n from "../../i18n";
// import { useTranslation } from "react-i18next";
import { Select, Input } from 'antd';
import logo from "../../acsess/Резервная_копия_22222.png"
import logo2 from "../../acsess/icon.png"
import { NavLink } from 'react-router-dom';

const Login = () => {
    const defaultLang = localStorage.getItem("lang") || "uz";
    const [lang, setLang] = useState(defaultLang);
    // const { t } = useTranslation();

    const handleChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem("lang", event.target.value);
        i18n.changeLanguage(event.target.value);
    };
    return (
        <div className={style.Wrapper}>
            <div className={style.block33}>  </div>
            <div className={style.block}>
                <div className={style.part1}>
                    <div className={style.card}>

                        <div className={style.top_h}>
                            <div className={style.block_title}>
                                <div className={style.select}>
                                    <select name="lang" value={lang} onChange={handleChange}>
                                        <option value="uz">Uzb</option>
                                        <option value="ru">Ru</option>
                                    </select>
                                </div>
                                <h1 className={style.title}>Ro`yhatdan o`tish
                                </h1>
                            </div>
                            <div className={style.parents}>
                                <h2>Ota-onalar malumotlarni to`ldirishda yordam beradi</h2>

                            </div>
                        </div>
                        <div className={style.bottom_register}>
                            <label htmlFor="">Viloyat</label> <br />
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Viloyatni tanlang!"
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'Andijon',
                                    },
                                    {
                                        value: '2',
                                        label: 'Fargona',
                                    },
                                    {
                                        value: '3',
                                        label: 'Namangan',
                                    },
                                    {
                                        value: '4',
                                        label: 'Toshkent',
                                    },
                                    {
                                        value: '5',
                                        label: 'Jizzax',
                                    },
                                    {
                                        value: '6',
                                        label: 'Surxandaryo',
                                    },
                                ]}
                            />
                            <label htmlFor="">shahar/tuman</label> <br />
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Search to Select"
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'Oltinko`l',
                                    },
                                    {
                                        value: '2',
                                        label: 'Xonabot',
                                    },
                                    {
                                        value: '3',
                                        label: 'Baliqchi',
                                    },
                                    {
                                        value: '4',
                                        label: 'Asaka',
                                    },
                                    {
                                        value: '5',
                                        label: 'Andijon ',
                                    },
                                ]}
                            />
                            <label htmlFor="">Familyangiz</label>
                            <Input placeholder="Basic usage" />
                            <label htmlFor="">Familyangiz</label>
                            <Input placeholder="Basic usage" />
                            <label htmlFor="">Familyangiz</label>
                            <Input placeholder="Basic usage" />
                            <label htmlFor="">Familyangiz</label>
                            <Input placeholder="Basic usage" />
                            <label htmlFor="">Familyangiz</label>
                            <Input placeholder="Basic usage" />
                            <div className={style.button}>
                                <NavLink to={'/home'}>Tasdiqlash</NavLink>

                            </div>

                        </div>
                    </div>
                </div>
                <div className={style.part2}>
                    <div className={style.logo_brand}>
                        <img src={logo} className={style.img2} alt="" />
                        <img src={logo2} className={style.img3} alt="" />
                    </div>
                    <p>Bizning platformamizga xush kelibsiz!</p>
                    <p>Maktabga tayyorlik - Kelajak sari dastlabki qadam!</p>
                    <p>Maktabgacha ta'lim tashkilotini tamomlayotgan bolalarni maktabga tayyorgarlik darajasini baholash uchun mo‘ljallangan platformamiz bolalarning rivojlanishini kuzatish va ularni maktab hayotiga tayyorlashda samarali yordam beradi. Platforma orqali bolaning bilish qobiliyati, til ko‘nikmalari, matematik tushunchalari, ijtimoiy va emotsional rivojlanishi kabi sohalar keng qamrovli baholanadi. </p>
                    <p>Platformamiz orqali:</p>
                    <p>Bilim darajasini tahlil qilish: Bolalarning bilim darajasi va rivojlanish holatini aniq va sodda usullar bilan baholash mumkin.
                        O‘zlashtirish darajasini kuzatish: O‘qituvchilar va ota-onalar bolalarining rivojlanishini interaktiv tarzda kuzatib borishlari va qaysi sohalarda qo‘shimcha yordam kerakligini aniqlashlari mumkin.
                        Interaktiv o‘yinlar va mashqlar: Bolalarning o‘quv jarayonini qiziqarli va oson qiladigan interaktiv o‘yinlar va mashqlar orqali maktabga tayyorlash imkoniyati mavjud.</p>
                    <p>Platformamiz O‘zbekiston milliy qadriyatlariga asoslangan bo‘lib, ta'lim jarayonini qiziqarli, rivojlantiruvchi va ma'rifatli qilishga yordam beradi. Bizning maqsadimiz - bolalarni maktab hayotiga muvaffaqiyatli kirib borishi uchun zarur bo‘lgan bilim va ko‘nikmalar bilan ta'minlashdir.</p>
                    <p>Kelajakka tayyorgarlikni bugundan boshlang!</p>

                </div>
            </div>
        </div>
    )
}

export default Login