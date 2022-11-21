const DOMSelectors = {
  button: document.getElementById("btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  output();

});
function output() {
  DOMSelectors.display.insertAdjacentHTML(
    "afterend",
    `<div class="display-card">
    <img class="display-img" src="${DOMSelectors.url.value}" /><img>
    <h2 class="display-artist">${DOMSelectors.artist.value}</h2>
    <h3 class="display-album">${DOMSelectors.title.value}</h3>
     <button class="remove btn" id="btn" >Remove Album</button>
</div>`

  );
  card()
}
function card(){
    let remove = document.querySelectorAll(".remove");
    remove.forEach((el) => {
        el.addEventListener("click", function (el) {
            this.parentElement.remove();
        });
    });
}