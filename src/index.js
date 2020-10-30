document.addEventListener("DOMContentLoaded", () => {
  const BASEURL = "http://localhost:3000/toys/"
  const POSTURL = "http://localhost:3000/toys/:id"
  let addToy = false;

  //##Fetch Andy's Toys
  //const fetchToys = () => {
    fetch(BASEURL)
    .then(resp => resp.json())
    .then(toys => {
      renderToys(toys)
    })

    const renderToys = (toys) => {
      toys.forEach(toy => {
        renderToy(toy) 
      })
    }
    //## Add Toy Info to the Card
    const renderToy = (toy) => {
      //console.log(toy)
      //access parent
      let toyDiv = document.getElementById('toy-collection')
      //create cards
      const toyCard = document.createElement('div')
      toyCard.className = 'card'
      //set equal to each toy
      toyCard.dataset.id = toy.id
      //populate w toy data
      toyCard.innerHTML = `
      <h2> ${toy.name} </h2>
      <img class="toy-avatar" src= "${toy.image}"/>
      <p> ${toy.likes} </p>
      <button class="like-btn" type="button"> Like </button>
      `
      //append
      toyDiv.append(toyCard)
    }
  //}
  
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

  // ## Add a New Toy
  //Create submit listener on form
  const submitHandler = () => {
    const toyForm = document.querySelector('.add-toy-form')
   //console.log(toyForm)
    toyForm.addEventListener('submit', e => {
      e.preventDefault();
      console.log(e.target)

        const newToyForm = e.target
        const name = newToyForm.name.value
        const image = newToyForm.image.value

        const options = {
        
          method: 'POST', 
          headers: 
          {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          
          body: JSON.stringify({
            "name": name,
            "image": image,
            "likes": 0
          })
        }
        
  // When clicked, do a POST - fetch(newToy)
      fetch(BASEURL, options)
      .then(resp => resp.json())
      .then(renderToy)
      
  })

  // const addToys = () => {
  //   fetch(POSTURL)
  //   .then(resp => resp.json())
  //   .then(renderToy)
     }
  //If conditions are met, render toy to page

//fetchToys();
submitHandler();
})
