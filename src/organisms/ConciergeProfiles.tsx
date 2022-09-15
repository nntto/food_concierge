import ConciergeCard from "../molecules/ConciergeCard";
import { concierges } from "../data/concierges";
import { Stack } from "@mui/material";

const ConciergeProfiles: React.FC = () => {
  return (
    <Stack spacing={2}>
      {Object.keys(concierges).map((id) => {
        return (
          <ConciergeCard concierge={concierges[id]} conciergeId={id} key={id} />
        );
      })}
    </Stack>
  );
};

export default ConciergeProfiles;
