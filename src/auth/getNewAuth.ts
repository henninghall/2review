import { github } from "../api/githubApi";
import { fetchNewToken } from "./fetchNewToken";

let promises: (() => void)[] = [];
let refreshing = false;

export const getNewToken = async ({
  refreshToken,
}: {
  refreshToken: string;
}): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    if (refreshing) {
      promises.push(resolve);
      return;
    }
    try {
      refreshing = true;
      const response = await fetchNewToken({ refreshToken });
      github.token.set(response.access_token);
      github.refreshToken.set(response.refresh_token);
      resolve();
      promises.forEach(() => resolve());
      promises = [];
    } catch (e) {
      reject(e);
    } finally {
      refreshing = false;
    }
  });
};
