import { ClientUrlWrapper } from "@/components/client-url-wrapper";
import { LinksAnalytics } from "@/components/links-analytics";

export default function Analytics({ params }: { params: { _id: string } }) {
  return (
    <ClientUrlWrapper>
      <div>
        <LinksAnalytics />
        <div>{params._id}</div>
      </div>
    </ClientUrlWrapper>
  );
}
