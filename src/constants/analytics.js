// Ideally keys should be on a server due to this being public repository but this key
// does not need to be secure and is useful during development. Therefor it is stored here.
export const TRACKER_ID = process.env.NODE_ENV === 'production' ? 'UA-109205585-1' : 'UA-000000000-0';

export default {
  trackerId: TRACKER_ID,
};
