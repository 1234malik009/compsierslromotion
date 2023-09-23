import React from "react"





const trans = () => {
    function change(option)
    {
     localStorage.setItem('lang', option.target.value);
     window.location.reload();
    }
    const lang = localStorage.getItem('lang') || 'en';

  return (
    <div className='translion-2'>
    <select name="select" id="sel" onChange={change} value={lang}>
        <option id='option' value="en">English</option>
        <option id='option' value="er">Spaish</option>
        <option id='option' value="ar">عربي</option>
    </select>
    </div>
  )
}

export default trans