import React, {useState} from 'react'
import PropTypes from 'prop-types';


export default function EditCategory(props) {
  let [catName, setCatName] = useState(props.cat.name)
  
    return (
       <div className="border p-5">
       <p className="h4 text-primary text-center mt-2">Edit</p>
        <div class="form-group mt-3">
          <label htmlFor="exampleFormControlInput1">Category Name</label>
          <input 
          type="text" 
          class="form-control"
           value={catName} 
           onChange={e=>setCatName(e.target.value)}
           />
        </div>
        <div class="form-group">
          <label htmlFor="exampleFormControlSelect1">Parent Category</label>
          <select class="form-control" id="exampleFormControlSelect1" 
          value={props.cat.parent}
          onChange={()=>{}}
          >
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
        </div>
        <div class="d-flex justify-content-end">
       <button class="btn btn-primary">Save</button>

        </div>
     
    </div>
    )
}



EditCategory.propTypes = {
  cat:PropTypes.object.isRequired
}


