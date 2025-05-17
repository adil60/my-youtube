Debouncing - 
 If the difference between two key strokes is <200 ms - Decline API call
 If the diff is >= 200ms - call the api

 encodeURIComponent() -  is a JavaScript function that converts a string into a safe URL component by escaping (encoding) special characters.  
    const query = "react router dom";
    const encoded = encodeURIComponent(query);
    console.log(encoded); // "react%20router%20dom"

    Useful for routing :  navigate("/search?q=" + encodeURIComponent(query));
