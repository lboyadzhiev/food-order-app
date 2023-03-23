const getOptions = (method = 'GET', body) => {
  const options = {
    method,
    headers: {},
  };

  if (body) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(body);
  }

  return options;
};

const request = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (response.ok === false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const get = async (url) => {
  return await request(url, getOptions());
};

export const post = async (url, body) => {
  return await request(url, getOptions('POST', body));
};
