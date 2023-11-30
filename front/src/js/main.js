import axios from "/@fs/C:/Users/Usuário/Desktop/ADS_3/webdev/front/node_modules/.vite/deps/axios.js?v=cdba558c";

if (window.location.pathname === '/alunos') {
  const baseUrlAlunos = 'http://3.23.103.69:3030/api/aluno';

  const getAlunos = async () => {
    try {
      const response = await axios.get(baseUrlAlunos);
      return response.data;
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  };

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
        actionsCell.textContent = 'Actions'; // Replace with your actual action buttons

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

        // Add action buttons or any other columns as needed
        const actionsCell = document.createElement('td');
        actionsCell.textContent = 'Actions'; // Replace with your actual action buttons

        // Append cells to the row
        row.appendChild(idCell);
        row.appendChild(cursoCell);
        row.appendChild(instituicaoCell);
        row.appendChild(actionsCell);

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
