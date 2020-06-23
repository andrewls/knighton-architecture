const req = require.context('./', false, /.*\.jpg/i);
const photos = {};
req.keys().forEach(k => {
  const pathParts = k.split('/');
  const key = pathParts[pathParts.length - 1];
  photos[key.split('.')[0]] = req(k)
});
console.log("Photos in projects", photos);
export default photos;
