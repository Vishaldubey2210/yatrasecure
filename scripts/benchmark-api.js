const http = require('http');

const URL = 'http://localhost:5000/health';
const TOTAL_REQUESTS = 100;
let completed = 0;
const start = Date.now();

console.log(`⚡ Benchmarking ${URL} with ${TOTAL_REQUESTS} requests...`);

for (let i = 0; i < TOTAL_REQUESTS; i++) {
  http.get(URL, (res) => {
    completed++;
    if (completed === TOTAL_REQUESTS) {
      const duration = Date.now() - start;
      console.log(`✅ Completed ${TOTAL_REQUESTS} requests in ${duration}ms (${(TOTAL_REQUESTS / (duration / 1000)).toFixed(2)} req/sec)`);
    }
  }).on('error', () => {
    completed++;
  });
}
