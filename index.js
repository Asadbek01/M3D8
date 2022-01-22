// const productId = new URLSearchParams(window.location.search).get('productId')
// const url = productId ? `https://striveschool-api.herokuapp.com/api/product/${itemId}` : 'https://striveschool-api.herokuapp.com/api/product'
//  const form = document.querySelector('form')
//  form.addEventListener('submit' ,e =>{
//    e.preventDefault();
//  })



//     const handleSubmit = async (event) => {
//       event.preventDefault();


//       const myEvent = {
//         name: document.getElementById("name").value,
//         description: document.getElementById("description").value,
//         brand: document.getElementById("brand").value,
//         imageUrl: document.getElementById("imageUrl").value,
//         price: document.getElementById("price").value,
//       }

//       try {
//         const response = await fetch(url, {
//           method: productId? "PUT":"POST",
//           body: JSON.stringify(myEvent),
//           headers: {
//             "Content-Type": "application/json",
//           }
//         })
//         if(response.ok){
//             const product = response.json()
//         if(productId){
//             alert(`Product with an id of: ${product._id} + was edited successfully`)
//         }else {
//             alert (`Product Created successfully with an id of ${product._id}`)
//         }
//         }
        
//       } catch (error) {
//         alert(error); 
//       }

//     }
//     const handleDelete = async()=>{
//       const handleDelete = async () => {
//             try {
//                 const response = await fetch(endpoint, { method: "DELETE" })
//                 if (response.ok) {
//                     const deletedObj = await response.json()
//                     showAlert("success", "Event with id: " + deletedObj._id + " deleted successfully") // shows the custom alert
//                     setTimeout(() => { window.location.assign("/") }, 3500) // pushes the user to the homepage after 3,5 seconds
//                 } else {
//                     showAlert("danger", "Something went wrong in the deletion process")
//                 }
//             } catch (err) {
//                 showAlert("danger", err.message)
//             }
//         }
//     }

//      const showAlert = (type, msg) => {
//             const alertContainer = document.getElementById("alert-box")

//             alertContainer.innerHTML = `
//             <div class="alert alert-${type}" role="alert">
//                 ${msg}
//             </div>`


//             setTimeout(() => {
//                 alertContainer.innerHTML = ""
//             }, 3000)
//         }

