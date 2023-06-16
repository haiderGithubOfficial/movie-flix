import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movies = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6017583aa0mshc133c9930051243p159099jsn594771a36ff7',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const mainData = data.titles;


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                        {
                            mainData.map((movie) => {
                                return <MovieCard key={movie.id} movie={movie} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movies