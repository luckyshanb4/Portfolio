import React from 'react';
import ProjectSlide from '../components/ProjectSlide';

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                        

                            <div className="hover-items" onClick={()=>{  

                                item.link1 !="" && window.open(item.link1)      
                                

                            }}>
                               <ProjectSlide imagesList={item.slideImages} />
                               
                            </div>

                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.description}</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
