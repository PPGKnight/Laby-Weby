
function initMap() {
    const Toptel = { lat: 49.291646155691524, lng: 19.960444807342345 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: Toptel,
    });
    const marker = new google.maps.Marker({
      position: Toptel,
      map: map,
    }) .setMap(map)
  }