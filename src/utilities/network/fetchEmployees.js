const employeesApiUrl = "https://reqres.in/api/users?per_page=12";

export const fetchEmployees = async () => {
  const rawResponse = await fetch(employeesApiUrl);
  if (rawResponse.ok) {
    const content = await rawResponse.json();
    return content.data;
  }
};
