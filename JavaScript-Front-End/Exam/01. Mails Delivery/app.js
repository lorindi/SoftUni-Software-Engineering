function solve() {
  // -------------------input----------------------
  let recipientName = document.getElementById("recipientName");
  let title = document.getElementById("title");
  let message = document.getElementById("message");

  // -------------------button-events----------------------
  let addToTheListButton = document.getElementById("add");
  let resetButton = document.getElementById("reset");

  // -------------------ul-lists----------------------
  let ulList = document.getElementById("list");
  let ulSendList = document.querySelector(".sent-list");
  let ulDeleteList = document.querySelector(".delete-list");

  resetButton.addEventListener("click", () => {
    recipientName.value = "";
    title.value = "";
    message.value = "";
  });

  addToTheListButton.addEventListener("click", onAddToTheList);

  function onAddToTheList(e) {
    e.preventDefault();
    if (recipientName.value == "" || title.value == "" || message.value == "") {
      return;
    }

    let liListOfMails = document.createElement("li");

    let titleForWork = document.createElement("h4");
    titleForWork.textContent = `Title: ${title.value}`;

    let recipientNameEmail = document.createElement("h4");
    recipientNameEmail.textContent = `Recipient Name: ${recipientName.value}`;

    let spanText = document.createElement("span");
    spanText.textContent = message.value;

    let divListAction = document.createElement("div");
    divListAction.setAttribute("id", "list-action");

    let buttonSend = document.createElement("button");
    buttonSend.setAttribute("type", "submit");
    buttonSend.setAttribute("id", "send");
    buttonSend.textContent = "Send";

    let buttonListAction = document.createElement("button");
    buttonListAction.setAttribute("type", "submit");
    buttonListAction.setAttribute("id", "delete");
    buttonListAction.textContent = "Delete";

    liListOfMails.appendChild(titleForWork);
    liListOfMails.appendChild(recipientNameEmail);
    liListOfMails.appendChild(spanText);

    divListAction.appendChild(buttonSend);
    divListAction.appendChild(buttonListAction);

    liListOfMails.appendChild(divListAction);

    ulList.appendChild(liListOfMails);

    let copyRecipientName = recipientName.value;
    let copyTitle = title.value;
    let copyMessage = message.value;

    recipientName.value = "";
    title.value = "";
    message.value = "";

    buttonSend.addEventListener("click", onButtonSend);
    function onButtonSend() {
      liListOfMails.remove();

      let liSendList = document.createElement("li");

      let spanToSendList = document.createElement("span");
      spanToSendList.textContent = `To: ${copyRecipientName}`;

      let spanTitleSendList = document.createElement("span");
      spanTitleSendList.textContent = `Title: ${copyTitle}`;

      let divSendListBtn = document.createElement("div");
      divSendListBtn.setAttribute("class", "btn");

      let buttonDelete = document.createElement("button");
      buttonDelete.setAttribute("type", "submit");
      buttonDelete.setAttribute("class", "delete");
      buttonDelete.textContent = "Delete";

      liSendList.appendChild(spanToSendList);
      liSendList.appendChild(spanTitleSendList);

      divSendListBtn.appendChild(buttonDelete);

      liSendList.appendChild(divSendListBtn);

      ulSendList.appendChild(liSendList);

      divSendListBtn.addEventListener("click", onDivSendListBtn);
      function onDivSendListBtn() {
        liSendList.remove();

        let liSendListDeleteList = document.createElement("li");

        let spanSendListDeleteListTo = document.createElement("span");
        spanSendListDeleteListTo.textContent = `To: ${copyRecipientName}`;

        let spanSendListDeleteListTitle = document.createElement("span");
        spanSendListDeleteListTitle.textContent = `Title: ${copyTitle}`;

        liSendListDeleteList.appendChild(spanSendListDeleteListTo);
        liSendListDeleteList.appendChild(spanSendListDeleteListTitle);
        ulDeleteList.appendChild(liSendListDeleteList);
      }
    }

    buttonListAction.addEventListener("click", onButtonListAction);
    function onButtonListAction() {
      liListOfMails.remove();

      let liDeleteList = document.createElement("li");

      let spanDeleteListTo = document.createElement("span");
      spanDeleteListTo.textContent = `To: ${copyRecipientName}`;

      let spanDeleteListTitle = document.createElement("span");
      spanDeleteListTitle.textContent = `Title: ${copyTitle}`;

      liDeleteList.appendChild(spanDeleteListTo);
      liDeleteList.appendChild(spanDeleteListTitle);
      ulDeleteList.appendChild(liDeleteList);
    }
  }
}
solve();
