export const yt_logo = "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500";
export const hamburger_logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAATlBMVEX///9CgJUzeY/y9/iuxs9nl6g7fZIwd47u8/VFg5c5e5F7o7H7/f2yyNFfkqQrdY3m7vG+0NeDqLaivcff6OyOr7zJ2N7X4+eauMN0nq6APFjbAAABfklEQVR4nO3dW27CMBAF0CZAQhogpPRB9r/RQhfQj47lUa1zdnBHfkA0Gr+8AAAAAAAAAAAAAAD/y66q7LRlrYe+ssOanbmY42UcusqG8XLMzl3GbqpevKfXqY0tPL9mVO9Rvzk7eQnvY071um58z85ewC1p8T2W3y07ewFzysn3NLSwe7e88m3Z2Qv4yNu8H9nZC/jMuzo+s7MXcJqyyjedsrOXkLX8mlh8D+cl4fYYlnN27lK+LkvtTwbL5Ss7dUHXdV/Ves1ODAAAAAAAAAUc9/OhqnnfSGvu033sh8r6sYXmvh9bX7/JoOvGFtrTHm5ZPS5NrL9jXn9fC+ffOWXrPvUtNAm95a2+t+zsBehtDrH6Qpx9IW7eGL/7YraU+vUtXBw/bhn/ee/ZqcvxxQUAAAAAAAD+xBShADOsIkxQizC/L8L0yBCzS0NMzg3R2xxianiImfUhXkyI8V5HyG5Kqd/QyGsx3iqK8lJWlHfaAAAAAAAAAAAAAIBffAMVUizjjABhDwAAAABJRU5ErkJggg==";

export const user_icon = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

export const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_POPULAR_API_50_RES = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key="+apiKey;

export const YOUTUBE_POPULAR_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" + apiKey;

export const PLAY_VIDEO_URL = "https://www.youtube.com/watch?v=";

export const VIDEO_DATA = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" + apiKey;

export const YOUTUBE_SUGGEST_SEARCH_API = "https:/suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const VIDEO_CATEGORIES = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + apiKey;