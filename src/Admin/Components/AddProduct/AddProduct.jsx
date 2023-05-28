import styles from './AddProduct.module.scss'

import { ToastContainer } from 'react-toastify';
import addImg from '../../../assets/addimg.png'
import { AddProductHook } from '../../HookAdmin/Product/AddProductHook'
import { GetCategoryHook } from '../../HookAdmin/Category/GetCategoryHook';
export default function AddProduct() {
    const [Categories] = GetCategoryHook()
    const [onSubmit, handleChange, formInputData, handleChangeImageCover, displayImageCover, handleChangeImages, displayImages, onRemoveImageFromArray, handleChangeListImages, listimages] = AddProductHook()

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
                                    <select required onChange={handleChange} value={formInputData.category} name="category">
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

                                {displayImageCover === null ? null :

                                    <div className={styles.displayMainImage}>
                                        <i onClick={() => onRemoveImageFromArray()} className={` fa-solid fa-xmark`} ></i>
                                        <img src={displayImageCover}></img>
                                    </div>}


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





                            <div className={styles.imagesCard}>

                                <label htmlFor='images'>
                                    <img src={listimages[0].image}></img>
                                    Click to Upload
                                    <input onChange={(e) => handleChangeListImages(0, e)} name="images" id='images' type='file' />
                                </label>
                                <label htmlFor='images'>
                                    <img src={listimages[1].image}></img>
                                    Click to Upload
                                    <input onChange={(e) => handleChangeListImages(1, e)} name="images" id='images' type='file' />
                                </label>
                                <label htmlFor='images'>
                                    <img src={listimages[2].image}></img>
                                    Click to Upload
                                    <input onChange={(e) => handleChangeListImages(2, e)} name="images" id='images' type='file' />
                                </label>
                                <label htmlFor='images'>
                                    <img src={listimages[3].image}></img>
                                    Click to Upload
                                    <input onChange={(e) => handleChangeListImages(3, e)} name="images" id='images' type='file' />
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


