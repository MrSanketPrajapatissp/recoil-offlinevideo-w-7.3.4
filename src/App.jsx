import {
  RecoilRoot,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
} from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./store/atom/count";

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

  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);

  return (
    <div>
      <button>Home</button>
      <button>My Network ({finalNetworkCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>
        Messaging({messagingCount >= 100 ? "99+" : messagingCount})
      </button>
      <NotificationButtonUpdater />
      <button
        onClick={() => {
          setMessagingCount(messagingCount + 1);
        }}
      >
        Me
      </button>
    </div>
  );
}

function NotificationButtonUpdater() {
  const notificationCount = useRecoilValue(notificationAtom);
  const setNotificationAtomCount = useSetRecoilState(notificationAtom);
  return (
    <button
      onClick={() => {
        setNotificationAtomCount((c) => c + 1);
      }}
    >
      Notification({notificationCount >= 100 ? "99+" : notificationCount})
    </button>
  );
}
