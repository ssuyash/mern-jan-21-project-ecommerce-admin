import React from 'react'
import Structure from '../../Components/Structure'


const products = [{
    name:"iphone",
    brand:"Apple",
    category:"Mobile",
    imgUrl:"http://source.unsplash.com/random/50x50",
    price:989765.00,
    sale_prie:76543.00,
    qnty_avl : 10
},

{
    name:"iphone",
    brand:"Apple",
    category:"Mobile",
    imgUrl:"http://source.unsplash.com/random/50x50",
    price:989765.00,
    sale_prie:76543.00,
    qnty_avl : 10
},

{
    name:"iphone",
    brand:"Apple",
    category:"Mobile",
    imgUrl:"http://source.unsplash.com/random/50x50",
    price:989765.00,
    sale_prie:76543.00,
    qnty_avl : 10
}


]
export default function Products() {
    return (
        <Structure>
            <div className="row">
                <div className="col-md-12 my-3 text-right">
                    <button className="btn btn-outline-primary"> Add New </button>
                </div>
                <div className="col-md-12">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Name</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Category</th>
                                <th scope="col">Qnty</th>
                                <th scope="col">MRP</th>
                                <th scope="col">Sale Price</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product=>{
                                return (  <tr>
                                    <td scope="row">
                                        <img src={product.imgUrl}/>
                                    </td>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>

                                <td>{product.qnty_avl}</td>
                                <td>{product.price}</td>
                                <td>{product.sale_prie}</td>
                                <td>
                                    <button class="btn btn-outline btn-sm">
                                        <i class="fa fa-eye"></i>
                                    </button>

                                    <button class="btn btn-outline btn-sm">
                                        <i class="fa fa-trash"></i>
                                    </button>

                                </td>


                                </tr>)
                            })}
                          
                          
                          
                        </tbody>
                    </table>

                </div>
            </div>
        </Structure>
    )
}
