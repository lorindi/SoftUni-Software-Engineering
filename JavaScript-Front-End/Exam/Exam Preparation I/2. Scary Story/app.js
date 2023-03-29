window.addEventListener("load", solve);

function solve() {
  let inputFirstName = document.getElementById("first-name");
  let inputLasName = document.getElementById("last-name");
  let inputAge = document.getElementById("age");
  let inputStoryTitle = document.getElementById("story-title");
  let optionGenre = document.getElementById("genre");
  let textareaStory = document.getElementById("story");
  let inputButtonPublish = document.getElementById("form-btn");
  let ulPreview = document.getElementById("preview-list");
  let divMain = document.getElementById("main");
  let body = document.querySelector(".body");

  inputButtonPublish.addEventListener("click", onPublish);

  function onPublish(e) {
    e.preventDefault();
    if (
      inputFirstName.value == "" ||
      inputLasName.value == "" ||
      inputAge.value == "" ||
      inputStoryTitle.value == "" ||
      textareaStory.value == ""
    ) {
      return;
    }

    let newLiInUlWithIdPreviewList = document.createElement("li");
    newLiInUlWithIdPreviewList.setAttribute("class", "story-info");

    let newArticleInLi = document.createElement("article");

    let newHeaderName = document.createElement("h4");
    newHeaderName.textContent = `Name: ${inputFirstName.value} ${inputLasName.value}`;

    let newAge = document.createElement("p");
    newAge.textContent = `Age: ${inputAge.value}`;

    let newTitle = document.createElement("p");
    newTitle.textContent = `Title: ${inputStoryTitle.value}`;

    let newGenre = document.createElement("p");
    newGenre.textContent = `Genre: ${optionGenre.value}`;

    let newText = document.createElement("p");
    newText.textContent = `${textareaStory.value}`;

    let newButtonSaveStory = document.createElement("button");
    newButtonSaveStory.setAttribute("class", "save-btn");
    newButtonSaveStory.textContent = "Save Story";

    let newButtonEditStory = document.createElement("button");
    newButtonEditStory.setAttribute("class", "edit-btn");
    newButtonEditStory.textContent = "Edit Story";

    let newButtonDeleteStory = document.createElement("button");
    newButtonDeleteStory.setAttribute("class", "delete-btn");
    newButtonDeleteStory.textContent = "Delete Story";

    newArticleInLi.appendChild(newHeaderName);
    newArticleInLi.appendChild(newAge);
    newArticleInLi.appendChild(newTitle);
    newArticleInLi.appendChild(newGenre);
    newArticleInLi.appendChild(newText);

    newLiInUlWithIdPreviewList.appendChild(newArticleInLi);
    newLiInUlWithIdPreviewList.appendChild(newButtonSaveStory);
    newLiInUlWithIdPreviewList.appendChild(newButtonEditStory);
    newLiInUlWithIdPreviewList.appendChild(newButtonDeleteStory);

    ulPreview.appendChild(newLiInUlWithIdPreviewList);

    let editInputFirstName = inputFirstName.value;
    let editInputLasName = inputLasName.value;
    let editInputAge = inputAge.value;
    let editInputStoryTitle = inputStoryTitle.value;
    let editTextareaStory = textareaStory.value;

    inputFirstName.value = "";
    inputLasName.value = "";
    inputAge.value = "";
    inputStoryTitle.value = "";
    textareaStory.value = "";

    inputButtonPublish.disabled = true;

    newButtonSaveStory.addEventListener("click", eventStory);

    function eventStory() {
      divMain.remove();
      let headerSaveStory = document.createElement("h1");
      headerSaveStory.textContent = "Your scary story is saved!";

      let newDivStory = document.createElement("div");
      newDivStory.setAttribute("id", "main");

      body.appendChild(newDivStory);

      newDivStory.appendChild(headerSaveStory);
    }

    newButtonEditStory.addEventListener("click", eventEditStory);
    function eventEditStory() {
      inputFirstName.value = editInputFirstName ;
      inputLasName.value = editInputLasName;
      inputAge.value = editInputAge;
      inputStoryTitle.value = editInputStoryTitle;
      textareaStory.value = editTextareaStory;

      newLiInUlWithIdPreviewList.remove()
      
      inputButtonPublish.disabled = false;
    }

    newButtonDeleteStory.addEventListener('click', eventDeleteStory)

    function eventDeleteStory(){
        newLiInUlWithIdPreviewList.remove()
        inputButtonPublish.disabled = false;


    }


  }
}
