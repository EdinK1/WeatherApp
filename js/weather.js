class Weather {
    constructor(city, country) {
        this.apiKey = '7e52bc22b3c195c2d02c6c562a0786a3';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }    

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}
