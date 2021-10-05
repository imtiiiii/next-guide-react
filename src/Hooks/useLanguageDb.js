import { useEffect } from "react";
import { useState } from "react"

const LanguageDb = () => {
    const [languageServices, setLanguageServices] = useState([]);
    useEffect(() => {
        fetch('./languageDb.JSON')
            .then(res => res.json())
            .then(data => setLanguageServices(data));
    }, [])
    return [languageServices]
}
export default LanguageDb;