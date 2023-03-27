// Define process
declare var process: any;
declare global {
  interface Window {
    process: any;
    Buffer: any;
  }
}

if (typeof process === 'undefined') {
  window.process = {
    env: {},
    cwd: function() {
      return '/'
    }
  }
} else {
  window.process = process;
}

// Dynamically import the Buffer class
import('buffer').then(bufferModule => {
  window.Buffer = bufferModule.Buffer;
});

// Patch tiny-secp256k1 to use the Buffer class instead of the Node.js Buffer class
import('tiny-secp256k1').then((secp256k1) => {
  secp256k1.utils.randomBytes = (size) => {
    return window.Buffer.from(crypto.getRandomValues(new Uint8Array(size)));
  };
});
