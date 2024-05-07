let teamList = [
    {nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg"},
    {nome: "Angela Caroll", ruolo: "Chief Editor", foto:"angela-caroll-chief-editor.jpg"},
    {nome: "Walter Gordon", ruolo: "Office Manager", foto:"walter-gordon-office-manager.jpg"},
    {nome: "Angela Lopez", ruolo: "Social media Manager", foto:"angela-lopez-social-media-manager.jpg"},
    {nome: "Scott Estrada", ruolo: "Developer", foto:"scott-estrada-developer.jpg"},
    {nome: "Barbara Ramos", ruolo: "Graphic Designer", foto:"/barbara-ramos-graphic-designer.jpg"},
]

const cardsContainer = document.getElementById('cards-container');

for (let i = 0; i< teamList.length; i++) {
    let element = teamList[i];
    cardsContainer.innerHTML += `
    <div class="col-4 mb-5">
        <article class="my_card">
            <img src="./img/${element.foto}" alt="${element.nome}">
            <div class="card-description p-2">
                <h3 class='card-nome mb-1'>
                    ${element.nome}
                </h3>
                <p class='card-foto mb-3'>
                    ${element.ruolo}
                </p>
            </div>
        </article>
    </div>`;
}