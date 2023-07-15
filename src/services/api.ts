interface GetOptions {
  params: {
    [key: string]: string;
  };
}

class Api {
  private BASE_URL = "http://localhost:3000";

  async get(endpoint: string, options?: GetOptions) {
    endpoint.replace("/", "");

    if (options?.params) {
      const serializedParams = new URLSearchParams(options.params);
      endpoint = `${endpoint}?${serializedParams}`;
    }

    const response = await fetch(`${this.BASE_URL}/${endpoint}`);
    const data = await response.json();

    return { data };
  }

  async post(endpoint: string, body: object) {
    const response = await fetch(`${this.BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response.json();
  }
}

export const api = new Api();
