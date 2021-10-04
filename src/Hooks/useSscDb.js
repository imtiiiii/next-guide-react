import { useEffect } from "react";
import { useState } from "react"

const SscDb = () => {
    const [sscServices, setSscServices] = useState([]);
    useEffect(() => {
        fetch("./sscDb.JSON")
            .then(res => res.json())
            .then(data => setSscServices(data))
    }, [])
    return [sscServices];
}


export default SscDb;