const insert = document.querySelector('#insert')
window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
    <div class = "color">
    <h1>${e.key}</h1>
    </div>

    `
})