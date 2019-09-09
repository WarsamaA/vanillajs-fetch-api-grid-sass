
const postCard = document.querySelector(".post-card")
const postTitle = document.querySelector(".post-title");
const container = document.querySelector(".container")


let dataArr = [];
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  return data
}

const updateUi = (data) => {
  const { title, body } = data

  container.innerHTML += `
     <div class="post-card">
        <h1 class="post-title">${title}</h1>
        <p class="post-content">${body}</p>
    </div>
  `

}

getPosts().then((posts) =>{
  posts.map(post => {
    // console.log(post)
    updateUi(post)
  })
})
          .catch(err => console.log(err))

