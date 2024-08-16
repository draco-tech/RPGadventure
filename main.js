let myBarraja = [{
  title: "Blade of Eternity",
  Image: "./access/sword.png"
},{
  title: "Ancient Demonic Ax",
  Image: "./access/axe.png"
},{
  title: "Forrest Staff",
  Image: "./access/staff.png"
}]
let parr = "Timeless Strike is a unique skill that comes with the blade of eternity.It allows the wielder to strike with such speed and precision that it seems as if time itself has stopped.This skill not only inflicts massive damage but it also stuns the enemy for a short time" 
let showGuns = document.getElementById("showCard")
let cardTemplate = (wapon) => `<div class="card-container">
        <div class="info-container">
          <div class="inf-wapon">
            <p class="info-of-eternity">${wapon.title}</p>
            <div class="aarondivider">
              <div id="imagen">
                <img src="${wapon.Image}" alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="attributes">
            <p>attributes:</p>
            <div class="Attack-container">
              <span>Attack Power: +80</span>
              <span class="velocity-Attack">Attack Speed: +30</span>
            </div>

            <span>Critical Strike Chance: +25</span>
            <span>Life Steal: +10 Cooldown reduction: +15</span>
          </div>
          <div>
            <div id="star" class="star-container">
              <svg fill="#8b7f48" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ff" stroke-width="0.672"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g></svg>
              <svg fill="#595560" width="32px" height="32px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#595560" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"></path></g></svg>
              <svg fill="#595560" width="32px" height="32px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#595560" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"></path></g></svg>
              <svg fill="#595560" width="32px" height="32px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#595560" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"></path></g></svg>
              <svg fill="#595560" width="32px" height="32px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#595560" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"></path></g></svg>
            </div>
            <div class="skill-info-container">
            <p class="Skill-info"> <strong>Skill Introduction:</strong>${parr}</p>
            </div>
            <div class="Skill-EXP">
              <p>Level: 1/10 EXP: </p>
              <div class="EXP-bar">
                <span>0/19</span>
              </div>
            </div>
          </div>
        </div>
        <div class="boton-container">
          <div class="buttom btn-Reincorce"><p>Reincorce</p></div>
          <div class="buttom btn-Ascension"><p>Ascension</p></div>
        </div>
      </div>`
    
for (let s = 0; s <= 0; s ++ ){
  let wapon = myBarraja[s]
  showGuns.innerHTML += cardTemplate(wapon) 
}