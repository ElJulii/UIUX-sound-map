function fetchCountryInfoByCoordinates(longitude, latitude) {
    const username = 'YOUR_GEONAMES_USERNAME'; // Replace with your GeoNames username

    // Make a request to the GeoNames API
    fetch(`http://api.geonames.org/countryInfoJSON?lat=${latitude}&lng=${longitude}&username=${username}`)
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);  // Log the API response to the console

            if (data.geonames && data.geonames.length > 0) {
                const countryInfo = data.geonames[0];

                // Extract the country name and other relevant info
                const countryName = countryInfo.countryName || 'Unknown';
                const countryFlagUrl = `https://flagcdn.com/w320/${countryInfo.countryCode.toLowerCase()}.png`;
                const countryDescription = getCountryDescription(countryName);

                // Update the information panel with fetched data
                document.getElementById('country-name').innerText = countryName;
                document.getElementById('country-flag').src = countryFlagUrl;
                document.getElementById('country-description').innerText = countryDescription;

                // Show the country info panel when a country is clicked
                document.getElementById('country-info').style.display = 'block';
            } else {
                document.getElementById('country-name').innerText = "No data found";
                document.getElementById('country-flag').src = "";
                document.getElementById('country-description').innerText = "No information available.";

                // Show the country info panel even when no data is found
                document.getElementById('country-info').style.display = 'block';
            }
        })
        .catch(error => {
            console.error("Error fetching country data:", error);
            document.getElementById('country-name').innerText = "Error fetching data";
            document.getElementById('country-flag').src = "";
            document.getElementById('country-description').innerText = "No information available.";

            // Show the country info panel even if there's an error
            document.getElementById('country-info').style.display = 'block';
        });
}
