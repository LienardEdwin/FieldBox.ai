import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import anemometer from '../../data/anemometers/list.json'
import station1 from '../../data/anemometers/detail/1.json'
import station2 from '../../data/anemometers/detail/2.json'
import station3 from '../../data/anemometers/detail/3.json'
import Drawer from '@mui/material/Drawer';
import MapDetails from "../MapDetails";


export default function Map(){
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [markerSelected, setMarkerSelected] = useState<number>(0);
    const [listStation] = useState<Anemometer[]>([station1, station2, station3]);


    const handleChange = (index: number) => {
        setOpenDrawer(!openDrawer)
        setMarkerSelected(index)
    }

    return(
        <MapContainer center={[19.5938015, -155.4283701]} zoom={7} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                anemometer?.map((anemometer:Anemometer, index:number) => {
                    return(
                        <Marker
                            key={anemometer.id}
                            position={[anemometer.loc.lat, anemometer.loc.long]}
                            eventHandlers={{
                                click: () => {
                                    handleChange(index)
                                }
                            }}
                        >
                            <Drawer
                                anchor={'bottom'}
                                open={openDrawer}
                                onClose={() => setOpenDrawer(false)}
                            >
                                <MapDetails stationDetail={listStation[markerSelected]}/>
                            </Drawer>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    )
}