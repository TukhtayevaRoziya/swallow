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
    const [districts, setDistricts] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const regions = [
        {
          value: "andijon",
          label: "Andijon",
          districts: [
            "Andijon tumani",
            "Asaka tumani",
            "Baliqchi tumani",
            "Boʻston tumani",
            "Buloqboshi tumani",
            "Izboskan tumani",
            "Jalaquduq tumani",
            "Marhamat tumani",
            "Oltinkoʻl tumani",
            "Paxtaobod tumani",
            "Qoʻrgʻontepa tumani",
            "Shahrixon tumani",
            "Ulugʻnor tumani",
            "Xoʻjaobod tumani",
          ],
        },
        {
          value: "fargona",
          label: "Fargʻona",
          districts: [
            "Margʻilon shahri",
            "Qoʻqon shahri",
            "Rishton tumani",
            "Oltiariq tumani",
            "Beshariq tumani",
            "Dangʻara tumani",
            "Fargʻona tumani",
            "Quva tumani",
            "Furqat tumani",
            "Toshloq tumani",
          ],
        },
        {
          value: "namangan",
          label: "Namangan",
          districts: [
            "Chortoq tumani",
            "Toʻraqoʻrgʻon tumani",
            "Namangan tumani",
            "Kosonsoy tumani",
            "Pop tumani",
            "Uychi tumani",
            "Yangiqoʻrgʻon tumani",
          ],
        },
        {
          value: "toshkent",
          label: "Toshkent",
          districts: [
            "Bektemir tumani",
            "Mirobod tumani",
            "Yunusobod tumani",
            "Mirzo Ulugʻbek tumani",
            "Chilonzor tumani",
            "Olmazor tumani",
            "Sergeli tumani",
            "Yashnobod tumani",
            "Toshkent tumani",
          ],
        },
        {
          value: "jizzax",
          label: "Jizzax",
          districts: [
            "Zarbdor tumani",
            "Sharof Rashidov tumani",
            "Doʻstlik tumani",
            "Gʻallaorol tumani",
            "Zafarobod tumani",
            "Jizzax tumani",
          ],
        },
        {
          value: "surxondaryo",
          label: "Surxondaryo",
          districts: [
            "Termiz shahri",
            "Sherobod tumani",
            "Jarqoʻrgʻon tumani",
            "Uzun tumani",
            "Boysun tumani",
            "Shoʻrchi tumani",
            "Denov tumani",
            "Qumqoʻrgʻon tumani",
          ],
        },
      ];
    const handleChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem("lang", event.target.value);
        i18n.changeLanguage(event.target.value);
    };
    const handleRegionChange = (value) => {
        const region = regions.find((region) => region.value === value);
        setSelectedRegion(region.label);
        setDistricts(region ? region.districts : []);
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
                                <h2>Ota-onalar ma'lumotlarni to'ldirishda yordam beradi</h2>

                            </div>
                        </div>
                        <div className={style.bottom_register}>
                            <label htmlFor="">Viloyat</label> <br />
                    
                          
                            <Select
                                showSearch
                                style={{ width: 200, marginRight: 20 }}
                                placeholder="Viloyatni tanlang!"
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
                                }
                                options={regions.map((region) => ({
                                    value: region.value,
                                    label: region.label,
                                }))}
                                onChange={handleRegionChange}
                            />

                            {/* Tumanlarni tanlash */}
                            <label htmlFor="">Shahar/tuman</label> <br />
                            <Select
                                showSearch
                                style={{ width: 300 }}
                                placeholder={selectedRegion ? `${selectedRegion} tumanlari` : "Viloyat tanlang"}
                                disabled={!selectedRegion}
                                options={districts.map((district) => ({
                                    value: district,
                                    label: district,
                                }))}
                            />
                            <label htmlFor="">Familyangiz</label>
                            <Input />
                            <label htmlFor="">Ismingiz</label>
                            <Input />
                            <label htmlFor="">Tug`ilgan kuningiz</label>
                            <Input />
                            <label htmlFor="">Telefon raqamingiz</label>
                            <Input />

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