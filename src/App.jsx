import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./store/atom/count";
import { useMemo } from "react";

export default function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalNetworkCount =
    networkNotificationCount >= 100 ? "99+" : networkNotificationCount;
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const messagingCount = useRecoilValue(messagingAtom);

  // const totalCount = useMemo(() => {  // one way of doing total_count
  //   return (
  //     jobsCount + notificationCount + networkNotificationCount + messagingCount
  //   );
  // }, [jobsCount, notificationCount, networkNotificationCount, messagingCount]);

  const totalCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>My Network ({finalNetworkCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>
        Messaging({messagingCount >= 100 ? "99+" : messagingCount})
      </button>
      <button>
        Notification({notificationCount >= 100 ? "99+" : notificationCount})
      </button>
      <button>Me ({totalCount})</button>
    </div>
  );
}
