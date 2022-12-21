class FetchResource {
  _apiUrl = 'https://jsonplaceholder.typicode.com/';

  getResource = async (url) => {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  }

  getData = async (dataType) => {
    return await this.getResource(`${this._apiUrl}${dataType}`);
  }
}

export default FetchResource;