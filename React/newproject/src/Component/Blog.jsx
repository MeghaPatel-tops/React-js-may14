import React, { useContext } from 'react'
import { themeContext } from './ThemeContext';

function Blog() {
    const {theme,setTheme} = useContext(themeContext);
    const changeTheame = ()=>{
        let newTheme = theme == 'light' ? 'dark':'light';
        setTheme(newTheme);
    }
  return (
    <div>
        <h1>Blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est veniam delectus quis harum officia enim distinctio cupiditate dolorem tempora facere impedit incidunt iste, quaerat, vero reiciendis error laudantium aspernatur!</p>

        <button onClick={changeTheame}>
              {theme == 'light' ?'Dark':'Light'} 
        </button>
    </div>
  )
}

export default Blog