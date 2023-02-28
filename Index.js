const ApiKey = "7f848c205d73477b9e890831220107";
let LSearch = document.getElementById("LSearch");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");

//function weatherSearch
function weatherSearch(){
    let Thelocation = LSearch.value;
    let url = `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${Thelocation}`;

    // if input is empty
    if(Thelocation.length <= 0){
        result.innerHTML = `<h3>Enter location</h3>`;
    }

    //if input is not empty
    else{
        fetch(url).then((resp) => resp.json()).then((data)=>{

            let temp = data.current.temp_c;
            let condition = data.current.condition;
            let Dlocation = data.location;
            // console.log(Dlocation)
            
            //if location is in database
            if(Dlocation != null){
                result.innerHTML = `
                <div class="info">
                    <div class="main">
                        <img src=${condition.icon} class="icon">
                        <h3>${condition.text}</h3>
                    </div>
                    <div class="windspeed">
                        <img src="windy.svg" class="wind">
                        <p>Wind Speed: ${data.current.wind_kph} km/hr</p>
                    </div>
                    <div class="humidity">
                        <img src="drop.svg" class="humidity">
                        <p>Humidity: ${data.current.humidity}</p>
                    </div>
                    <div class="temp">
                        <img src="thermometer.svg" class="thermometer">
                        <p>Temperature: ${temp}</p>
                    </div>
                </div>
            `;
            }
            // if location is not in database 
            else{
                result.innerHTML = `<h3>There is no such place</h3>`;
            }

        })
    }
}

searchBtn.addEventListener("click", weatherSearch);
window.addEventListener("load", weatherSearch);