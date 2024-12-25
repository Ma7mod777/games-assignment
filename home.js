var gamesContainer = document.getElementById("gamesContainer");



export class Home {

    constructor(x) {
        this.links = x


    }

    async getData() {

        const options = {

            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd70c908200msh8b98fcbc8ae6919p12144cjsn487bcd96cfe5',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.links}`, options);
        let result = await response.json();
        return result;

    }


    async displayData() {

        let allData = await this.getData()
        let cartona = "";
        allData.map((ele) => {

            cartona += `
    <div class="col-md-4 col-lg-3 col-sm-6 position-relative parentofcol">
    <div id="${ele.id}" class="layer"></div>
<div class="card-parent">
    <div class="GameCard border border-1 border-white p-3 rounded-2">

        <div class="gameimg"><img class="rounded-2 w-100" src=${ele.thumbnail} alt="img"></div>
        <div class="gamedesc position-relative">
            <h5 class="my-3 fs-6">${ele.title} </h5>
            <p class="mt-4">${ele.short_description.split(" ").slice(0, 7).join(" ")}</p>
            <p class=" sales bg-warning px-3 py-1 rounded-2 text-dark fw-bold">free</p>
        </div>
        </div>
        <div class="gamefooter d-flex justify-content-around rounded-2 align-items-center py-2 ">
            <p class="mb-0 setclassify">${ele.genre}</p>
            <p class="mb-0 setclassify">${ele.platform}</p>
        </div>
</div>


</div>
    `
            gamesContainer.innerHTML = cartona;
        })

    }



}




