import React, { useState } from 'react';
import style from "./Login.module.css";
import i18n from "../../i18n";
import { Select, Input, Button, Form } from 'antd';
import logo from "../../acsess/Резервная_копия_22222.png";
import logo2 from "../../acsess/icon.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
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
      value: "buxoro",
      label: "Buxoro",
      districts: [
        "Buxoro tumani",
        "Gʻijduvon tumani",
        "Jondor tumani",
        "Kogon tumani",
        "Olot tumani",
        "Peshku tumani",
        "Romitan tumani",
        "Shofirkon tumani",
        "Vobkent tumani",
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
      value: "navoiy",
      label: "Navoiy",
      districts: [
        "Navoiy tumani",
        "Karmana tumani",
        "Zarafshon tumani",
        "Uchquduq tumani",
        "Konimex tumani",
        "Navbahor tumani",
        "Qiziltepa tumani",
        "Tomdi tumani",
        "Nurota tumani",
      ],
    },
    {
      value: "qashqadaryo",
      label: "Qashqadaryo",
      districts: [
        "Qarshi tumani",
        "Shahrisabz tumani",
        "Dehqonobod tumani",
        "Chirakchi tumani",
        "Kitob tumani",
        "Koson tumani",
        "Yakkabogʻ tumani",
        "Nishon tumani",
        "Mirishkor tumani",
        "Qamashi tumani",
        "Shahri Nasaf tumani",
        "Muborak tumani",
      ],
    },
    {
      value: "samarqand",
      label: "Samarqand",
      districts: [
        "Samarqand tumani",
        "Bulungʻur tumani",
        "Jomboy tumani",
        "Kattaqorgon tumani",
        "Ishtixon tumani",
        "Narpay tumani",
        "Oqdaryo tumani",
        "Pastdargʻom tumani",
        "Paxtachi tumani",
        "Samarkand shahri",
      ],
    },
    {
      value: "surxandaryo",
      label: "Surxandaryo",
      districts: [
        "Termiz tumani",
        "Angor tumani",
        "Boysun tumani",
        "Denov tumani",
        "Jarqoq tumani",
        "Muzrabot tumani",
        "Oltinsoy tumani",
        "Shereabad tumani",
        "Sariosiyo tumani",
        "Sherobod tumani",
      ],
    },
    {
      value: "xorazm",
      label: "Xorazm",
      districts: [
        "Urganch tumani",
        "Shavot tumani",
        "Gurlan tumani",
        "Xiva tumani",
        "Oʻrta Qishloq tumani",
        "Yangiariq tumani",
        "Khojeyli tumani",
        "Rishton tumani",
        "Kogon tumani",
      ],
    },
    {
      value: "qoraqalpoq",
      label: "Qoraqalpog'iston Respublikasi",
      districts: [
        "Amudaryo tumani",
        "Beruniy tumani",
        "Chimboy tumani",
        "Ellikqal'a tumani",
        "Kegeyli tumani",
        "Khojeyli tumani",
        "Muynak tumani",
        "Nukus tumani",
        "Shumanay tumani",
        "Turtkul tumani",
        "Xivakor tumani",
        "Qanliko'l tumani",
        "Qorao'zak tumani",
        "Shahristan tumani",
      ],
    }
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

  const onFinish = (values) => {
    console.log('Form values:', values);
    navigate("/home")
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Form failed:', errorInfo);
  };

  return (
    <div className={style.Wrapper}>
      <div className={style.block33}></div>
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
                <h1 className={style.title}>Ro`yhatdan o`tish</h1>
              </div>
              <div className={style.parents}>
                <h2>Ota-onalar ma'lumotlarni to'ldirishda yordam beradi</h2>
              </div>
            </div>
            <Form
              name="register"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className={style.bottom_register}>
                <Form.Item
                  name="region"
                  label="Viloyat"
                  rules={[{ required: true, message: 'Viloyatni tanlang!' }]}
                >
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
                </Form.Item>

                <Form.Item
                  name="district"
                  label="Shahar/tuman"
                  rules={[{ required: true, message: 'Tuman tanlash majburiy!' }]}
                >
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
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label="Familyangiz"
                  rules={[{ required: true, message: 'Familiyangizni kiriting!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="firstName"
                  label="Ismingiz"
                  rules={[{ required: true, message: 'Ismingizni kiriting!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="birthDate"
                  label="Tug`ilgan kuningiz"
                  rules={[{ required: true, message: 'Tug`ilgan kuningizni kiriting!' }]}
                >
                  <Input type="date" />
                </Form.Item>

                <Form.Item
                  name="phoneNumber"
                  label="Telefon raqamingiz"
                  rules={[{ required: true, message: 'Telefon raqamingizni kiriting!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Tasdiqlash
                  </Button>
                </Form.Item>
              </div>
            </Form>
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
  );
};

export default Login;



