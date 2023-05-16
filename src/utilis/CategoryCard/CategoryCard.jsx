import styles from './CategoryCard.module.scss'

export default function CategoryCard({ img, color }) {




    return (
        <div className={styles.card} style={{ background: color }}>



            <img src={img}></img>


        </div>


    )
}