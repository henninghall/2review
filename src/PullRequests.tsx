import pr from "./svg/pr.svg";
import { Loader } from "./ui/Loader";
import { usePullRequests } from "./usePullRequests";
const size = 30;

export const PullRequests = ({ onlyPersonal }: { onlyPersonal: boolean }) => {
  const { data, loading } = usePullRequests();

  const rows = data?.filter((d) => (onlyPersonal ? d.person.length : true));

  return (
    <>
      {rows?.map((d) => {
        const reviewers = [...d.person, ...d.teams];
        return (
          <div
            key={d.html_url}
            style={{
              backgroundColor: "#363636",
              borderRadius: 10,
              padding: "3vh 4vw",
              boxShadow: "0 2px 5px #111",
              cursor: "pointer",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 20,
            }}
            onClick={() => {
              window.open(d.html_url);
            }}
          >
            <img
              src={pr}
              alt="open pull request"
              style={{ width: size, height: size }}
            />

            <h3 style={{ flex: 3, margin: 0 }}>{d.title}</h3>
            <ul
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {reviewers.map((r) => {
                return (
                  <li
                    key={r}
                    style={{ margin: 0, marginBottom: 4, fontSize: 16 }}
                  >
                    {r}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      {loading && (
        <div style={{ justifyContent: "center", display: "flex", height: 60 }}>
          <Loader />
        </div>
      )}
    </>
  );
};
