import React, { useEffect } from 'react';

import { useQuery } from 'react-query'

import styles from './Launches.css';

const loadMap = (pads) => {
    const lat = 40.737;
    const lon = -73.923;
    const L = window.L;

    const osmMap = L.map('osm').setView({lon: lon, lat: lat}, 1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(osmMap);

    L.control.scale().addTo(osmMap);

    pads.forEach(marker => { 
        const content = `<h2>${marker.name}<h2><p>To be launched from <a href="${marker.pad.url}" target="_blank">${marker.pad.name}</a></p>`;

        L.marker({lon: marker.pad.longitude, lat: marker.pad.latitude}).bindPopup(content).addTo(osmMap);
    });

    osmMap.invalidateSize();
}

const Launches = () => {
    const launchesQuery = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?is_crewed=false&include_suborbital=true&related=false&hide_recent_previous=false';

    const { error, data, isFetching } = useQuery('launches', () =>
        fetch(launchesQuery)
        .then(res => res.json())
    )

    useEffect(() => {
        if(data?.results) {
            loadMap(data.results);
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