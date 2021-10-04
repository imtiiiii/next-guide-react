import { useEffect } from "react";
import { useState } from "react"

const AdmissionDb = () => {
    const [admissionServices, setAdmissionServices] = useState([]);
    useEffect(() => {
        fetch("./admissionDb.JSON")
            .then(res => res.json())
            .then(data => setAdmissionServices(data))
    }, []);
    return [admissionServices];

}
export default AdmissionDb;