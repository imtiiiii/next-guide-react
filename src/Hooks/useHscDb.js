import { useEffect } from "react";
import { useState } from "react"

const HscDb = () => {
    const [hscServices, setHscServices] = useState([]);
    useEffect(() => {
        fetch("./hscDb.JSON")
            .then(res => res.json())
            .then(data => setHscServices(data));
    }, [])
    return [hscServices];
}
export default HscDb;