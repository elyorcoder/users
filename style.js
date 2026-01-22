const api = `https://randomuser.me/api/?results=20`;
const div = document.querySelector(".cards");
const load = document.querySelector(".load");
const more = document.querySelector(".more");
const axi = async (api) => {
  const request = await axios?.get(api);
  show(request?.data);
  return request?.data;
};
more.addEventListener("click", (e) => {
  e.preventDefault();
  axi(`https://randomuser.me/api/?results=20`);
});
try {
  axi(api);
} catch (error) {
  throw new Error(error);
}
function show(api) {
  load.innerHTML = "";
  more.classList.remove("none")
  const results = api.results;
  results.map(({ name, gender, picture, location, email }, index) => {
    div.innerHTML += `
      <div class="card">
        <img style="border-radius: 5px;" width="50" height="50" src=${picture.medium} alt="">
        <p>${name.first}</p>
        <p>${email}</p>
        <p>${gender}</p>
        <p>${location.country}</p>
        <p>${location.city}</p>
      </div>
    `;
  });
}
