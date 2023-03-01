import { mulberry32 } from "../../utils/randomInteger";

const Conflicts = ({ params }) => {
  const random = mulberry32(parseInt(params?.id, 10));

  const body = JSON.stringify({
    conflicts: random() * 20 > 18,
  });
  const headers = { "Content-type": "application/json" };
  return new Response(body, { headers });
};

export default Conflicts;
