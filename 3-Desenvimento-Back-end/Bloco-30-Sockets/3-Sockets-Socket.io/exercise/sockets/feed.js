module.exports = (io) => io.on('connection', (socket) => {
  socket.on('likePost', (numb) => {
    io.emit('updateLikes', parseFloat(numb) + 1);
  });
  socket.on('dislikePost', (numb) => {
    io.emit('updateLikes', parseFloat(numb) - 1);
  });
  socket.on('starPost', (numb) => {
    io.emit('updateStars', parseFloat(numb) + 1);
  });
  socket.on('distarPost', (numb) => {
    io.emit('updateStars', parseFloat(numb) - 1);
  });
});