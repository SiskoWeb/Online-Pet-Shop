import styles from './AddProduct.module.scss'

import imageCover2 from '../../../assets/addimg.png'
import c1 from '../../../assets/Products/p1.png'
import c11 from '../../../assets/Products/p11.png'
import { AddProductHook } from '../../HookAdmin/Product/AddProductHook'
export default function AddProduct() {
    const [onSubmit, handleChange, formInputData, handleChangeImageCover, displayImageCover, handleChangeImages, displayImages] = AddProductHook()
    return (
        <div>
            <h1>Add New product</h1>

            <div className={styles.AddProduct}>

                <div className={styles.containerAddProduct}>

                    {/*--------------Description------------*/}

                    <h4>Description</h4>
                    <hr></hr>
                    <div className={styles.Description}>

                        <label><p>Product Name:* </p><input onChange={handleChange} value={formInputData.title} name="title" type='text' /></label>
                        <label><p>Product Description:*</p> <textarea onChange={handleChange} value={formInputData.description} name="description" type='text'></textarea></label>



                        {/*--------------Category------------*/}

                        <h4>Category</h4>
                        <hr></hr>
                        <div className={styles.Category}>
                            <label>Product Category:*
                                <select onChange={handleChange} value={formInputData.category} name="category">
                                    <option>Cat</option>
                                    <option>Dog</option>
                                    <option>Bird</option>
                                </select>
                            </label>


                        </div>


                        {/*--------------Inventory------------*/}

                        <h4>Inventory</h4>
                        <hr></hr>
                        <div className={styles.Quantity}>
                            <label>Quantity:* <input onChange={handleChange} value={formInputData.quantity} name="quantity" type='number' /></label>
                        </div>


                        {/*--------------Pricing------------*/}
                        <h4>Pricing</h4>
                        <hr></hr>
                        <div className={styles.Price}>
                            <label>Price:* <input onChange={handleChange} value={formInputData.price} name="price" type='number' /></label>
                        </div>
                    </div>







                </div>




                <div className={styles.containerAddProduct}>
                    <h4>Product Images</h4>
                    <hr></hr>
                    <div className={styles.imageCover}>
                        <p>Main Image(Required)*</p>
                        <label htmlFor='imageCover'

                        ><img src={displayImageCover}></img>
                            Click To Upload
                            <input onChange={handleChangeImageCover} name="imageCover" id='imageCover' type='file' />
                        </label>

                    </div>
                    <hr></hr>
                    <div className={styles.imageCover}>
                        <p>Images</p>
                        <label htmlFor='images'

                        >
                            Click To Upload
                            <input multiple onChange={handleChangeImages} name="images" id='images' type='file' />
                        </label>

                    </div>
                    <div className={styles.listImages}>
                        {displayImages?.map((img, index) => <img key={index} src={URL.createObjectURL(img)}></img>)}

                    </div>


                </div>






            </div>
            <div className={styles.btnAddProduct}>
                <button onClick={(e) => onSubmit(e)}>Add Product</button>
            </div>
        </div>
    )
}


