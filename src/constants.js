const prod = {
    url: {
        SERVER_URL: 'https://rest-api-react-project.herokuapp.com/api'
    }
}
const dev = {
    url: {
        SERVER_URL: 'http://localhost:3300/api'
    }
};
export const serverUrl = process.env.NODE_ENV === 'development' ? dev.url.SERVER_URL : prod.url.SERVER_URL;