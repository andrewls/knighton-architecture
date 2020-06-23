export default handler => {
  console.log('Registering handler');
  $(document).on('turbolinks:load', handler);
}
