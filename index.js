document.querySelector('.search-btn').addEventListener('click', (event) => {
    event.preventDefault();

    
 })
    
    /* Capturando o value do input e atribuindo a variável */
    let input = document.querySelector('#searchInput').value;

    if (input !== '') {

        claearInfo();
        /* == > Verifica a tipagem */
        showWarning('');
        document.querySelector('.loader').style.display = 'block';

        /* fetch - Ira ler algo */
        let results = await fetch(`https://www.omdbapi.com/?s=${searchString}&type=movie&apikey=6a616cc4`);

        let json = await results.json();
        if (json.cod === 200) {
            showInfo({

                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });