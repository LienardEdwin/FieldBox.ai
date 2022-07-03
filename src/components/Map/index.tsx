import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import anemometer from '../../data/anemometers/list.json'
import station1 from '../../data/anemometers/detail/1.json'
import station2 from '../../data/anemometers/detail/2.json'
import station3 from '../../data/anemometers/detail/3.json'

export default function Map(){
    return(
        <MapContainer center={[19.5938015, -155.4283701]} zoom={7} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                anemometer.map((anemometer:Anemometer) => {
                    const station = anemometer.id === 1 ? station1 : anemometer.id === 2 ? station2 : station3
                    return(
                        <Marker key={anemometer.id} position={[anemometer.loc.lat, anemometer.loc.long]}>
                            <Popup>
                                {station.name}
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    )
}