const post = async (url, body) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    return response.json();
  } catch (error) {
    console.log("error", error);
  }
};

const postFormData = async (url, body) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
    });

    return response.json();
  } catch (error) {
    console.log("error", error);
  }
};

const put = async (url, body) => {
  try {
    let response = await fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    return response.json();
  } catch (error) {
    console.log("error", error);
  }
};

const patch = async (url, body) => {
  try {
    let response = await fetch(url, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    return response.json();
  } catch (error) {
    console.log("error", error);
  }
};

const get = async (url, params) => {
  let requestUrl = new URL(url);
  requestUrl.search = new URLSearchParams(params).toString();

  try {
    let response = await fetch(requestUrl, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    console.log("error", error);
    return undefined;
  }
};

const _delete = async (url, params) => {
  let requestUrl = new URL(url);
  requestUrl.search = new URLSearchParams(params).toString();

  try {
    let response = await fetch(requestUrl, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log("error", error);
    return undefined;
  }
};

export default {
  get,
  post,
  put,
  patch,
  delete: _delete,
  postFormData,
};
