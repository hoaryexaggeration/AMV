module.exports = {
  timeout: 30000,
  use: { headless: true, baseURL: 'http://localhost:5173' },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ]
}
