import ServerComponentOne from "@/components/server-component-one";
import { ClientComponentOne } from "@/components/client-component-one";

export default function Interleaving() {
  return (
    <>
      <h1>Interleaving!</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
