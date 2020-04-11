const nameInput = document.querySelector('#name');
myItem.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${nameInput.value}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            const listOfItems = data.objectIDs
            getItems(listOfItems.slice(0, 20))

        })

    nameInput.value = " ";

}

function getItems(data) {
    data.map((item, c) => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${item}`)

        .then((response) => {
                return response.json();
            })
            .then((data) => {



                document.getElementById("itemList").innerHTML += `
                
<div class="card">
    <div class="view overlay">
        <img class="card-img-top" src="${data.primaryImageSmall}" alt="Card image cap">
        <a>
            <div class="mask rgba-white-slight"></div>
        </a>
    </div>

    <div class="card-body">
        <div class="body-wrap">
            <a class="btn-floating btn-action mdb-color"><i class="fas fa-chevron-right pl-1"></i></a>
            <a href="${data.objectURL}">Open on Met Website</a>
            <h4 class="card-title">${data.title}</h4>
            
             <div id="moreInfoPanel_${c}">
                <button class="ShowMoreButton" data-dimension="${data.dimensions}" data-object-date="${data.objectDate}" data-classification="${data.classification}" data-id="${c}" onClick="togglebtn(${c})"> Show More </button> 
                
                <div class="slide-area">
                    <ul class="list-detail">
                        <li>"Dimension: ${data.dimensions}"</li>
                        <li>"Object Date: ${data.objectDate}"</li>
                        <li>"Classification: ${data.classification}"</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

                 `


            })
            .then((data) => {
                /*let buttons = document.getElementsByClassName("ShowMoreButton")
                for (var i = 0; i < buttons.length; i++) {
                    let element = buttons[i];
                    element.addEventListener("click", ShowMoreButton)

                }*/

            });

    })
}



function ShowMoreButton(e) {

    console.log(e.target.dataset)
}

function togglebtn(id) {
    document.getElementById("moreInfoPanel_" + id).classList.toggle('show');
}