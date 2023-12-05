console.clear();

// Oldschool then syntax
// function oldSchoolFetching() {
//   fetch("https://example-apis.vercel.app/api/bad-jokes/random")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// oldSchoolFetching();

async function fetchJoke() {
  const response = await fetch(
    "https://example-apis.vercel.app/api/bad-jokes/random"
  );
  const data = await response.json();

  console.log(data);
  const jokeParagraph = document.createElement("p");
  jokeParagraph.textContent = data.joke;
  document.body.append(jokeParagraph);
}

fetchJoke();
