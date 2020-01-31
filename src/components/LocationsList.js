import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Axios.get("https://rickandmortyapi.com/api/location/").then(response => {
            console.log(response.data.results);
            setLocations(response.data.results);
          })
          .catch(e => console.log(e))
          .finally(() => {
            console.log('Axios request finished.');
          });
        }, []);
      
        return (
          <section className="locations-list">
            <div>
              <Link className="nav-buttons" to={"/"}>
                Back
              </Link>
            </div>
      
            {locations.map(gps => {
              return <LocationCard key={gps.id} location={gps} />;
            })}
          </section>
        );
      }
