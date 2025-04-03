let countriesArrayList = [];
let customerList=[];

function loadCountries() {
    let countriesList = document.getElementById("countriesList");

    let body = "";

    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(dataList => {
            countriesArrayList = dataList;
            loadModalData();
            dataList.forEach((element, index) => {

                body += `
                               <div class="col"  data-aos="zoom-in">
                        <div class="card shadow-sm">
                            <img src="${element.flags.png}" alt="" style="height: 300px;">
                            <div class="card-body">
                            <h4>${element.name.common}</h4>
                                <p class="card-text">${element.name.official}</p>
                                <h1>${element.name.common}</h1>
                                <br>
                                <h4>Capital City = ${element.capital}</h4>
                                <h4>Region = ${element.region}</h4>
                                <h4>Time-Zones = ${element.timezones}</h4>
                                <h4>Population = ${element.population}</h4>
                               
                            </div>
                        </div>
                    </div>
                        <!-- Modal -->
            `
            });

            countriesList.innerHTML = body;
        })
}
async function loadModalData(index) {
    let modalBody = document.getElementById("modal-body");
    console.log(countriesArrayList[index]);
    modalBody.innerHTML = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="${countriesArrayList[index].flags.png}" alt="">
    <h5 class="card-title">${countriesArrayList[index].name.official}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    `
}
function clickbutton() {
    let body = ``;
    let searchTxt = document.getElementById("default-search").value;
    console.log(searchTxt);
    fetch(`https://restcountries.com/v3.1/name/${searchTxt}`)
        .then(res => res.json())
        .then(data => {
            countriesArrayList = data;
            data.forEach((element, index) => {
                body += `
                    <button type="button" class="btn btn-outline-warning" style="width: 200px; height: 50px;" id="backButton" onclick="loadCountries()">Show all countries</button>
                    <div class="" data-aos="fade-left">
                        <div class="card shadow-sm" style="width: 600px;">
                            <img src="${element.flags.png}" alt="" style="height: 300px; width: 100%; border-radius: 10px;">
                            <div class="card-body text-center">
                                <h1>${element.name.common}</h1>
                                <p class="card-text">${element.name.official}</p>
                                <br>
                                <h4>Capital City = ${element.capital}</h4>
                                <h4>Region = ${element.region}</h4>
                                <h4>Time-Zones = ${element.timezones}</h4>
                                <h4>Population = ${element.population}</h4>
                            </div>
                        </div>
                    </div>
                `;
            });

            countriesList.innerHTML = body;
        });
}

loadCountries();