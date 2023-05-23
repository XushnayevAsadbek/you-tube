const Config = {
    development:{
        url:import.meta.env.VITE_APP_URL,
        apiUrl:import.meta.env.VITE_API_URL,

    },
    production:{
        url:import.meta.env.VITE_APP_URL,
    },
}
console.log(import.meta.env);
export default Config[import.meta.env.MODE];