// Ideally keys should be on a server due to this being public repository but this key
// does not need to be secure and is useful during development. Therefor it is stored here.
const getTrackerId = () => process.env.NODE_ENV === 'production' ? 'UA-101616504-3' : 'UA-000000000-0';
export default getTrackerId;
