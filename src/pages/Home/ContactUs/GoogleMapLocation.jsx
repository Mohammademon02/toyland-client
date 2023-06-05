import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./GoogleMapLocation.css"
import { Avatar } from "flowbite-react";


const position = [23.85177909043909, 90.26347336582818]


const GoogleMapLocation = () => {
    return (

        <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <Avatar
                        img="https://i.ibb.co/4VbMXMV/DSC00449-01.jpg"
                        rounded
                    >
                        <div className="space-y-1 font-medium dark:text-white">
                            <div>
                                Mohammad Emon
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Learning Web Development
                            </div>
                        </div>
                    </Avatar>
                </Popup>
            </Marker>
        </MapContainer>

    );
};

export default GoogleMapLocation;