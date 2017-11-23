const contentful = require('contentful');

const SPACE_ID = 'xrbgyqz0uqtk'
const ACCESS_TOKEN = '3108ce09efe454508dc4a6e98f3804e741fcdd440e9c88b6d3dde9487502d7dc'

const contentfulClient = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

class Client {
  constructor() {
  this.useLocalStorage = (typeof localStorage !== 'undefined');
    this.subscribers = [];

    if (this.useLocalStorage) {
      this.token = localStorage.getItem(ACCESS_TOKEN);

      if (this.token) {
        this.isTokenValid().then((bool) => {
          if (!bool) {
            this.token = null;
          }
        });
      }
    }

  }
  fetchProjects() {
    return contentfulClient.getEntries({
      content_type: 'project',
    })
    .catch((error) => {
      console.error(error)
    })
  }
 fetchServices() {
    return contentfulClient.getEntries({
      content_type: 'service',
    })
    .catch((error) => {
      console.error(error)
    })
  }
  fetchPartners() {
    return contentfulClient.getEntries({
      content_type: 'partner',
    })
    .catch((error) => {
      console.error(error)
    })
  }
  fetchConfigs() {
    return contentfulClient.getEntries({
      content_type: 'config',
    })
    .catch((error) => {
      console.error(error)
    })
  }
  fetchPages() {
    return contentfulClient.getEntries({
      content_type: 'page',
    })
    .catch((error) => {
      console.error(error)
    })
  }
  fetchPeople() {
    console.log('FETCHING PEOPLE');
    return contentfulClient.getEntries({
      content_type: 'person',
    })
    .catch((error) => {
      console.error(error)
    })
  }

  fetchPosts(paginationIndex, paginationLimit) {
    return contentfulClient.getEntries({
      content_type: 'post',
      skip: paginationIndex,
      limit: paginationLimit,
      order: '-sys.createdAt'
    })
    .catch((error) => {
      console.error(error)
    })
  }

  fetchPost(postSlug) {
    return contentfulClient.getEntries({
      content_type: 'post',
      fields: { slug: postSlug}
    })
    .catch((error) => {
      console.error(error)
    })

  }

}

export const client = new Client()
