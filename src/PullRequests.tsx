import styled from "styled-components";
import pr from "./svg/pr.svg";
import { colors, highlights } from "./ui/colors";
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
          <Row href={d.html_url} key={d.html_url}>
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
              {reviewers.map((reviewer) => (
                <Reviewer key={reviewer}>{reviewer}</Reviewer>
              ))}
            </ul>
          </Row>
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

const Row = styled.a`
  background-color: ${colors.gray400};
  border-radius: 10px;
  padding: 3vh 4vw;
  box-shadow: 0 2px 5px #111;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  :hover {
    ${highlights}
  }
`;

const Reviewer = styled.li`
  margin: 0;
  margin-bottom: 4px;
  font-size: 0.8em;
`;
