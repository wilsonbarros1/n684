import axios from "/@fs/C:/Users/Usuário/Desktop/ADS_3/webdev/front/node_modules/.vite/deps/axios.js?v=cdba558c";
  
        const baseUrl = `http://3.23.103.69:3030/api/curso`;
        

        const getCourses = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Use an async function to handle the Promise returned by getCourses
const fetchAndLogCourses = async () => {
  try {
    const arr = await getCourses();
    console.log(arr);
  } catch (error) {
    // Handle errors if necessary
    console.error('Error:', error);
  }
};

// Call the async function
fetchAndLogCourses();