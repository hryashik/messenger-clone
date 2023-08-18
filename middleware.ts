import { withAuth } from "next-auth/middleware";

export default withAuth({
   pages: {
      signIn: "/",
   },
});

export const config = {
<<<<<<< HEAD
   matcher: ["/users/:path*"],
=======
   matcher: ["/users/:path*", "/conversations/:path*"],
>>>>>>> dev
};
