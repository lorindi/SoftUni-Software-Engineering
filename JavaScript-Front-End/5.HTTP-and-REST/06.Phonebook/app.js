function attachEvents() {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const container = document.getElementById("phonebook");
    document.getElementById("btnLoad").addEventListener("click", onLoadInfo);
    document.getElementById("btnCreate").addEventListener("click", onCreate);
  
    async function onCreate() {
      const person = document.getElementById("person");
      const phone = document.getElementById("phone");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          person: person.value,
          phone: phone.value,
        }),
      });
      document.getElementById("btnLoad").click();
      person.value = "";
      phone.value = "";
    }
  
    async function onLoadInfo() {
      container.innerHTML = "";
      const response = await fetch(url);
      const data = await response.json();
      for (const phoneNumber of Object.values(data)) {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", onDelete);
  
        li.textContent = `${phoneNumber.person}: ${phoneNumber.phone}`;
        li.setAttribute("id", phoneNumber._id);
  
        li.appendChild(deleteBtn);
        container.appendChild(li);
      }
    }
    async function onDelete(e) {
      const id = e.target.parentElement.id;
      e.target.parentElement.remove();
  
      const response = await fetch(`${url}/${id}`, {
        method: "delete",
      });
    }
  }
  
attachEvents();