import { mulberry32 } from "../../utils/randomInteger";

const Conflicts = ({ params }) => {
  const random = mulberry32(parseInt(params?.id, 10));

  const body = JSON.stringify({
    conflicts: random() * 20 > 18,
  });

  return new Response(body, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
};

export default Conflicts;
