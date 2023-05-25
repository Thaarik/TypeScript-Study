interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
// startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
} //loose form of class.

interface User{ //reopenining of the interface
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const dave: Admin = {
  dbId: 22,
  email: "abc@AbortController.com",
  userId: 2211,
  role:"admin",
  githubToken:"adcs112",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "dave1010", off: 10) => {
    return 10;
  },
};
dave.email = "aaaa@abc.com";
