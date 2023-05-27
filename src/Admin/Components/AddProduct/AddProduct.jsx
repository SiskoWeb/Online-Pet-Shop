import styles from './AddProduct.module.scss'

import { ToastContainer } from 'react-toastify';

import { AddProductHook } from '../../HookAdmin/Product/AddProductHook'
import { GetCategoryHook } from '../../HookAdmin/Category/GetCategoryHook';
export default function AddProduct() {
    const [Categories] = GetCategoryHook()
    const [onSubmit, handleChange, formInputData, handleChangeImageCover, displayImageCover, handleChangeImages, displayImages, onRemoveImageFromArray] = AddProductHook()

    return (
        <div>
            <div className={styles.title}>
                <h3>Add New product</h3>
            </div>


            <div className={styles.ProductAdd}>



                <div className={styles.container}>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h5>General</h5></div>


                        <div className={styles.cardBody}>
                            <div className={styles.formGroup}>
                                <label><p><span>*</span>Product Name</p><input className={styles.formControl} onChange={handleChange} value={formInputData.title} name="title" type='text' /></label>
                            </div>



                            <div className={styles.formGroup}>
                                <label><span>*</span>Price<input className={styles.formControl} onChange={handleChange} value={formInputData.price} name="price" type='number' /></label>
                            </div>


                            <div className={styles.formGroup}>
                                <label><span>*</span>Quantity<input className={styles.formControl} onChange={handleChange} value={formInputData.quantity} name="quantity" type='number' /></label>
                            </div>


                            <div className={styles.formGroup}>
                                <label className={styles.category}>
                                    <p><span>*</span>Product Category</p>
                                    <select onChange={handleChange} value={formInputData.category} name="category">
                                        {Categories.length >= 1 ? Categories?.map((cat, index) => <option key={index} value={cat._id}>{cat.name}</option>) : <option disabled>No Category , add new one</option>}


                                    </select>
                                </label>
                            </div>






                            <div className={styles.formGroup}>
                                <label><p><span>*</span>Product Description</p> <textarea className={styles.formControl} onChange={handleChange} value={formInputData.description} name="description" type='text'></textarea></label>
                            </div>

                        </div>
                    </div>




                </div>






                <div className={styles.container}>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h5>Main Image</h5></div>


                        <div className={styles.cardBody}>

                            <div className={styles.imageCard}>
                                <img src={displayImageCover}></img>
                                <label htmlFor='imageCover'

                                >
                                    Click To Upload
                                    <input onChange={handleChangeImageCover} name="imageCover" id='imageCover' type='file' />
                                </label>

                            </div>




                        </div>




                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h5>Images</h5></div>


                        <div className={styles.cardBody}>


                            <div className={styles.listImages}>
                                {displayImages?.map((img, index) => {
                                    return (
                                        <div className={styles.ItemOfImage} key={index}>
                                            <img src={URL.createObjectURL(img)}></img>
                                            <i onClick={() => onRemoveImageFromArray()} className={`${styles.cart}  fa-solid fa-xmark`} ></i>
                                        </div>
                                    )
                                })}

                            </div>


                            <div className={styles.imageCard}>

                                <label htmlFor='images'

                                >
                                    Click To Upload
                                    <input multiple onChange={handleChangeImages} name="images" id='images' type='file' />
                                </label>

                            </div>

                        </div>




                    </div>
                </div>






            </div>
            <div className={styles.btnAddProduct}>
                <button onClick={(e) => onSubmit(e)}>Add Product</button>
            </div>
            <ToastContainer />
            <div>
            </div>
        </div>
    )
}


