(() => {
  const baseUrl = String(
    window.HOMEHUB_API_BASE_URL
      || document.querySelector('meta[name="homehub-api-base-url"]')?.content
      || "http://127.0.0.1:8000"
  ).replace(/\/+$/, "");

  async function request(path, options = {}) {
    const response = await fetch(`${baseUrl}${path}`, {
      ...options,
      credentials: "include",
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...options.headers
      }
    });
    const responseText = response.status === 204 ? "" : await response.text();
    let result = null;
    if (responseText) {
      try {
        result = JSON.parse(responseText);
      } catch {
        result = responseText;
      }
    }
    if (!response.ok) {
      const detail = Array.isArray(result?.detail)
        ? result.detail.map((item) => item.msg).join(", ")
        : result?.detail;
      const error = new Error(detail || `The server returned HTTP ${response.status}.`);
      error.status = response.status;
      throw error;
    }
    return result;
  }

  window.HomeHubApi = { baseUrl, request };
})();
