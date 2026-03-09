import http from 'k6/http';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getPosts() {
  return http.get(`${BASE_URL}/posts`);
}