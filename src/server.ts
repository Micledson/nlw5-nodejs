import { http } from "./http";

import "./websocket/client";

http.listen(3333, () => console.log("rodando na porta http://localhost:3333"));
