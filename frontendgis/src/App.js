import React, {useState, useEffect, useContext, createContext, useReducer} from "react";
import axios from "axios";
import {Icon} from "leaflet";
import {useAppValue, AppProvider,AppContext} from "./context/AppContext";
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
    arr: []
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
                arr: []
            };
        case "loaded":
            return {
                ...state,
                page: AppMap,
                arr: action.arr
            };
        default:
            console.log("default");
            return state;
    }
}


const App = () => {
    const [state, dispatch] = useAppValue();

    useEffect(() => {
        console.log("here");
        axios({
            method: "get",
            url: `http://localhost:8000/dataset/`,
        }).then((res) => {
            setTimeout(() => {
                dispatch({type: "loaded", arr: res.data});
                console.log("done");
            }, 3000);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    let Page = state.page;
    let newArr = state.arr;

    return (
            <Page arr={newArr}/>
    );
};

export default (props) => (
    <AppProvider initialState={initialState} reducer={reducer}>
        <App {...props} />
    </AppProvider>
)
