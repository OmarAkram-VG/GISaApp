import React, {useState, useEffect, useContext, createContext} from "react";
import Loader from 'react-loader-spinner'

export default function LoadingIndicator(props) {
    return (<div
            style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Loader type="Puff" color="#2BAD60" height="100" width="100"/></div>
    )
};
