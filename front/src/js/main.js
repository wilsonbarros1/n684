import axios from "axios";


if (window.location.pathname === '/alunos') {
  const baseUrlAlunos = 'http://3.23.103.69:3030/api/aluno';

  /// create
  const postAluno = async (alunoData) => {
    try {
      const response = await axios.post(baseUrlAlunos, alunoData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error post student:', error);
      throw error;
    }
  };

  /* for (const aluno of alunoData) {
    await postAluno(aluno);
  }  */

  //// read all
  const getAlunos = async () => {
    try {
      const response = await axios.get(baseUrlAlunos);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  };

  //// read one
  const getOneAlunos = async (id) => {
    try {
      const response = await axios.get(`${baseUrlAlunos}/${id}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  };

  //getOneAlunos()

  ///// update

  const alunoIdToUpdate = "656789c93b8fedbad25b23f1"; // Replace with the actual student ID
  const updatedAlunoData = {
    nome: "xxxxxxxxxxx",
    idade: "25",
    curso: "Updated Course",
    email: "updatedemail@example.com",
    password: "newpassword",
  };

  const updateAluno = async (alunoId, updatedAlunoData) => {
    try {
      const response = await axios.put(`${baseUrlAlunos}/${alunoId}`, updatedAlunoData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(`Error updating student with ID ${alunoId}:`, error);
      throw error;
    }
  };
  
  
  //updateAluno(alunoIdToUpdate, updatedAlunoData);

  ////delete
  const deleteAluno = async (alunoId) => {
    try {
      const response = await axios.delete(`${baseUrlAlunos}/${alunoId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(`Error deleting student with ID ${alunoId}:`, error);
      throw error;
    }
  };
  
  // Example usage:
  //const alunoIdToDelete = "65678f4e80b574bde275eab2"; // Replace with the actual student ID
  
  //await deleteAluno(alunoIdToDelete);

  /// populate table
  const fetchAndPopulateAlunos = async () => {
    try {
      const alunosArray = await getAlunos();

      // Get the tbody element
      const tbody = document.getElementById('alunosTableBody');

      // Clear any existing rows in the tbody
      tbody.innerHTML = '';

      // Loop through the alunosArray and create a row for each aluno
      alunosArray.forEach(aluno => {
        const row = document.createElement('tr');

        // Create cells for each column in the table
        const idCell = document.createElement('td');
        idCell.textContent = aluno._id;

        const nomeCell = document.createElement('td');
        nomeCell.textContent = aluno.nome;

        const idadeCell = document.createElement('td');
        idadeCell.textContent = aluno.idade;

        const cursoCell = document.createElement('td');
        cursoCell.textContent = aluno.curso;

        const emailCell = document.createElement('td');
        emailCell.textContent = aluno.email;

        // Add action buttons or any other columns as needed
        const actionsCell = document.createElement('td');

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-info', 'btn-sm'); 
        editButton.addEventListener('click', () => {
          // Open modal when Edit button is clicked
          openModal();
          console.log(`Edit button clicked for student ID ${aluno._id}`);
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', async () => {
          // Handle delete action, e.g., show a confirmation dialog
          const shouldDelete = confirm(`Tem certeza que deseja deleta ${aluno.nome} do banco de dados?`);
          if (shouldDelete) {
            try {
              await deleteAluno(aluno._id);
              // Refresh the table after deletion
              fetchAndPopulateAlunos();
              alert(`Aluno ${aluno.nome} deletado do banco de dados!`)
            } catch (error) {
              console.error('Error deleting student:', error);
            }
          }
        }); 

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        // Append cells to the row
        row.appendChild(idCell);
        row.appendChild(nomeCell);
        row.appendChild(idadeCell);
        row.appendChild(cursoCell);
        row.appendChild(emailCell);
        row.appendChild(actionsCell);
        
        


        // Append the row to the tbody
        tbody.appendChild(row);
      });

      console.log('Alunos table populated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchAndPopulateAlunos();
}

if (window.location.pathname === '/cursos') {
  const baseUrlCursos = 'http://3.23.103.69:3030/api/curso';

  const getCourses = async () => {
    try {
      const response = await axios.get(baseUrlCursos);
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  };

  const fetchAndPopulateCourses = async () => {
    try {
      const coursesArray = await getCourses();

      // Get the tbody element
      const tbody = document.getElementById('coursesTableBody');

      // Clear any existing rows in the tbody
      tbody.innerHTML = '';

      // Loop through the coursesArray and create a row for each course
      coursesArray.forEach(course => {
        const row = document.createElement('tr');

        // Create cells for each column in the table
        const idCell = document.createElement('td');
        idCell.textContent = course._id;

        const cursoCell = document.createElement('td');
        cursoCell.textContent = course.descricao;

        const instituicaoCell = document.createElement('td');
        instituicaoCell.textContent = course.nomeInstituicao;


        // Append cells to the row
        row.appendChild(idCell);
        row.appendChild(cursoCell);
        row.appendChild(instituicaoCell);

        // Append the row to the tbody
        tbody.appendChild(row);
      });

      console.log('Courses table populated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchAndPopulateCourses();
}


// Open modal function
// Open modal function
const openModal = () => {
  const modal = document.getElementById('editModal');
  modal.style.display = 'flex';

  // Get the modal content element
  const modalContent = document.querySelector('#editModal .modal-content');

  // Clear existing content
  modalContent.innerHTML = '';

  // Add your dynamic content here
  const bttclose = document.createElement('button');
  bttclose.textContent = 'X';
  bttclose.classList.add('btn-modal');
  bttclose.addEventListener('click', () => {
    closeModal();
  });
  modalContent.appendChild(bttclose);

  // Add your dynamic content here
  const h2 = document.createElement('h2');
  h2.textContent = 'Editar dados do aluno';
  modalContent.appendChild(h2);

  // Create input for name
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  nameLabel.setAttribute('for', 'editName');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'editName');
  modalContent.appendChild(nameLabel);
  modalContent.appendChild(nameInput);

  // Add other fields as needed

  // Create "Save Changes" button
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save Changes';
  saveButton.addEventListener('click', () => {
    // Call your saveChanges function
    saveChanges();
  });
  modalContent.appendChild(saveButton);
};

// ... (your existing code)

// Save changes function (replace with actual functionality)
const saveChanges = () => {
  // Add your logic to save changes here
  console.log('Changes saved!');
  closeModal();
};
// Close modal function
const closeModal = () => {
  const modal = document.getElementById('editModal');
  modal.style.display = 'none';
};

/*  */





if (window.location.pathname === '/cadastro') {
  const submitForm = async () => {

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let curso = document.getElementById('curso').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userData = {
      nome: nome,
      idade: idade,
      curso: curso,
      email: email,
      password: password
    };

    const baseUrlAlunos = 'http://3.23.103.69:3030/api/aluno';

    try {
      await axios.post(baseUrlAlunos, userData);

      // Additional logic here, such as handling the response

      // Clear form fields
      document.getElementById('nome').value = '';
      document.getElementById('idade').value = '';
      document.getElementById('curso').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';

      // Redirect after a successful submission
      setTimeout(() => {
        window.location.pathname = '/login';
      }, 1500);
    } catch (error) {
      console.error('Error post student:', error);
      // Handle error, show a message to the user, etc.
    }
  };

  window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
      document.getElementById('signInForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission
        submitForm();
      });
    }, 500);
  });

}

if (window.location.pathname === '/login') {

  const submitForm = async () => {
      let email = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      const baseUrlAlunos = 'http://3.23.103.69:3030/api/aluno';

      try {
        const response = await axios.get(baseUrlAlunos);
        const alunosArray = response.data;

        // Check if the entered username and password match any user in the array
        const user = alunosArray.find(user => user.email === email && user.password === password);

        if (user) {
          console.log('Login successful!');
          
          setTimeout(() => {
            window.location.pathname = '/alunos'
          }, 1000)
        } else {
          console.log('Invalid username or password');
          window.location.pathname = '/login'

          // Display an error message or take appropriate action for unsuccessful login
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
      }

      email = '';
      password = '';
  };

  window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
      document.getElementById('loginForm').addEventListener('submit', function (event) {
          event.preventDefault(); // Prevents the default form submission
          submitForm();
        });    
      }, 500);
  });
}
