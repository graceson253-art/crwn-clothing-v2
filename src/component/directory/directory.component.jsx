
import CategoryItem from "../category-items/category-items";

import "../directory/directory.component.scss"


const  DirectoryComponent = ({category}) => {

    return(

        <div className="categories-container">
    {category.map((category)=>(

      <CategoryItem key={category.id}   category = {category}/>

       
      )


    )}
    </div>


    )
}


export  default DirectoryComponent;