import http from 'k6/http';

const searchQuerys = [
  "anmol",
  "rohit",
  "ronit",
  "rio",
]

export default function() {
  const headers = {
    authorization: 'Basic <>'
  }
  const assignmentsBatch = searchQuerys.map((searchQuery) => ({
    method: 'GET',
    url: `https://www.google.com/search?q=${searchQuery}`,
    params: { headers }
  }))

  http.batch(assignmentsBatch)
}