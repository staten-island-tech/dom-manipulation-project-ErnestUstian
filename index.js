const  DOMSelectors  = {
    button: document.getElementById("btn"),
    GameName: document.getElementById("GameName"),
    GameGenre: document.getElementById("GameGenre"),
    url: document.getElementById("url"),
    form: document.getElementById("form"),
    display: document.getElementById("display")
};
DOMSelectors.form.addEventListener("submit", function(){
    let input = DOMSelectors.input.value
    DOMSelectors.form.insertAdjacentElement("afterend", `${input}`)
}),

<div class="display card">

</div> 