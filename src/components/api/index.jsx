
export const loadPosts = async () => {
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");
  
    const [postResult, photosResult] = await Promise.all([postResponse, photosResponse]);
  
    if (!postResult.ok || !photosResult.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const postJson = await postResult.json();
    const photosJson = await photosResult.json();
  
    const postsAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });
  
    return postsAndPhotos;
  };
  