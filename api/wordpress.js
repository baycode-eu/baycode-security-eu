import axios from "axios";

class WordpressBlogAPI {
  constructor(BASE_URL) {
    this._instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Cache-Control": "no-cache",
      },
    })
  }

  getInstance = () => {
    return this._instance
  }
}

const API = new WordpressBlogAPI(process.env.WORDPRESS_API_URL)

export const Posts = {
  getPosts: async () => {
    const postsResponse = await API.getInstance().get('/posts&_embed');
    let posts = await postsResponse.data;
    posts = posts.sort((a,b) => a.sticky)
    posts = posts.map(item => {
      let newItem = item;
      newItem.title = newItem.title.rendered ? newItem.title.rendered : newItem.title
      newItem.description = newItem.excerpt?.rendered.replace(/(<([^>]+)>)/gi, "").trim();
      newItem.modified = new Date(newItem.modified)
      newItem.modified = ("0" + newItem.modified.getDate()).slice(-2) + "-" 
        + ("0"+(newItem.modified.getMonth()+1)).slice(-2) 
        + "-" + newItem.modified.getFullYear() 
      newItem.thumbnail = newItem._embedded["wp:featuredmedia"] ? newItem._embedded["wp:featuredmedia"][0].source_url : ''
      return newItem
    })
    
    return posts;
  },

  getPostBySlug: async (slug) => {
    const posts = await Posts.getPosts();
    const postArray = posts.filter((post) => post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
  },

  getPostsSlugs: async () => {
    let elements = [];
  
    elements = await Posts.getPosts();
    
    const elementsIds = elements.map((element) => {
      return {
        params: {
          slug: element.slug,
        },
      };
    });
    return elementsIds;
  }
}