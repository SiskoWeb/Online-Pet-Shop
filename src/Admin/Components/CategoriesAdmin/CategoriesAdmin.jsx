
import styles from './CategoriesAdmin.module.scss'
import addimg from '../../../assets/addimg.png'

import { CategoriesHook } from '../../HookAdmin/CategoriesHook'
import { ToastContainer } from 'react-toastify';
import CardCategoryAdmin from '../../../utilis/CardCategoryAdmin/CardCategoryAdmin'

export default function CategoriesAdmin() {



    const [categoryName, imgCategory, onChangeName, onChangeImg, onSubmit, clearInputImg, deleteCategory, isLoading, Categories] = CategoriesHook()



    const colors = ['#cfe4ff', '#deeeed', '#fff5b9', '#ececec']




    return (
        <div className={styles.categoriesAdmin}>


            <div className={styles.addCategory}>

                <div className={styles.col1}>

                    <div className={styles.imageCategory}>
                        <p>Image(Required)*</p>
                        <label htmlFor='imageCover'

                        ><img src={addimg}></img>
                            Click To Upload
                            <input
                                type="file"
                                id='imageCover'
                                onChange={(e) => onChangeImg(e.target.files[0])}

                            />
                        </label>

                    </div>
                    <label htmlFor='nameCategory'>Add Name Category* <input value={categoryName} onChange={onChangeName} id='nameCategory' type='text' /></label>
                    <button onClick={onSubmit}>Submit</button>

                </div>
                <div className={styles.col1}>
                    {imgCategory === null ? null : <button onClick={clearInputImg}>Remove Image</button>}
                    <img className={styles.UploadedImgCategory} src={imgCategory}></img>
                </div>
            </div>

            <div className={styles.listCategories}>

                {isLoading ? <h1>Loading</h1> : Categories.length >= 1 ? Categories?.map((item, index) =>
                    <CardCategoryAdmin key={item._id} color={colors[index]} dataCategory={item} deleteCategory={deleteCategory} />) : <h1>No Categories</h1>}

            </div>
            <ToastContainer />
        </div>
    )
}


