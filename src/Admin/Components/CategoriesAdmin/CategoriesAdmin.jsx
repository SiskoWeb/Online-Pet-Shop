
import styles from './CategoriesAdmin.module.scss'
import addimg from '../../../assets/addimg.png'

import { GetCategoryHook } from '../../HookAdmin/Category/GetCategoryHook'
import { ToastContainer } from 'react-toastify';
import CardCategoryAdmin from '../../../utilis/CardCategoryAdmin/CardCategoryAdmin'
import { AddCategoryHook } from '../../HookAdmin/Category/AddCategoryHook';
import { RemoveCategoryHook } from '../../HookAdmin/Category/RemoveCategoryHook';
import { UpdateCategoryHook } from '../../HookAdmin/Category/UpdateCategoryHook';

export default function CategoriesAdmin() {



    const [isLoading, Categories] = GetCategoryHook()
    const [categoryName, imgCategory, onChangeName, onChangeImg, onSubmit, clearInputImg,] = AddCategoryHook()
    const [deleteCategory] = RemoveCategoryHook()
    const [updateCategoryPart1, updateCategoryPart2, fileUpdate, nameUpdate, setNameUpdate, saveFileUpdate, toggleUpdate, setToggleUpdate] = UpdateCategoryHook()


    // const Categories = useSelector((state) => state.categories.categoriesList)

    const colors = ['#cfe4ff', '#deeeed', '#fff5b9', '#ececec']




    return (
        <div className={styles.categoriesAdmin}>

            {isLoading ? <p className={styles.loading}>Loading...</p> : null}
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
                                accept="image/png, image/gif, image/jpeg"
                            />
                        </label>

                    </div>
                    <label htmlFor='nameCategory'>Add Name Category* <input value={categoryName} onChange={onChangeName} id='nameCategory' type='text' /></label>
                    <button onClick={onSubmit}>Submit</button>

                    {isLoading ? <p>Loading...</p> : null}
                </div>
                <div className={styles.col1}>
                    {imgCategory === null ? null : <button onClick={clearInputImg}>Remove Image</button>}
                    <img className={styles.UploadedImgCategory} src={imgCategory}></img>
                </div>
            </div>

            <div className={styles.listCategories}>

                {isLoading ? <h1>Loading</h1> : Categories.length >= 1 ? Categories?.map((item, index) =>
                    <CardCategoryAdmin key={item._id} updateCategoryPart1={updateCategoryPart1} color={colors[index]} dataCategory={item} deleteCategory={deleteCategory} />)
                    : <h1>No Categories</h1>}</div>
            {toggleUpdate ? <div className={styles.wrapperPopUpdate}>
                <div className={styles.popUpdate}>
                    <i onClick={() => setToggleUpdate(false)} className="fa-solid fa-xmark"></i>
                    <label htmlFor='imageUpdateCategory'>
                        click here to upload Image
                        <img src={fileUpdate}></img>
                        <input
                            type="file"
                            id='imageUpdateCategory'
                            onChange={(e) => saveFileUpdate(e.target.files[0])}
                            accept="image/png, image/gif, image/jpeg"
                        />
                    </label>


                    <input value={nameUpdate} type="text" onChange={(e) => setNameUpdate(e.target.value)} />
                    <button className={styles.UpdateBtn} onClick={updateCategoryPart2}>Update</button>
                </div>
            </div> : null}

            <ToastContainer />
        </div>
    )
}


