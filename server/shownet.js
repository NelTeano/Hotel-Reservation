const os = require('os');
const networkInterfaces = os.networkInterfaces();

/// shows the local-ip where the node app is hosted in the network.
function showLocalNetworkIP (PORT) {
  console.log(`(0) | local : localhost:${PORT}/`);

  if(typeof(networkInterfaces.wlp2s0) !== 'undefined') {
    console.log(`(a) | app-server-ip: ${networkInterfaces.wlp2s0[0].address}:${PORT}/`);
  } else if(typeof(networkInterfaces.enp3s0f1) !== 'undefined') {
    console.log(`(b) | app-server-ip: ${networkInterfaces.enp3s0f1[0].address}:${PORT}/`);
  } else if(typeof(networkInterfaces['Wi-Fi'])!=='undefined') {
    console.log(`(c) | app-server-ip: ${networkInterfaces['Wi-Fi'][1].address}:${PORT}/`);
  } else if(typeof(networkInterfaces.Ethernet) !== 'undefined') {
    console.log(`(d) | app-server-ip: ${networkInterfaces.Ethernet[1].address}:${PORT}/`);
  } else {
    console.log('no IP found for sharing over the network');
  }
}

module.exports = showLocalNetworkIP;