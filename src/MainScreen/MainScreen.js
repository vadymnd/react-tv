import React, { useState } from "react";
import tvPicture from "../img/tv.png"
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("ru", ru);

const MainScreen = ({ setScreen, isMainScreen, setApiUrl, setStringDate }) => {

  const [startDate, setStartDate] = useState(new Date());

  const handleOnChangeApiUrl = (startDate) => {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    const stringDate = startDate.toLocaleDateString().split('.');
    const dd = stringDate[0];
    const mm = stringDate[1];
    const yyyy = stringDate[2]
    setApiUrl(`https://api.tvmaze.com/schedule?country=US&date=${yyyy}-${mm}-${dd}`);
    setStringDate(`${dd} ${months[mm - 1]} ${yyyy}`);
  }

  const handleOnChangeDate = (date) => {
    setStartDate(date);
    handleOnChangeApiUrl(date);
    setTimeout(() => {
      setScreen(!isMainScreen)
    }, 100);
  }

  return (
    <div className="main">
      <div className="main__container">
        <img src={tvPicture} className="main__container__img" alt="" />
        <span className="main__container__text">Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.</span>
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          handleOnChangeDate(date)
        }}
        locale='ru'
        dateFormatCalendar='LLLL'
        inline
      />
    </div>
  )
};

export default MainScreen;
