import React, { useContext } from 'react'
import Blog from './Blog'
import { themeContext } from './ThemeContext';
import Userform from './Userform';

function Home() {
    const theme = useContext(themeContext);
    console.log(theme);
    
  return (
    <div   style={{
        backgroundColor: theme.theme === "light"? 'white':'black',
        color: theme.theme=="light"?'black':'white'
    }}>
        <h1>
            Home Page
        </h1>
        <Blog />
        <Userform />
    </div>
  )
}

export default Home