import React, {useState, useEffect, useContext, createContext, useReducer, Dispatch} from "react";
import axios from "axios";
import {Map, Marker, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import {useAppValue, AppProvider} from "./context/AppContext";
import LoadingIndicator from './components/Loading/Loading'
import AppMap from "./components/AppMap/AppMap";
import {usePromiseTracker, trackPromise} from "react-promise-tracker";
import 'leaflet/dist/leaflet.css';
import "./App.css";

export const icon = new Icon({
    iconUrl: "/store-svgrepo-com.svg",
    iconSize: [25, 25]
});

const initialState = {
    page: LoadingIndicator,
    // arr: [],
};

function reducer(state, action) {
    console.log(action)
    console.log("reducer");
    switch (action.type) {
        case "loading":
            console.log("loading")
            return {
                ...state,
                page: LoadingIndicator,
                // arr: []
            };
        case "loaded":
            console.log("loaded");
            return {
                ...state,
                page: AppMap,
            };
        default:
            console.log("default");
            return state;
    }
}

const App = () => {
    useEffect(() => {
        console.log("here");
        axios({
            method: "get",
            url: `http://localhost:8000/dataset/`,
        }).then((res) => {
            setTimeout(() => {
                reducer(initialState, {type: "loaded"});
                console.log("done")
            }, 2000);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    let [{page: Page}] = useAppValue();

    return (
        <div className="App">
            <Page/>
        </div>
    );
};

export default (props) => (
    <AppProvider initialState={initialState} reducer={reducer}>
        <App {...props} />
    </AppProvider>
)

// useEffect(() => {
//     axios({
//         method: "get",
//         url: `http://localhost:8000/dataset/`,
//     }).then((res) => {
//         setTimeout(() => {
//             setallLocations(res.data)
//         }, 2000);
//     }).catch((err) => {
//         console.log(err);
//     });
// }, []);

// useEffect(() => {
//     console.log(allLocations.features)
// }, [allLocations]);
//
//
// if (allLocations.length <= 0) {
//     return (
//         <LoadingIndicator/>
//     )
// } else {
//     return (
//         <Map center={[30.034102, 31.00307]} zoom={13}>
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             />
//
//             {allLocations.features.map((store) => (
//                 <Marker
//                     key={store.properties.name}
//                     attribution={store.properties.name}
//                     position={[
//                         store.geometry.coordinates[1],
//                         store.geometry.coordinates[0],
//                     ]}
//                     onClick={() => {
//                     }}
//                     icon={icon}
//                 />
//             ))}
//             )}
//         </Map>
//     )
// }
