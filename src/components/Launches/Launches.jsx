import React, { useEffect } from 'react';

import { useQuery } from 'react-query'

import styles from './Launches.css';

const loadMap = (pads) => {
    const lat = 40;
    const lon = 25;
    const L = window.L;

    const osmMap = L.map('osm').setView({lon: lon, lat: lat}, 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(osmMap);

    L.control.scale().addTo(osmMap);

    pads.forEach(marker => { 
        const content = `<h2>${marker.name}<h2>
            <p>To be launched from 
                <a href="${marker.pad.url}" target="_blank">${marker.pad.location.name}</a>
            </p>`;

        L.marker({lon: marker.pad.longitude, lat: marker.pad.latitude}).bindPopup(content).addTo(osmMap);
    });

    osmMap.invalidateSize();
}

const Launches = () => {
    const launchesQuery = 'http://localhost:3004/launchs';

    const { error, data, isFetching } = useQuery('launches', () =>
        fetch(launchesQuery)
        .then(res => res.json())
    )

    useEffect(() => {
        if(data) {
            loadMap(data);
        }
    }, [data]);

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
        {
            isFetching &&
                <div className={styles.loading}>Loading...</div>
        }
        <div id="osm" data-testid="map"></div>
        </>
    );
}

export default Launches;