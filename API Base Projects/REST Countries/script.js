const SearchInput = document.querySelector('.search-input');
const searcbtn = document.querySelector('.search-btn');
const ContryFlage = document.querySelector('.flag-img');
const CountryName = document.querySelector('.country-names h1');
const OfficalName = document.querySelector('.official-name ');
const capital = document.getElementById('capital');
const continent = document.getElementById('Continent');
const population = document.getElementById('Population');
const area = document.getElementById('Area');
const currecncy = document.getElementById('Currency');
const CurrCode = document.querySelector('.currency-code');
const callingCode = document.getElementById('Calling-code');
const domain = document.getElementById('domain');
const DefaultPage = document.querySelector('.intro-view');
const Maincard = document.querySelector('.country-card');
const ErrorPage = document.getElementById('error-view');
const Loader = document.querySelector('.loader'); 

DefaultPage.style.display = 'flex';
Maincard.style.display = 'none';
Loader.style.display = 'none'; 

async function CountryDetails(){
    Loader.style.display = 'block';
    DefaultPage.style.display = 'none';
    Maincard.style.display = 'none';
    ErrorPage.style.display = 'none';

    try{
        const Respose = await fetch('https://restcountries.com/v3.1/name/' + SearchInput.value);
        
        if(!Respose.ok) throw new Error("Not Found");

        const Data = await Respose.json();

        Loader.style.display = 'none';
        Maincard.style.display = 'block';

        CountryName.innerHTML = Data[0].name.common;
        OfficalName.innerHTML = Data[0].name.official;
        capital.innerHTML = Data[0].capital[0];
        continent.innerHTML = Data[0].continents[0];
        population.innerHTML = Data[0].population.toLocaleString('en-US');
        area.innerHTML = Data[0].area.toLocaleString('en-US') + ' km²';
        
        const currencyName = Object.values(Data[0].currencies)[0].name;
        const currencyCode = Object.keys(Data[0].currencies)[0];
        currecncy.innerHTML = currencyName;
        CurrCode.innerHTML = currencyCode;
    
        const callingcode = +Data[0].idd.root + Data[0].idd.suffixes[0];
        callingCode.innerHTML = callingcode;
        domain.innerHTML = Data[0].tld[0];
        ContryFlage.src = Data[0].flags.png;
    
        const LanguageNames = Object.values(Data[0].languages);
        document.querySelector('.chip-container').innerHTML = '';
        LanguageNames.forEach(lang =>{
            const Lan = document.createElement('span');
            Lan.classList.add('chip');
            Lan.innerHTML = `<span class="chip">${lang} </span>`;
            document.querySelector('.chip-container').appendChild(Lan);
        });
    
        const BorderCountries = Data[0].borders;
        document.querySelector('.chip-container-border').innerHTML = '';

        if(BorderCountries) {
            BorderCountries.forEach(border =>{
                const Border = document.createElement('span');
                Border.classList.add('chip-border');
                Border.innerHTML = `<span class="chip-border">${border} </span>`;
                document.querySelector('.chip-container-border').appendChild(Border);
            });
        } else {
            document.querySelector('.chip-container-border').innerHTML = '<h3 id="noborder">This country has no border countries</h3>';
        }

    }catch(err){
        Loader.style.display = 'none';
        Maincard.style.display = 'none';
        ErrorPage.style.display = 'block';
        console.log("Error:", err);
    }
}

searcbtn.addEventListener('click', CountryDetails);

//Weather Coding
const temp = document.getElementById('temp');
const condition = document.getElementById('weather-desc');
const humanity = document.getElementById('humidity');
const WindSpeed = document.getElementById('wind');

async function getweater(){
    const query = SearchInput.value.trim();
    if(!query) return;

    try{
        const Respose  = await  fetch(`https://api.weatherapi.com/v1/current.json?key=ef866381bb3240ccaeb182938252512&q=${query}`);
        const Data = await Respose.json();

        temp.innerText = `${Math.round(Data.current.temp_c)}°C`;
        condition.innerText = `${Data.current.condition.text}`;
        humanity.innerText = `${Data.current.humidity} %`;
        WindSpeed.innerText = `${Data.current.wind_kph} km/h`;
    }catch{
        console.log('Weather Error');
    }
}

searcbtn.addEventListener('click', getweater);