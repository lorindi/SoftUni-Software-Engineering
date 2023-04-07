function app() {
  let divAllHitsContainer = document.querySelector(".all-hits-container");
  let divSavedContainer = document.querySelector(".saved-container");
  let divLikesP = document.querySelector(".likes p");
  let counter = 0;

  let genre = document.getElementById("genre");
  let name = document.getElementById("name");
  let author = document.getElementById("author");
  let date = document.getElementById("date");

  let button = document.getElementById("add-btn");
  button.addEventListener("click", onPublish);

  function onPublish(e) {
    e.preventDefault();
    if (
      genre.value == "" ||
      name.value == "" ||
      author.value == "" ||
      date.value == ""
    ) {
      return;
    }

    let divHitsInfo = document.createElement("div");
    divHitsInfo.setAttribute("class", "hits-info");

    let imgHitsInfo = document.createElement("img");
    imgHitsInfo.src = "./static/img/img.png";

    let headerFirst = document.createElement("h2");
    headerFirst.textContent = `Genre: ${genre.value}`;

    let headerSecond = document.createElement("h2");
    headerSecond.textContent = `Name: ${name.value}`;

    let headerThird = document.createElement("h2");
    headerThird.textContent = `Author: ${author.value}`;

    let headerFourth = document.createElement("h3");
    headerFourth.textContent = `Date: ${date.value}`;

    let btnSaveSong = document.createElement("button");
    btnSaveSong.textContent = "Save song";
    btnSaveSong.setAttribute("class", "save-btn");

    let btnLikeSong = document.createElement("button");
    btnLikeSong.textContent = "Like song";
    btnLikeSong.setAttribute("class", "like-btn");

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.setAttribute("class", "delete-btn");

    divHitsInfo.appendChild(imgHitsInfo);
    divHitsInfo.appendChild(headerFirst);
    divHitsInfo.appendChild(headerSecond);
    divHitsInfo.appendChild(headerThird);
    divHitsInfo.appendChild(headerFourth);
    divHitsInfo.appendChild(btnSaveSong);
    divHitsInfo.appendChild(btnLikeSong);
    divHitsInfo.appendChild(btnDelete);
    divAllHitsContainer.appendChild(divHitsInfo);

    let copyGenre = genre.value;
    let copyName = name.value;
    let copyAuthor = author.value;
    let copyDate = date.value;

    genre.value = "";
    name.value = "";
    author.value = "";
    date.value = "";

    btnDelete.addEventListener("click", onDelete);
    function onDelete(e) {
      divHitsInfo.remove();
      // console.log(arrayDivHitsInfo);
    }

    btnSaveSong.addEventListener("click", onSaveSong);

    function onSaveSong(e) {
      divHitsInfo.remove();

      let divHitsInfoSaveSong = document.createElement("div");
      divHitsInfoSaveSong.setAttribute("class", "hits-info");

      let imgHitsInfoSaveSong = document.createElement("img");
      imgHitsInfoSaveSong.src = "./static/img/img.png";

      let headerFirstSaveSong = document.createElement("h2");
      headerFirstSaveSong.textContent = `Genre: ${copyGenre}`;

      let headerSecondSaveSong = document.createElement("h2");
      headerSecondSaveSong.textContent = `Name: ${copyName}`;

      let headerThirdSaveSong = document.createElement("h2");
      headerThirdSaveSong.textContent = `Author: ${copyAuthor}`;

      let headerFourthSaveSong = document.createElement("h3");
      headerFourthSaveSong.textContent = `Date: ${copyDate}`;

      let btnDeleteSaveSong = document.createElement("button");
      btnDeleteSaveSong.textContent = "Delete";
      btnDeleteSaveSong.setAttribute("class", "delete-btn");

      divHitsInfoSaveSong.appendChild(imgHitsInfoSaveSong);
      divHitsInfoSaveSong.appendChild(headerFirstSaveSong);
      divHitsInfoSaveSong.appendChild(headerSecondSaveSong);
      divHitsInfoSaveSong.appendChild(headerThirdSaveSong);
      divHitsInfoSaveSong.appendChild(headerFourthSaveSong);
      divHitsInfoSaveSong.appendChild(btnDeleteSaveSong);

      divSavedContainer.appendChild(divHitsInfoSaveSong);

      //   let newData = e.currentTarget.parentElement;
      // e.currentTarget е елементът, който е добавен като слушател на събитието,
      // т.е. бутона btnSaveSong. Методът parentElement връща родителя на този елемент,
      // който в този случай е елементът divHitsInfo.
      // Така че newData се присвоява на елемента divHitsInfo, който трябва да се премахне от
      // родителя си divAllHitsContainer и да се добави към divDeletedContainer.
      // divSavedContainer.appendChild(newData);
      //   newData.removeChild(newData.querySelector(".save-btn"));
      //   newData.removeChild(newData.querySelector(".like-btn"));

      // divSavedContainer.appendChild(divHitsInfo);
      // divHitsInfo.removeChild(divHitsInfo.querySelector(".save-btn"));
      // divHitsInfo.removeChild(divHitsInfo.querySelector(".like-btn"));

      btnDeleteSaveSong.addEventListener("click", onDelete);

      function onDelete(e) {
        divHitsInfoSaveSong.remove();
      }
    }

    btnLikeSong.addEventListener("click", onLikeSong);

    function onLikeSong(e) {
      divLikesP.textContent = `Total Likes: ${(counter += 1)}`;
      btnLikeSong.disabled = true;
    }
  }
}
app();
