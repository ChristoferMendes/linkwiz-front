class Api {
  private BASE_URL = "http://localhost:3000";

  async get(endpoint: string) {
    const serializedEndpoint = endpoint.replace("/", "");

    const response = await fetch(`${this.BASE_URL}/${serializedEndpoint}`);

    return response.json();
  }

  async post(endpoint: string, body: object) {
    const reposne = await fetch(`${this.BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}

export const api = new Api();
