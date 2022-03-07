import { AxiosError, AxiosResponse } from "axios";
import { client } from "./utils/client";

class Gmail {
  constructor() {
    this.getLabels = this.getLabels.bind(this);
  }

  /**
   *
   * @param token
   * @returns
   */
  public async getLabels<R = AxiosResponse>(token: string): Promise<R> {
    try {
      const res: AxiosResponse = await client.get("/users/me/labels", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export const gmail = new Gmail();
