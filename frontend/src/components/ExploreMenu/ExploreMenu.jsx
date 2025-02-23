
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
function ExploreMenu({category,setcategory}){
    return (
        <div className='explore-menu' id='explore-menu'>

            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishesh</p>

            <div className="explore-menu-list">
                {
                    menu_list.map((item,index)=>(<div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item' key={index}>
                           <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt=''></img>
                           <p>{item.menu_name}</p>

                    </div>))
                }
            </div>

            <hr></hr>

        </div>
    )
}

export default ExploreMenu