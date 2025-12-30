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
const query = SearchInput.value.trim();

DefaultPage.style.display = 'flex';
Maincard.style.display = 'none';

async function CountryDetails(){
    try{
        const Respose = await fetch('https://restcountries.com/v3.1/name/' + SearchInput.value);
        const Data = await Respose.json();

        DefaultPage.style.display = 'none';
        Maincard.style.display = 'block';

        DefaultPage.computedStyleMap.display = 'none';
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
    
        
        const BorderCountries = Data[0].borders
        const bordercontainer = document.querySelector('.chip-container-border').innerHTML = '';

        BorderCountries.forEach(border =>{
            const Border = document.createElement('span');
            Border.classList.add('chip-border');
            Border.innerHTML = `<span class="chip-border">${border} </span>`;
            document.querySelector('.chip-container-border').appendChild(Border);
        })
    }catch{
        Maincard.style.display = 'none';
        ErrorPage.style.display = 'block';
        console.log("Error");
    }
}

    searcbtn.addEventListener('click',CountryDetails)


//Weather Coding

const temp = document.getElementById('temp');
const condition = document.getElementById('weather-desc');
const humanity = document.getElementById('humidity');
const WindSpeed = document.getElementById('wind');

async function getweater(){

    const query = SearchInput.value.trim();
    try{
        const Respose  = await  fetch(`https://api.weatherapi.com/v1/current.json?key=ef866381bb3240ccaeb182938252512&q=${query}`);
        if(!Respose.ok){`HTTP Error: ${Respose.status}`}

        const Data = await Respose.json();
        console.log(query);
        const Temperature = Data.current.temp_c;
        const TEMP = Math.round(Temperature);
        temp.innerText = `${TEMP}`+ '°C';

        condition.innerText = `${Data.current.condition.text}`;
        humanity.innerText = `${Data.current.humidity} %`
        WindSpeed.innerText = `${Data.current.wind_kph} km/h`;
    }catch{
        console.log('Error');
    }

}
searcbtn.addEventListener('click', getweater);