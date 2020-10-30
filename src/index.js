document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3000/toys/"
  let addToy = false;
  const toyDiv = document.getElementById('toy-collection')
  
  const fetchToys = () => {
    fetch(baseUrl)
    console.log(baseUrl)
    .then(resp => resp.json())
    .then(toys => renderToys(toys))
    console.log(toys)

    const renderToys = (toys) => {
      for(const toy of toys){
        renderToys(toy)
      }
    }

    const renderToy = () => {



    }
  }



  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });






});
