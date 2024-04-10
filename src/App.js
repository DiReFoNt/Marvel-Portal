import React, { useEffect, useState } from "react";
import ServiceAPI from "./API/serviceAPI";
import HeroStats from "./components/HeroStats";

function App() {
    const [heros, setHeros] = useState([]);
    async function fetchData(limit = 1) {
        const response = await ServiceAPI.getAll(limit);
        console.log(response.results);
        setHeros(response.results);
    }

    useEffect(() => {
        fetchData(50);
    }, []);

    return (
        <div className="flex flex-col items-center">
            {heros.map((item) => {
                return (
                    <HeroStats
                        id={item.id}
                        name={item.name}
                        img={item.thumbnail}
                        description={item.description}
                    />
                );
            })}
        </div>
    );
}

export default App;
