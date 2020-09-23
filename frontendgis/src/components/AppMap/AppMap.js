import React, {useState, useEffect, useContext, createContext} from "react";
import axios from "axios";
import {Map, Marker, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import 'leaflet/dist/leaflet.css';
import {icon} from "../../App";
import {useAppValue} from "../../context/AppContext";

export default function AppMap() {
    let [{arr: currArr}] = useAppValue();
    return (
        <Map center={[30.034102, 31.00307]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {currArr.features.map((store) => (
                <Marker
                    key={store.properties.name}
                    attribution={store.properties.name}
                    position={[
                        store.geometry.coordinates[1],
                        store.geometry.coordinates[0],
                    ]}
                    onClick={() => {
                    }}
                    icon={icon}
                />
            ))}
            )}
        </Map>
    )
}
