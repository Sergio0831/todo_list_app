export function isGoogleAnalyticsEnabled() {
  let GOOGLE_ANALYTICS_ENABLED;
if (process.env.NODE_ENV === "production") {
  return  true;
} else {
  return  false;
}
}