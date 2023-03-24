async function attachEvents() {
  const url = 'http://localhost:3030/jsonstore/collections/students';
  const form = document.querySelector('#form');
  const tableBody = document.querySelector('tbody');
  const btn = document.getElementById('submit');
  btn.addEventListener('click', onLoad);

  const getResponse = await fetch(url);
  if (getResponse.ok) {
    const students = await getResponse.json();
    
    Object.values(students).forEach((student) => {
      addInnerHTML(student);
    });
  }

  async function onLoad(event) {
    event.preventDefault();

      const firstName = document.querySelector('#form input[name=firstName]').value;
      const lastName = document.querySelector('#form input[name=lastName]').value;
      const facultyNumber = document.querySelector('#form input[name=facultyNumber]').value;
      const grade = document.querySelector('#form input[name=grade]').value;

      if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
      }

      const newStudent = { firstName, lastName, facultyNumber, grade };

      await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent)
      }); 

      addInnerHTML(newStudent);

      document.querySelector('#form input[name=firstName]').value = '';
      document.querySelector('#form input[name=lastName]').value = '';
      document.querySelector('#form input[name=facultyNumber]').value = '';
      document.querySelector('#form input[name=grade]').value = '';
  }

  function addInnerHTML(student) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.facultyNumber}</td>
      <td>${student.grade}</td>
    </tr>`;
    tableBody.appendChild(row);
  }
}

attachEvents();