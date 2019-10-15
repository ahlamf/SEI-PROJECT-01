let imagesPuzzle = (function(){
    let imgPuzz = ["images/gallery-1.jpg", "images/gallery-2.jpg","images/gallery-3.jpg","images/gallery-4.jpg"]
    

  let $imagesList = document.querySelector(".images__list")

  function add(obj){}

  function getAll(){
     for (let index = 0; index< imgPuzz.length; index++) {

       let $gridItem = document.createElement("div")
       let $imgGridItem = document.createElement("img")
       let $playItemConent = document.createElement("button")
       let $buttonContainer = document.createElement("div")
        
       $imgGridItem.setAttribute ("src", imgPuzz[index])
       $imgGridItem.setAttribute("width", "100%" )
       


       $playItemConent.classList.add("play_button")

       $playItemConent.textContent ="PLAY"

      $gridItem.appendChild($imgGridItem)
      $buttonContainer.appendChild($playItemConent)
      $gridItem.appendChild($buttonContainer)
      $imagesList.appendChild($gridItem)

      $playItemConent.addEventListener("click", function(){
        document.location.href = 'image1.html';
    });
     }
     }
  
  return{
    getALl: getAll,
    add: add
  }
}) ()

  imagesPuzzle.getALl()


