import { ClientUrlWrapper } from "@/components/client-url-wrapper";
import { LinksAnalytics } from "@/components/links-analytics";

export default function Analytics() {
  return (
    <ClientUrlWrapper>
      <div>
        <LinksAnalytics />
      </div>
    </ClientUrlWrapper>
  );
}
