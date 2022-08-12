const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');


// const mocks = {
//     Query: () => ({
//         tracksForHome: () => [...new Array(6)],
//     }),
//     Track: () => ({
//         id: () => 'track_01',
//         title: () => 'Astro Kitty, Space Explorer',
//         author: () => {
//             return {
//                 name: 'Grumpy Cat',
//                 photo:
//                     'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
//             };
//         },
//         thumbnail: () =>
//             'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
//         length: () => 1210,
//         modulesCount: () => 6
//     })
// };

const server = new ApolloServer({
    typeDefs,
    // mocks // mock data also we can sue mocks:true for random mock data 
    resolvers,
    dataSources: () => {
        return {
            trackAPI: new TrackAPI()
        }
    }
});

server.listen().then(() => {
    console.log('listening on port 4000');
})