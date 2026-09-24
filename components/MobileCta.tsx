import WaButton from "./WaButton";
import { BOOK_DISCOVERY_MSG } from "@/lib/pages";

export default function MobileCta() {
  return (
    <div className="mobile-cta">
      <WaButton message={BOOK_DISCOVERY_MSG} variant="accent">
        Book Discovery Conversation
      </WaButton>
    </div>
  );
}
