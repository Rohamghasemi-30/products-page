let form = document.querySelector(".form");
let prouducts = [];
let hero = document.querySelector(".hero")

form.addEventListener("submit", (e)=>{
let prouductsForm = {
    Memory:e.target.Memory.value,
    Model:e.target.Model.value,
    Rom:e.target.Rom.value,
    Price:e.target.Price.value,
}
prouducts.push(form);
prouducts.forEach((item, index)=>{
    let prouductsBox = document.createElement('div');
    prouductsBox.style.border = '2px solid  blue';
    prouductsBox.style.borderRadius = '25px';
    prouductsBox.style.backgroundColor = 'red';
    prouductsBox.style.padding = '25px';
    prouductsBox.style.display = 'flex';
    prouductsBox.style.flexDirection = 'column';
    prouductsBox.innerHTML = 
    `<p>Memory:   ${item.Memory}</p>
    <p>Model:   ${item.Model}</p>
    <p>Rom:   ${item.Rom}</p>
    <p>Price:   ${item.Price}</p>
    `
    hero.appendChild(prouductsBox)
    });
    e.target.Memory.value = "";
    e.target.Model.value = "";
    e.target.Rom.value = "";
    e.target.Price.value = "";
    e.preventDefault();
});