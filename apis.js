var detailsparent = document.getElementById("detailsparent");



export class game {

    constructor(id) {
        this.id = id
    }

    async gameDetails() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd70c908200msh8b98fcbc8ae6919p12144cjsn487bcd96cfe5',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const resp = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options);
        let gamedetail = await resp.json();

        return gamedetail;

    }


    async displaydetails() {
        let gamearray = await this.gameDetails()
        let container = "";

        container = `
<div class="row g-1 container mx-auto py-3 mt-5" >
    <div class="col-lg-5">
<div>
        <h3 >Details Game</h3>
        <div><img src=${gamearray.thumbnail} alt="img"></div></div>
    </div>
    

    <div class="col-lg-7">
       <div>
        <p class="h3"><span class="fw-bolder h3">Title : </span>  ${gamearray.title}</p>
        <p><span class="fw-bolder">Category :</span> <span class="bg-warning text-black rounded-2 px-3 mt-0"> ${gamearray.genre}</span></p>
        <p><span class="fw-bolder">Platform :</span> <span class="bg-warning text-black rounded-2 px-3 mt-0"> ${gamearray.platform}</span></p>
        <p><span class="fw-bolder">Status :</span> </span> <span class="bg-warning text-black rounded-2 px-3 mt-0"> ${gamearray.status}</span></p>
        <p>${gamearray.description}</p>
       <a target="blank" href=${gamearray.game_url}> <button class="btn btn-warning fw-bolder">Show Game</button></a>
       </div>
    </div>
    
</div>
`

        detailsparent.innerHTML = container




    }




}




