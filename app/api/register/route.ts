import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
<<<<<<< HEAD
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
=======
>>>>>>> dev

export async function POST(request: Request) {
   try {
      const body = await request.json();
      const { email, name, password } = body;
      if (!email || !name || !password) {
<<<<<<< HEAD
         return new NextResponse("Missing info", { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

=======
         return new NextResponse("Missing info", {
            status: 400,
         });
      }
      const hashedPassword = await bcrypt.hash(
         password,
         12
      );
>>>>>>> dev
      const user = await prisma.user.create({
         data: {
            email,
            name,
            hashedPassword,
         },
      });
<<<<<<< HEAD

      return NextResponse.json(user);
   } catch (error: any) {
      if (error.code === "P2002") {
         return new NextResponse("Credentials is taken", { status: 403 });
      }
      console.log(error, "REGISTRATION_ERROR");
      return new NextResponse("Internal Error", { status: 500 });
=======
      return NextResponse.json(user);
   } catch (error: any) {
      if (error.code === "P2002") {
         return new NextResponse("Credentials is taken", {
            status: 403,
         });
      }
      console.log(error, "REGISTRATION_ERROR");
      return new NextResponse("Internal Error", {
         status: 500,
      });
>>>>>>> dev
   }
}
