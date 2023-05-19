import React from 'react'
import styles from './AddProduct.module.scss'

import imageCover from '../../../assets/addimg.png'
import c1 from '../../../assets/Products/p1.png'
import c11 from '../../../assets/Products/p11.png'
export default function AddProduct() {
    return (
        <div>
            <h1>Add New product</h1>

            <div className={styles.AddProduct}>

                <div className={styles.containerAddProduct}>
                    <h4>Description</h4>
                    <hr></hr>
                    <div className={styles.Description}>

                        <label><p>Product Name:* </p><input type='text' /></label>
                        <label><p>Product Description:*</p> <textarea type='text'></textarea></label>
                    </div>
                </div>



                <div className={styles.containerAddProduct}>
                    <h4>Product Images</h4>
                    <hr></hr>
                    <div className={styles.imageCover}>
                        <p>Main Image(Required)*</p>
                        <label htmlFor='imageCover'

                        ><img src={imageCover}></img>
                            Click To Upload
                            <input id='imageCover' type='file' />
                        </label>

                    </div>
                    <hr></hr>
                    <div className={styles.imageCover}>
                        <p>Images</p>
                        <label htmlFor='imageCover'

                        ><img src={imageCover}></img>
                            Click To Upload
                            <input id='imageCover' type='file' />
                        </label>

                    </div>
                    <div className={styles.listImages}>
                        <img src={c11}></img>
                        <img src={c1}></img>
                        <img src={c11}></img>
                        <img src={c1}></img>
                    </div>
                </div>

                <div className={styles.containerAddProduct}>
                    <h4>Category</h4>
                    <hr></hr>
                    <div className={styles.Category}>
                        <label>Product Category:*
                            <select>
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Bird</option>
                            </select>
                        </label>
                    </div>

                </div>

                <div className={styles.containerAddProduct}>
                    <h4>Inventory</h4>
                    <hr></hr>
                    <div className={styles.Quantity}>
                        <label>Quantity:* <input type='number' /></label>
                    </div>

                </div>
                <div className={styles.containerAddProduct}>
                    <h4>Pricing</h4>
                    <hr></hr>
                    <div className={styles.Price}>
                        <label>Price:* <input type='number' /></label>
                    </div>

                </div>

            </div>
            <div className={styles.containerAddProduct}>

                <div className={styles.btnAddProduct}>
                    <button>Add Product</button>
                </div>
            </div>
        </div>
    )
}


// <div className={styles.section}>
// <h4>Description</h4>
// <hr></hr>
// <label>Product Name <input type='text' /></label>
// <label>Product Name <textarea type='text'></textarea></label>
// </div>