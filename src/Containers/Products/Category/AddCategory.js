import React, {useState} from 'react'
import validations from '../../../validations'

export default function AddCategory() {
  let [categoryName, setCategoryName] = useState("")
  let [catErr, setCatErr] = useState(false)

  let saveCategory = ()=>{
    setCatErr(!validations.emptyStr.test(categoryName))
  }
    return (
       <div className="border p-5">
       <p className="h4 text-primary text-center mt-2">Add New Category</p>
        <div class="form-group mt-3">
          <label for="exampleFormControlInput1">Category Name</label>
          <input 
          type="text" 
          class="form-control" 
          value={categoryName}
          onChange={e=>setCategoryName(e.target.value)}

/>
          <small id="" className="form-text text-muted text-danger">
                            {catErr && "Category can not be empty"}
            </small>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Parent Category</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
        </div>
        <div class="d-flex justify-content-end">
       <button class="btn btn-primary" onClick={saveCategory}>Save</button>

        </div>
     
    </div>
    )
}
