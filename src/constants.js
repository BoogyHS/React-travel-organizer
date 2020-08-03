const prod = {
    url: {
        BASE_URL: 'https://rest-api-react-project.herokuapp.com/api'
    }
}
const dev = {
    url: {
        BASE_URL: 'http://localhost:3300/api'
    }
};
export const baseUrl = process.env.NODE_ENV === 'development' ? dev.url.BASE_URL : prod.url.BASE_URL;