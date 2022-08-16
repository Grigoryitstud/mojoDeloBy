console.log('hallo')
// const center = [53.899994, 27.558725];
const map = L.map("map").setView([53.899994, 27.558725], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 6,
  maxZoom: 17,
  attribution: "© OpenStreetMap",
}).addTo(map);
// const markerGroup = L.layerGroup().addTo(map);
// const addMarkers = () => {
//   let num = 0;
//   for (element of coordinates) {
//     for (mark of element) {
//       if (mark == []) {
//       } else
//         for (mar of mark) {
//           L.marker(mar.cord, mar.icon)
//             .addTo(markerGroup)
//             .bindPopup(
//               `<section id="${mar.id}" class="${num}"> 
//                     <p class="pop__into">${mar.name}</p>
//                     <p>${mar.text}</p>
//                     <a href="tel:${mar.tel}">${mar.tel}</a>
//                     </section>`
//             );
//         }
//     }
//     num++;
//   }
// };
// addMarkers();