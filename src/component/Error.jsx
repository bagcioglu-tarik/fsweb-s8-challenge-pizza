import styles from './Error.module.css'

export default function Error({formError}) {
    return (
        <section className={styles.errorContainer}>
            <img src='./images/iteration-2-images/pictures/food-1.png'></img>
            <h1>Hata! Lütfen tekrar deneyiniz.</h1>
            <p>({formError})</p>
        </section>
    )
}