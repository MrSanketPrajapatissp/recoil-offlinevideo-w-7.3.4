import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 12,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 17,
});

export const totalNotificationSelector = selector(
  {
    key : "totalNotificationSelector",
    get: ({get}) => {
      const networkCount = get(networkAtom);
      const jobsAtomCount = get(jobsAtom);
      const messagingAtomCount = get(messagingAtom);
      const notificationAtomCount = get(notificationAtom);
      return networkCount + jobsAtomCount + messagingAtomCount + notificationAtomCount;
    }
  }
)
