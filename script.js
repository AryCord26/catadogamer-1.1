function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: userLocation
            });

            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: "Você está aqui!"
            });

            // Função para buscar eventos próximos (exemplo)
            fetchEventsNearby(userLocation);
        });
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
}

function fetchEventsNearby(location) {
    // Supondo que você tenha uma API que retorna eventos próximos
    // Exemplo de chamada à API (use sua própria URL)
    fetch(`https://api.exemplo.com/eventos?lat=${location.lat}&lng=${location.lng}`)
        .then(response => response.json())
        .then(data => {
            const eventList = document.getElementById('event-list');
            eventList.innerHTML = '';
            data.events.forEach(event => {
                const eventItem = document.createElement('div');
                eventItem.classList.add('event-card');
                eventItem.innerHTML = `
                    <h4>${event.name}</h4>
                    <p>${event.date}</p>
                `;
                eventList.appendChild(eventItem);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar eventos:", error);
        });
}
