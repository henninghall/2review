// import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req, res) {
  //   const data = await get();
  res.status(200).json({});
}

// const url =
//   "https://www.sj.se/v19/rest/travels/prices/EnjaY2JmYmYKCPJ0do13Dg0KcvVzjgSJMBkwM4WFglhYITOToZm5hYmFpZEBCAC55oYGBkamhiYQLgSW5mXmZZZkJuZkVqWmYDcpLTGnOJUZAJwJEnM/EnjaNU3LCsJAEIPMD83M7k53exSKKKIHK3j1oCdPWv_ftNXAPBMSmHuKiGQqeNye77tgen3YYYLteBYc112wF5w2h91fcHWBdllQ8rxpePRaQ2DRNU-uocTMqFq_KBemaPsxNPbGLxmOFEkwDBfG5MqTmZWiylkKi84jM4kv5ekb8Q";

// const url2 =
//   "https://www.sj.se/v19/rest/travels/prices/EnjaY2JmYmYKCPJ0do13Dg0KcvVzjgSJMBkwM4WFglhYITOToZm5hYmFpZEBCAC55oYGBkamhiYQLgSW5mXmZZZkJuZkVqWmYDcpLTGnOJUZAJwJEnM/EnjabZC9DsIwDIQl-4UcO3HTjpUqRIVUCYrEygATEz_vz6WlwNAMtpU73ReHgqq5e9LEdD3fHhem5_2FSoFpMx6Y-nmehq5vh69v3zGZCFOQnJlEXL2R7LjwqlaLWUWKXqo1UsVFqYLPSok2Jq0R3R17Zswr2KHdbZd3nWCYolKMK9FZ4w8a_hTY4xdagAEKmrl94BSxhYGZYcroCX-SsM4IJs4b_RQuKg";

// const get = () => {
//   return new Promise((resolve) => {
//     fetch(url, {
//       headers: {
//         accept: "application/json",
//         "accept-language": "en-US,en;q=0.9",
//         "content-type": "application/json;charset=UTF-8",
//         "request-id": "|39eb572ade444716be47fea740b802b4.acc37a1ab06e4a02",
//         "sec-ch-ua":
//           '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": '"macOS"',
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         traceparent: "00-39eb572ade444716be47fea740b802b4-acc37a1ab06e4a02-01",
//         "x-api.sj.se-language": "sv",
//         cookie:
//           "TS01bbc3ac=01df8a84aa0bea152571a19fd80053892aa8f58e2b9e78b7b85c274e6a81090bde2cc8ec063aa6288c6411b7fabb46556fc3b8d91ae2d232422a9554a95ddfd405a776a6048dcbff3a24270d6bfbfa5f42481c744e; X-STBE=1678551362-R2947.706; BIGipServer~ap-sj_ext_prd_appl_dmz-2546~p-www.sj.se-80=rd2546o00000000000000000000ffff0af98e1co80; ai_user=MnA5TkRcStTQYCDbTMRrwt|2023-03-11T16:16:03.598Z; at_check=true; TLTSID=81760967832107161953134666619367; undefined=undefined; X-api.sj.se-session-v19=I0N_N9I3c6Rz5MxIl4uOYCXpq3paNyXW-alPqOis1urueNpjcgzwjA_wNmRmYirO0itOZWYqSKzMyy9L1EvOz2VmZgLBYC_dYFdmJgVmppAgxzBXHx_XIGYmQzNzczNTSzNDYzNLE4g6CHQNcwNRaYk5INOYAf2mEog; X-api.sj.se-service=EnjaY3IM8IwP8DZkZjIxM7VgZjIwYGYKYAYAMMoDoQ; AMCVS_C7B5FF2554F642BC0A4C98C6%40AdobeOrg=1; s_cc=true; vngage.id=49779796-10dd-431f-8c9e-3773d13a80f9+kKof1twMaqXR9aV3StfNO3uymNY53k97gtrDZSp82Q=; vngage.vid=6460D327-0E4D-46E3-BB38-424DD76EBD72; vngage.lkvt=5033E17B-A729-4803-9C33-B4261E0AD422; psCurrentState=Ready; AMCV_C7B5FF2554F642BC0A4C98C6%40AdobeOrg=-1124106680%7CMCIDTS%7C19428%7CMCMID%7C32453632345175871774316888143416083553%7CMCAAMLH-1679156166%7C6%7CMCAAMB-1679156166%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1678558566s%7CNONE%7CMCSYNCSOP%7C411-19435%7CvVersion%7C5.2.0; sj_consent_v1=%7B%22consent%22%3A%7B%22PERSONALIZATION%22%3Atrue%2C%22MARKETING%22%3Atrue%7D%2C%22uuid%22%3A%22af6de760-016c-40d1-985d-075cc6615dcf%22%7D; QueueFair-Pass-sjbookingflow=qfqid=BXDdb1M0dfWTWfUauZHvy-MMa&qfts=1678551388&qfa=sjab&qfq=sjbookingflow&qfpt=SafeGuard&qfh=0d5be04aafbe55c164ede42a6956fbefdb3bbbff1a99a3442d38dc73b9953fc3; TS0177eb83=01df8a84aad90fe216dbc9f272efecb08c9031ca9a4cc1e4b27f18f56cae5674ac9630805c99f56866cb3f9e926170d617fe842a8b85b545db44e4246527547bb8cacc14e2482fe96c220396986534cadc6ef0d206e1d426e1512f686496539bca8913d570; s_sq=%5B%5BB%5D%5D; mbox=session#76d72830a6f04cd989e23b25b0c7db01#1678553669|PC#76d72830a6f04cd989e23b25b0c7db01.37_0#1741796606; ai_session=iIBACCjfpgjFkmiQERxzBX|1678551364149|1678551808197; _uetsid=168d28b0c02811ed9b858115ba2edb4a; _uetvid=168d5f90c02811ed9c6275e4d69399b4",
//         Referer:
//           "https://www.sj.se/kop-resa/valj-resa/K%C3%B6benhavn%20H/Stockholm%20Central/2023-03-19",
//         "Referrer-Policy": "strict-origin-when-cross-origin",
//       },
//       body: null,
//       method: "GET",
//     }).then(async (res) => {
//       const json = await res.json();
//       const get = (a, b) =>
//         json.salesCategoryPrice.SEAT[a][b].journeyPriceDescription.soldOut;
//       const seats = ["STANDARD", "COMFORT", "STANDARD_EXTENDED"] as const;
//       const types = ["FIX", "FLEX", "FULL"] as const;
//       for (const seat of seats) {
//         for (const type of types) {
//           const soldOut = get(seat, type);
//           resolve({ seat, type, soldOut });
//         }
//       }
//     });
//   });
// };
