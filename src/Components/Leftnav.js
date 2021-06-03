import React from 'react'
import { Link } from 'react-router-dom'

export default function Leftnav() {
    return (
        <div>
            <ul className="list-group left-nav">
                <li class="list-group-item">
                    <Link>Dashboard</Link>
                </li>
                <li class="list-group-item" data-toggle="collapse" data-target="#productCollapse" aria-expanded="false" aria-controls="productCollapse">Products
                    <ul className="list-group collapse submenu" id="productCollapse">
                        <li class="list-group-item">Categories</li>
                        <li class="list-group-item">Brands</li>
                        <li class="list-group-item">All Products</li>

                    </ul>
                </li>


                <li class="list-group-item">Orders</li>
                <li class="list-group-item">Customers</li>
                <li class="list-group-item">Reports</li>
                <li class="list-group-item">Settings</li>

              

            </ul>
        </div>
    )
}
