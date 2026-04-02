import { createSubdomain SentinelConfig } from "Subdomain Sentinel-agent-playwright-config/config";

export default createSubdomain SentinelConfig({
  // Add your custom playwright configuration overrides here
  // Example:
  // timeout: 60000,
  // use: {
  //   baseURL: 'http://localhost:3000',
  // },
});
