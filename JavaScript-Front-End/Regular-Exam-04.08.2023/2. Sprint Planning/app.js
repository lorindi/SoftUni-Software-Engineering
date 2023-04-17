window.addEventListener("load", solve);

function solve() {
  let inputTitle = document.getElementById("title");
  let textarea = document.getElementById("description");
  let label = document.getElementById("label");
  let inputPoints = document.getElementById("points");
  let inputAssignee = document.getElementById("assignee");

  let buttonCreateTask = document.getElementById("create-task-btn");
  let buttonDeleteTaskBtn = document.getElementById("delete-task-btn");

  let section = document.getElementById("tasks-section");
  let totalPoints = document.getElementById("total-sprint-points");
  let inputTaskId = document.getElementById("task-id");

  buttonCreateTask.addEventListener("click", onButtonCreateTask);

  let result = 0;
  let num = 0;

  function cleaningInputFields(){
    inputTitle.value = "";
    textarea.value = "";
    label.value = "";
    inputPoints.value = "";
    inputAssignee.value = "";
  }

  function onButtonCreateTask(e) {
    e.preventDefault();
    if (
      inputTitle.value == "" ||
      textarea.value == "" ||
      label.value == "" ||
      inputPoints.value == "" ||
      inputAssignee.value == ""
    ) {
      return;
    }

    let icon = "";
    let className = "";
    if (label.value == "Feature") {
      icon = "&#8865";
      className = "feature";
    } else if (label.value == "Low Priority Bug") {
      icon = "&#9737";
      className = "low-priority";
    } else if (label.value == "High Priority Bug") {
      icon = "&#9888";
      className = "high-priority";
    }

    num += 1;

    let article = document.createElement("article");
    article.id = `task-${num}`;
    article.setAttribute("class", "task-card");

    let divFeatureClassName = document.createElement("div");
    divFeatureClassName.setAttribute("class", `task-card-label ${className}`);
    divFeatureClassName.innerHTML = `${label.value} ${icon}`;

    let titleInputTitle = document.createElement("h3");
    titleInputTitle.setAttribute("class", "task-card-title");
    titleInputTitle.textContent = inputTitle.value;

    let paragraphTextarea = document.createElement("p");
    paragraphTextarea.setAttribute("class", "task-card-description");
    paragraphTextarea.textContent = textarea.value;

    let divTaskCardPoints = document.createElement("div");
    divTaskCardPoints.setAttribute("class", "task-card-points");
    result += Number(inputPoints.value);
    divTaskCardPoints.textContent = `Estimated at ${inputPoints.value} pts`;

    let divTaskCardAssignee = document.createElement("div");
    divTaskCardAssignee.setAttribute("class", "task-card-assignee");
    divTaskCardAssignee.textContent = `Assigned to: ${inputAssignee.value}`;

    let divTaskCardActions = document.createElement("div");
    divTaskCardActions.setAttribute("class", "task-card-actions");

    let buttonTaskCardActions = document.createElement("button");
    buttonTaskCardActions.textContent = "Delete";

    divTaskCardActions.appendChild(buttonTaskCardActions);

    article.appendChild(divFeatureClassName);
    article.appendChild(titleInputTitle);
    article.appendChild(paragraphTextarea);
    article.appendChild(divTaskCardPoints);
    article.appendChild(divTaskCardAssignee);
    article.appendChild(divTaskCardActions);

    section.appendChild(article);

    totalPoints.textContent = `Total Points ${result}pts`;

    let copyInputTitle = inputTitle.value;
    let copyTextarea = textarea.value;
    let copyLabel = label.value;
    let copyInputPoints = inputPoints.value;
    let copyInputAssignee = inputAssignee.value;

    cleaningInputFields()

    buttonTaskCardActions.addEventListener("click", onButtonTaskCardActions);

    function onButtonTaskCardActions() {
      result -= Number(copyInputPoints);

      inputTitle.value = copyInputTitle;
      textarea.value = copyTextarea;
      label.value = copyLabel;
      inputPoints.value = copyInputPoints;
      inputAssignee.value = copyInputAssignee;

      inputTaskId.value = article.id;

      inputTitle.disabled = true;
      textarea.disabled = true;
      label.disabled = true;
      inputPoints.disabled = true;
      inputAssignee.disabled = true;
      
      buttonCreateTask.disabled = true;
      buttonDeleteTaskBtn.disabled = false;
    }
  }

  buttonDeleteTaskBtn.addEventListener("click", onButtonDeleteTaskBtn);
  function onButtonDeleteTaskBtn(e) {
    let articles = Array.from(document.querySelectorAll("article"));
    let idTask = inputTaskId.value;

    for (const el of articles) {
      if (el.id == idTask) {
        el.remove();
      }
    }

    totalPoints.textContent = `Total Points ${result}pts`;

    cleaningInputFields()

    inputTitle.disabled = false;
    textarea.disabled = false;
    label.disabled = false;
    inputPoints.disabled = false;
    inputAssignee.disabled = false;

    buttonCreateTask.disabled = false;
    buttonDeleteTaskBtn.disabled = true;
  }
}
