import {API_URL} from '../config';

export async function getStudents() {
  const response = await fetch(`${API_URL}/Students`);
  return await response.json();
}

export async function getStudent(id: number) {
  const response = await fetch(`${API_URL}/Students/${id}`);
  return await response.json();
}