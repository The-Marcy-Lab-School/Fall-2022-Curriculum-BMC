export const handleFetch = async (url, options) => {
  try {
    const res = await fetch(url, options)
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}