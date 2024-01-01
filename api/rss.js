import axios from "axios";
import { Exception } from "sass";
import { parse as htmlParser } from 'node-html-parser' ;

var xmlConverter = require('xml-js');

class RSSBlogAPI {
  constructor(BASE_URL) {
    this._instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/rss+xml",
        "Accept": "application/rss+xml",
        "Cache-Control": "no-cache",
      },
    })
  }

  getInstance = () => {
    return this._instance
  }
}

const API = new RSSBlogAPI(process.env.RSS_BLOG_API_URL)

const endpoints = {
  INDEX: "/index.xml"
}

export const Posts = {
  getPosts: async () => {
    const {data} = await API.getInstance().get(endpoints.INDEX);
    const jsonData = xmlConverter.xml2json(data, {compact: true});
    const feed = JSON.parse(jsonData)

    const posts = feed.rss.channel.item
    return posts.map(post => {
      const descriptionArr = [...htmlParser.parse(post.description._text).childNodes]

      const thumbnail = descriptionArr[0].attributes.src
      const description = descriptionArr[1].innerText

      return {
        title: post.title._text,
        description,
        thumbnail,
        link: post.link._text
      }
    })
  }
}