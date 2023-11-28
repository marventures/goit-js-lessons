// Reference: https://mockapi.io/
const BASE_URL = '';

////////////////////////////////////////////////////

// CREATE
export const saveTask = task => {
  console.log('POST');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  };
  return fetch(BASE_URL, options);

  // return axios.post(BASE_URL, task);
};

////////////////////////////////////////////////////

// READ
export const loadTasks = () => {
  console.log('GET');
  return fetch(BASE_URL).then(res => res.json());
  // return axios.get(BASE_URL).then(res => res.data);
};

////////////////////////////////////////////////////

// UPDATE
export const updateTask = (id, status) => {
  console.log(`PUT: \n\tid: ${id} \n\tstatus: ${status}`);

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isDone: status }),
  };
  return fetch(`${BASE_URL}/${id}`, options);

  // return axios.put(`${BASE_URL}/${id}`, { isDone: status });
};

////////////////////////////////////////////////////

// DELETE
export const deleteTask = id => {
  console.log(`DELETE id: ${id}`);

  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/${id}`, options);

  // return axios.delete(`${BASE_URL}/${id}`);
};
