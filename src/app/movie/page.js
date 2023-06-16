import MovieCard from "../components/MovieCard";

const Movie = async () => {

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
    console.log(mainData);

    return (
        <>
            <h1>Movie page</h1>
            {
                mainData.map((movie) => {
                    return <MovieCard key={movie.id} {...movie} />
                })
            }
        </>
    )
}

export default Movie