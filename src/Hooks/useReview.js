import { useEffect } from "react";
import { useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("./ReviewDb.JSON")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return [reviews];
}
export default useReviews;